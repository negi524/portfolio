import type { Project } from '../types';

export type Skill =
  | 'HTML'
  | 'CSS, SCSS'
  | 'TypeScript'
  | 'React, ReactRouter'
  | 'Vue, Nuxt.js'
  | 'Astro'
  | 'Java'
  | 'SpringBoot'
  | 'NestJS'
  | 'Python'
  | 'FastAPI'
  | 'Ruby on Rails'
  | 'Solr'
  | 'ドメイン駆動設計'
  | 'クリーンアーキテクチャ'
  | 'API設計'
  | 'Claude Code'
  | 'MCP'
  | 'Dify'
  | 'GitHub Actions'
  | 'Docker'
  | 'Kubernetes'
  | 'n8n'
  | 'NeoVim'
  | 'VSCode'
  | 'IntelliJ'
  | 'Slack'
  | 'Zoom'
  | 'Figma'
  | 'Miro'
  | 'Notion'
  | 'Jira, Confluence';

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      'HTML',
      'CSS, SCSS',
      'TypeScript',
      'React, ReactRouter',
      'Vue, Nuxt.js',
      'Astro',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Java',
      'SpringBoot',
      'TypeScript',
      'NestJS',
      'Python',
      'FastAPI',
      'Ruby on Rails',
      'Solr',
    ],
  },
  {
    title: 'Architecture',
    skills: ['ドメイン駆動設計', 'クリーンアーキテクチャ', 'API設計'],
  },
  {
    title: 'LLM / AI',
    skills: ['Claude Code', 'MCP', 'Dify'],
  },
  {
    title: 'Infrastructure / DevOps',
    skills: ['GitHub Actions', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Tools',
    skills: [
      'n8n',
      'NeoVim',
      'VSCode',
      'IntelliJ',
      'Slack',
      'Zoom',
      'Figma',
      'Miro',
      'Notion',
      'Jira, Confluence',
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    slug: 'financial-dashboard',
    title: 'エンタープライズ金融ダッシュボード',
    summary:
      'フィンテックユニコーン向けのリアルタイム分析ダッシュボード。高頻度のデータ更新を処理。',
    description:
      '社内アナリストが世界の取引フローをリアルタイムで監視するために使用する包括的な金融ダッシュボードを開発。UIの遅延なしに数千のデータポイントを描画する必要がありました。',
    thumbnailUrl: 'https://picsum.photos/800/600?random=1',
    tags: ['Frontend', 'Performance', 'Fintech'],
    techStack: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Redux Toolkit'],
    challenges:
      'WebSocketメッセージの大量流入（毎秒50件以上）による描画パフォーマンスが主なボトルネックでした。',
    solutions:
      'データの間引き（スロットリング）、表形式データの仮想化リスト、メインスレッド外でのデータ処理のためのWeb Workerを実装しました。',
    startDate: '2023-01',
    endDate: '2023-12',
  },
  {
    id: '2',
    slug: 'ecommerce-platform',
    title: 'ヘッドレスEコマース移行',
    summary:
      'レガシーなモノリシックEコマースサイトをモダンなヘッドレスアーキテクチャへ移行。',
    description:
      'トラフィックの多い小売クライアントの移行戦略を主導。モノリシックな.NETアプリケーションをマイクロサービスとNext.jsフロントエンドに分解しました。',
    thumbnailUrl: 'https://picsum.photos/800/600?random=2',
    tags: ['Fullstack', 'Architecture', 'E-commerce'],
    techStack: ['Next.js', 'Node.js', 'GraphQL', 'Stripe API', 'Contentful'],
    challenges:
      '移行中のSEOランキングの維持と、決済ゲートウェイのゼロダウンタイムの確保。',
    solutions:
      '商品ページにインクリメンタル静的再生成（ISR）を使用し、チェックアウトフローで広範なA/Bテストを実施しました。',
    startDate: '2022-04',
    endDate: '2022-10',
  },
  {
    id: '3',
    slug: 'ai-doc-assistant',
    title: '法的文書AIアシスタント',
    summary:
      'LLMを活用して法的契約書の要約とエンティティ抽出を行う社内ツール。',
    description:
      '法務チームがPDFをアップロードし、RAG（検索拡張生成）を使用して条項について質問できる安全な社内ツールを構築しました。',
    thumbnailUrl: 'https://picsum.photos/800/600?random=3',
    tags: ['AI/LLM', 'Backend', 'Internal Tool'],
    techStack: ['Python', 'LangChain', 'OpenAI API', 'React', 'Pinecone'],
    challenges:
      'データのプライバシー確保と、重要な法的用語に関するハルシネーション（もっともらしい嘘）の防止。',
    solutions:
      '厳格なプロンプトエンジニアリングガイドラインと、生成された回答を特定のソース段落にリンクする「引用」機能を実装しました。',
    startDate: '2024-01',
  },
  {
    id: '4',
    slug: 'health-tracker-iot',
    title: 'IoTヘルスモニター',
    summary:
      'Bluetooth経由でウェアラブルIoTデバイスと同期するモバイル対応Webアプリ。',
    description:
      '独自のウェアラブルデバイスから同期された健康指標を表示する消費者向けアプリケーション。',
    thumbnailUrl: 'https://picsum.photos/800/600?random=4',
    tags: ['Mobile', 'IoT', 'Health'],
    techStack: ['React', 'Web Bluetooth API', 'PWA', 'IndexedDB'],
    challenges: '異なるブラウザ実装間でのBluetooth接続の信頼性。',
    solutions:
      '再接続とフォールバックを適切に処理するための堅牢な接続ステートマシンを作成しました。',
    startDate: '2021-06',
    endDate: '2021-12',
  },
];
