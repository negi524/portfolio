# Astro実務Tips適用 改善計画

参考資料: [【Astro初心者向け】実務ですぐ使える便利Tips 5選](https://qiita.com/Sakaaaaai/items/58760d67235fcf7ac36d)（Qiita / @Sakaaaaai）

記事で紹介されている5つのTipsを現状のコードベースと照らし合わせ、適用可否と実施計画をまとめる。

## 現状サマリ

| 記事のTips | 現状 | 適用判断 |
| --- | --- | --- |
| 1. Content Collections | 未使用。プロジェクトデータは `src/static/constants.ts` に集約する方針だが、`/projects` ページ自体が未実装（`Project` 型のみ存在） | **採用**（プロジェクト詳細の本文管理に最適） |
| 2. `<Image />` による画像最適化 | 未使用。現状の画像は SVG のみ（`src/assets/`）でラスタ画像なし | **採用**（プロジェクトサムネイル導入時に必須） |
| 3. `client:*` ディレクティブ | UIフレームワーク不使用の純Astro構成。JSはモバイルメニューの `<script>` のみで、既に「デフォルトJSゼロ」を体現 | **対応不要**（ガイドラインとしてCLAUDE.mdに明文化のみ） |
| 4. View Transitions | 未使用 | **採用**（1行追加で効果大。カード→詳細のモーフィングと相性◎） |
| 5. `astro:env` | 環境変数を未使用のため対象なし | **見送り**（env導入時の規約としてCLAUDE.mdに明文化のみ） |

## フェーズ1: View Transitions 導入（小・独立タスク）

既存ページだけでも効果があり、リスクが低いため最初に実施する。

- [ ] `src/layouts/Layout.astro` の `<head>` に `astro:transitions` の `<ClientRouter />` を追加
- [ ] ページ間（`/` ⇔ `/skills`）の遷移アニメーションを `pnpm dev` で確認
- [ ] モバイルメニューの `<script>` が遷移後も動作することを確認
      （ClientRouter 導入によりスクリプトの再実行タイミングが変わるため、必要に応じて `astro:page-load` イベントでリスナーを登録し直す）

## フェーズ2: Content Collections でプロジェクトコンテンツ管理（主タスク）

未実装の `/projects` / `/projects/[slug]` を、`constants.ts` ベースではなく Content Collections ベースで実装する。プロジェクト詳細は「背景・技術選定理由・設計の工夫・成果」といった長文Markdownが主体になるため、TypeScript定数より Markdown + frontmatter が適している。

- [ ] `src/content/projects/` ディレクトリを作成し、プロジェクトごとの `.md` ファイルを配置
- [ ] `src/content.config.ts` を作成し、`glob()` ローダー + zod スキーマを定義
      - frontmatter: `title` / `summary` / `thumbnail`（`image()` ヘルパー） / `tags` / `techStack` / `startDate` / `endDate?` など
      - 既存の `src/types.ts` の `Project` インターフェースをスキーマ定義のベースにする
- [ ] `/projects` 一覧ページ: `getCollection('projects')` でカード一覧を表示（タグフィルタリングはCLAUDE.mdの構想に従う）
- [ ] `/projects/[slug]` 詳細ページ: `getStaticPaths` + `render()` で本文を静的生成
- [ ] `BaseLayout.astro` の `NAV_ITEMS` に `Projects` を追加
- [ ] トップページに「プロジェクトのハイライト（代表数件）」セクションを追加（CLAUDE.mdの構想に対応）
- [ ] `src/types.ts` の `Project` インターフェースを削除し、コレクションスキーマ由来の型（`CollectionEntry<'projects'>`）に一本化
- [ ] CLAUDE.md の「データ管理」「プロジェクトの状態」記述を Content Collections ベースに更新
      （スキル・経歴データは規模が小さいため `constants.ts` のまま維持し、その旨も明記する）

## フェーズ3: 画像最適化（フェーズ2に依存）

- [ ] プロジェクトサムネイル画像を `src/assets/projects/` に配置（`public/` には置かない — 最適化対象外のため）
- [ ] 一覧カード・詳細ヒーローで `astro:assets` の `<Image />` を使用（`format="webp"`, `loading="lazy"`, 幅・高さ指定）
- [ ] スキーマの `thumbnail` は `image()` ヘルパーで定義し、存在しない画像パスをビルド時に検出できるようにする
- [ ] カードのサムネイルと詳細ページのヒーロー画像に同一の `transition:name={`thumb-${id}`}` を付与し、View Transitions のモーフィングを適用（フェーズ1と連動）

## フェーズ4: ガイドラインの明文化（コード変更なし）

- [ ] CLAUDE.md に以下の開発規約を追記
  - クライアントJSは最小限に保つ。UIフレームワークのコンポーネントを導入する場合は `client:visible` を既定とし、用途に応じて `client:load` / `client:idle` / `client:media` を使い分ける
  - 環境変数を導入する場合は `import.meta.env` の直接参照ではなく `astro:env`（`envField` スキーマ定義）を使用する

## 検証方法

各フェーズ完了時に以下を実行する。

```bash
pnpm lint          # ESLint
pnpm astro check   # 型チェック
pnpm build         # docs/ への本番ビルドが通ること
pnpm preview       # base=/portfolio 込みで表示確認
```

- GitHub Pages のサブパス配信（`base: '/portfolio'`）のため、内部リンク・画像パスは必ず `import.meta.env.BASE_URL` 経由の解決になっていることを確認する
- Lighthouse でパフォーマンススコアをフェーズ3前後で比較する

## 備考（レビュー中に気付いた記事スコープ外の改善候補）

本計画のスコープ外だが、別途対応を推奨する。

- `src/types.ts` と `src/static/constants.ts` に `SkillCategory` が重複定義されている（後者は `Skill` 型で厳密化されており、`types.ts` 側は未使用の可能性が高い）
- `src/layouts/Layout.astro` の `<title>` が全ページ固定（`Portfolio`）。Props でページごとのタイトル・description を受け取る形が望ましい
- `index.astro` の Facebook リンクは `aria-label="Email"` になっており、href もプロフィールではなく `facebook.com` 直リンク
- `<meta name="robots" content="none" />` により検索エンジンから完全に除外されている（意図的であれば現状維持でよい）
