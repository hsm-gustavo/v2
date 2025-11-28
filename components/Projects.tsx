import { projects } from "@/lib/project-data";
import ProjectComponent from "./project-component";
import { HoverHighlight } from "./hover-highlight";
import { LineSeparator } from "./separators";
import SideProjects from "./SideProjects";

export default function Projects() {
  const HIGHLIGHT_PADDING = 16;

  return (
    <section
      className="container mx-auto content-center space-y-4 px-4"
      id="projects"
    >
      <h2 className="mb-28 text-center text-3xl font-bold text-shadow-2xs text-shadow-black/55 lg:text-4xl">
        Some of My Projects
      </h2>
      <HoverHighlight
        className="flex flex-col gap-8"
        padding={HIGHLIGHT_PADDING}
      >
        {projects.map((project, index) => (
          <ProjectComponent
            key={project.title}
            {...project}
            side={(index + 1) % 2 === 0 ? "left" : "right"}
          />
        ))}
      </HoverHighlight>
      <LineSeparator />
      <SideProjects />
    </section>
  );
}
