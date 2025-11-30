import { Project } from "@/types/Project";
 interface ProjectCardProps {
     project: Project;
 }

 export default function ProjectCard({ project }: ProjectCardProps) {
    const{ title, description, status, projectUrl } = project;
     return (
        <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform duration-300 shadow-lg">
            <h1 className="text-2xl font-bold text-white mb-3">{title}</h1>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="flex items-center justify-between">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold
                    ${status === "Abgeschlossen" ? "bg-green-600" : ""}
                    ${status === "In Arbeit" ? "bg-yellow-600" : ""}
                    ${status === "Geplant" ? "bg-blue-600" : ""}
                `}>
                    {status}
                </span>
                {projectUrl && (
                    <a href={projectUrl} target="_blank" rel="noopener noreferrer"
                       className="text-blue-400 hover:text-blue-300 font-semibold">
                        Ansehen →
                    </a>
                )}
            </div>
        </div>
     )
    }