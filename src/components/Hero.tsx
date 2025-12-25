"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Projekte } from "@/data/Projekte";
import Sidebar from "./Sidebar";
import AboutView from "./AboutView";
import ContactView from "./ContactView";
import ProjectsListView from "./ProjectsListView";

type ActiveView = "about" | "projects" | "contact";

export default function Hero() {
  const [activeView, setActiveView] = useState<ActiveView>("about");
  const router = useRouter();

  const handleProjectClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <section className="min-h-screen flex text-white relative z-10">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />

      {/* Right Content Area */}
      <div className="flex-1 p-8 md:p-12 overflow-y-auto">
        {activeView === "about" && <AboutView />}

        {activeView === "projects" && (
          <ProjectsListView
            projects={Projekte}
            onProjectClick={handleProjectClick}
          />
        )}

        {activeView === "contact" && <ContactView />}
      </div>
    </section>
  );
}
