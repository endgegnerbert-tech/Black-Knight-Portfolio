export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  status: "in-progress" | "completed" | "planned" | "beta-test";
  projectUrl?: string;
  techStack?: string[];
  screenshots?: string[];
  features?: string[];
}
