import { Project } from "@/types/Project";
interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, status, projectUrl } = project;
  return (
    <div className="bg-linear-to-br from-gray-900 to-black rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 shadow-2xl border border-gray-800 hover:border-gray-700 backdrop-blur-xl min-h-[280px] flex flex-col">
      <h1 className="text-3xl font-semibold text-white mb-4 tracking-tight">
        {title}
      </h1>
      <p className="text-gray-400 mb-6 text-base leading-relaxed grow">
        {description}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <span
          className={`px-7 py-2.5 rounded-full text-sm font-medium backdrop-blur-sm
                ${
                  status === "completed"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : ""
                }
                ${
                  status === "in-progress"
                    ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    : ""
                }
                ${
                  status === "planned"
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    : ""
                }
            `}
        >
          {status}
        </span>
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center gap-1"
          >
            Ansehen →
          </a>
        )}
      </div>
    </div>
  );
}
