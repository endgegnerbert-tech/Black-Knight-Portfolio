import { Projekte } from "@/data/Projekte";
import ProjectCard from "./ProjectCard";

export default function GProject() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-17">
          Meine Projekte
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projekte.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
