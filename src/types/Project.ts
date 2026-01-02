export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  status: "in-progress" | "completed" | "planned" | "beta-test";
  category: "ai" | "non-ai";
  projectUrl?: string;
  techStack?: string[];
  screenshots?: string[];
  features?: string[];
}
