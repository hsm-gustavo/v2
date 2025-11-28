import { projects } from "@/lib/project-data";
import ProjectComponent from "./project-component";
import { HoverHighlight } from "./hover-highlight";

export default function Projects() {
  const HIGHLIGHT_PADDING = 12;

  return (
    <section
      className="container mx-auto content-center space-y-4 px-4"
      id="projects"
    >
      <h2 className="text-center text-3xl font-bold text-shadow-2xs text-shadow-black/55 lg:text-4xl">
        Some of My Projects
      </h2>
      <HoverHighlight
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        padding={HIGHLIGHT_PADDING}
      >
        {projects.map((project) => (
          <ProjectComponent key={project.title} {...project} />
        ))}
      </HoverHighlight>
    </section>
  );
}
