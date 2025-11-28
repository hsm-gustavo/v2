"use client";

import { projects } from "@/lib/project-data";
import ProjectComponent from "./project-component";
import { useEffect, useRef } from "react";

export default function Projects() {
  const highlightRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const HIGHLIGHT_PADDING = 6;

  const moveHighlightTo = (targetEl: HTMLElement | null) => {
    const highlight = highlightRef.current;
    const container = containerRef.current;
    if (!highlight || !container || !targetEl) return;

    const targetRect = targetEl.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const left = targetRect.left - containerRect.left - HIGHLIGHT_PADDING;
    const top = targetRect.top - containerRect.top - HIGHLIGHT_PADDING;
    const width = targetRect.width + HIGHLIGHT_PADDING * 2;
    const height = targetRect.height + HIGHLIGHT_PADDING * 2;

    highlight.style.width = `${Math.round(width)}px`;
    highlight.style.height = `${Math.round(height)}px`;
    highlight.style.transform = `translate3d(${Math.round(left)}px, ${Math.round(top)}px, 0)`;
    highlight.style.opacity = "1";
  };

  const hideHighlight = () => {
    const highlight = highlightRef.current;
    if (!highlight) return;
    highlight.style.opacity = "0";
  };

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLElement;
    moveHighlightTo(el);
  };

  useEffect(() => {
    const onResize = () => hideHighlight();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      className="container mx-auto content-center space-y-4 px-4"
      id="projects"
    >
      <h2 className="text-center text-3xl font-bold text-shadow-2xs text-shadow-black/55 lg:text-4xl">
        Some of My Projects
      </h2>
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        ref={containerRef}
        onMouseLeave={hideHighlight}
      >
        <div
          className="ease-smooth pointer-events-none absolute border-2 border-white/50 opacity-0 transition-all duration-300"
          aria-hidden
          style={{
            transform: "translate3d(0,0,0)",
            width: 0,
            height: 0,
          }}
          ref={highlightRef}
        />
        {projects.map((project) => (
          <ProjectComponent
            key={project.title}
            {...project}
            onMouseEnter={handleEnter}
            onMouseLeave={hideHighlight}
          />
        ))}
      </div>
    </section>
  );
}
