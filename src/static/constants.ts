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

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    slug: 'financial-dashboard',
    title: 'Enterprise Financial Dashboard',
    summary:
      'A real-time analytics dashboard for a fintech unicorn, handling high-frequency data updates.',
    description:
      'Developed a comprehensive financial dashboard used by internal analysts to monitor global transaction flows in real-time. The system needed to render thousands of data points without UI lag.',
    thumbnailUrl: 'https://picsum.photos/800/600?random=1',
    tags: ['Frontend', 'Performance', 'Fintech'],
    role: 'Lead Frontend Engineer',
    techStack: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Redux Toolkit'],
    challenges:
      'Rendering performance was the main bottleneck due to the volume of incoming WebSocket messages (50+ per second).',
    solutions:
      'Implemented data throttling, virtualized lists for tabular data, and Web Workers for data processing off the main thread.',
    teamSize: 6,
    year: '2023',
  },
  {
    id: '2',
    slug: 'ecommerce-platform',
    title: 'Headless E-commerce Migration',
    summary:
      'Migrating a legacy monolithic e-commerce site to a modern headless architecture.',
    description:
      'Led the migration strategy for a high-traffic retail client. Decomposed a monolithic .NET application into microservices and a Next.js frontend.',
    thumbnailUrl: 'https://picsum.photos/800/600?random=2',
    tags: ['Fullstack', 'Architecture', 'E-commerce'],
    role: 'Solutions Architect',
    techStack: ['Next.js', 'Node.js', 'GraphQL', 'Stripe API', 'Contentful'],
    challenges:
      'Maintaining SEO ranking during the migration and ensuring zero downtime for the payment gateway.',
    solutions:
      'Used incremental static regeneration (ISR) for product pages and extensive A/B testing on the checkout flow.',
    teamSize: 10,
    year: '2022',
  },
  {
    id: '3',
    slug: 'ai-doc-assistant',
    title: 'Legal Document AI Assistant',
    summary:
      'An internal tool leveraging LLMs to summarize and extract entities from legal contracts.',
    description:
      'Built a secure internal tool that allows legal teams to upload PDFs and ask questions about clauses using RAG (Retrieval-Augmented Generation).',
    thumbnailUrl: 'https://picsum.photos/800/600?random=3',
    tags: ['AI/LLM', 'Backend', 'Internal Tool'],
    role: 'Senior Fullstack Engineer',
    techStack: ['Python', 'LangChain', 'OpenAI API', 'React', 'Pinecone'],
    challenges:
      'Ensuring data privacy and preventing hallucination on critical legal terms.',
    solutions:
      'Implemented strict prompt engineering guidelines and a "citation" feature that links generated answers back to specific source paragraphs.',
    teamSize: 4,
    year: '2024',
  },
  {
    id: '4',
    slug: 'health-tracker-iot',
    title: 'IoT Health Monitor',
    summary:
      'Mobile-responsive web app syncing with wearable IoT devices via Bluetooth.',
    description:
      'A consumer-facing application displaying health metrics synced from a proprietary wearable device.',
    thumbnailUrl: 'https://picsum.photos/800/600?random=4',
    tags: ['Mobile', 'IoT', 'Health'],
    role: 'Frontend Engineer',
    techStack: ['React', 'Web Bluetooth API', 'PWA', 'IndexedDB'],
    challenges:
      'Reliability of Bluetooth connections across different browser implementations.',
    solutions:
      'Created a robust connection state machine to handle reconnects and fallbacks gracefully.',
    teamSize: 3,
    year: '2021',
  },
];
