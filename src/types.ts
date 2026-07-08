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
  startDate: string;
  endDate?: string;
}

export interface Experience {
  id: string;
  period: string;
  title: string;
  description: string[];
}

export interface NavItem {
  label: string;
  path: string;
}
