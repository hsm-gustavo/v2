import { sideProjects } from "@/lib/project-data";
import { HoverHighlight } from "./hover-highlight";
import ProjectDefaultComponent from "./project-default-component";

export default function SideProjects() {
  const HIGHLIGHT_PADDING = 6;

  return (
    <>
      <h2 className="text-center text-3xl font-bold text-shadow-2xs text-shadow-black/55 lg:text-4xl">
        Some side projects I&apos;ve worked on
      </h2>
      <HoverHighlight
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        padding={HIGHLIGHT_PADDING}
        validateMobile={false}
      >
        {sideProjects.map((project) => {
          return <ProjectDefaultComponent key={project.title} {...project} />;
        })}
      </HoverHighlight>
    </>
  );
}
