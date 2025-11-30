export interface Project {
  id: number;
  title: string;
  description: string;
  status: "In Arbeit" | "Abgeschlossen" | "Geplant";
  projectUrl?: string;
}