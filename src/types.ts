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
  techStack: string[];
  challenges?: string;
  solutions?: string;
  year: string;
}

export interface NavItem {
  label: string;
  path: string;
}
