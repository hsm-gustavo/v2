"use client";

import { projects } from "@/lib/project-data";
import ProjectComponent from "./project-component";
import { useRef } from "react";

export default function Projects() {
  const highlightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const HIGHLIGHT_PADDING = 6;

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const highlight = highlightRef.current;
    const container = containerRef.current;
    if (!highlight || !container) return;

    const itemRect = e.currentTarget.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const top = itemRect.top - containerRect.top - HIGHLIGHT_PADDING;
    const left = itemRect.left - containerRect.left - HIGHLIGHT_PADDING;

    const width = itemRect.width + HIGHLIGHT_PADDING * 2;
    const height = itemRect.height + HIGHLIGHT_PADDING * 2;

    highlight.style.opacity = "1";
    highlight.style.transform = `translate(${left}px, ${top}px)`;
    highlight.style.width = `${width}px`;
    highlight.style.height = `${height}px`;
  };

  const handleLeaveContainer = () => {
    const highlight = highlightRef.current;
    if (!highlight) return;

    highlight.style.opacity = "0";
  };

  return (
    <section
      className="container mx-auto content-center space-y-4 px-4"
      id="projects"
    >
      <h2 className="text-center text-4xl font-bold text-shadow-2xs text-shadow-black/55">
        Some of My Projects
      </h2>
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        ref={containerRef}
        onMouseLeave={handleLeaveContainer}
      >
        <div
          className="ease-smooth pointer-events-none absolute border-2 border-white/50 opacity-0 transition-all duration-300"
          ref={highlightRef}
        />
        {projects.map((project) => (
          <ProjectComponent
            key={project.title}
            {...project}
            onMouseEnter={handleEnter}
          />
        ))}
      </div>
    </section>
  );
}
