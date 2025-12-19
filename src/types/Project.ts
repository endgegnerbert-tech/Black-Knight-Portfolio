export interface Project {
  id: number;
  title: string;
  description: string;
  status: "in-progress" | "completed" | "planned";
  projectUrl?: string;
}