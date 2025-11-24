export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  thumbnailUrl: string; // Placeholder URL
  tags: string[];
  role: string;
  techStack: string[];
  challenges?: string;
  solutions?: string;
  teamSize?: number;
  year: string;
}

export interface NavItem {
  label: string;
  path: string;
}

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
