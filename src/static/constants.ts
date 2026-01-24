import type { Experience } from '../types';

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

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: '3',
    period: '2024 - Present',
    title: 'toB向けHR領域企業 - メンバー',
    description: ['MVP段階の新規システム開発', '社内AI環境の整備・推進'],
  },
  {
    id: '2',
    period: '2022 - 2024',
    title: 'toC向けWebサービス企業 - マネージャー',
    description: [
      '5人のチームをマネジメント',
      '検索領域とポイント付与の領域に関わるシステムを開発・保守運用・リプレイス',
    ],
  },
  {
    id: '1',
    period: '2018 - 2022',
    title: 'toC向けWebサービス企業 - メンバー',
    description: [
      '飲食領域のプロダクトを担当',
      'フロントエンド、バックエンド、新規開発、リプレイス、保守運用など幅広く経験',
      '特に長くやった領域は検索バックエンド',
    ],
  },
];
