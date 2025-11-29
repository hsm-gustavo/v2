import { useMemo } from "react";

export const smoothScrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) => {
  e.preventDefault();
  let href = e.currentTarget.getAttribute("href");
  const offset = 70; // height of the header
  if (href === "#") {
    href = "html";
  }
  const target = href ? document.querySelector(href) : null;
  if (target) {
    const top =
      target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export function useLinkProps(projectUrl?: string, codeUrl?: string) {
  return useMemo(() => {
    const href = projectUrl ?? codeUrl ?? "#projects";
    const hasExternalUrl = projectUrl || codeUrl;

    return {
      href,
      target: hasExternalUrl ? "_blank" : undefined,
      rel: hasExternalUrl ? "noopener noreferrer" : undefined,
      onClick: hasExternalUrl ? undefined : smoothScrollToSection,
      title: hasExternalUrl ? "Open Project Link" : "Go to Projects Section",
    };
  }, [projectUrl, codeUrl]);
}
