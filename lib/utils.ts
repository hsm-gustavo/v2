import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
