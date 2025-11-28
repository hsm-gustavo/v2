"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { smoothScrollToSection } from "@/lib/link-props";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 70) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`font-fira-code bg-background fixed z-50 flex w-full items-center justify-between px-4 py-3 text-sm transition-transform duration-300 md:px-8 md:py-4 ${isVisible ? "translate-y-0" : "-translate-y-[68px] shadow-2xl"}`}
    >
      <Link
        href={"#"}
        className="inline-block cursor-pointer space-x-1 select-none"
        onClick={(e) => smoothScrollToSection(e)}
      >
        <span className="text-primary">&lt;</span>g
        <span className="hidden md:inline-block">ustavo</span>
        <span className="text-primary">/</span>
        <span className="text-primary">&gt;</span>
      </Link>

      <nav className="flex items-center gap-6">
        <ul className="flex items-center gap-4">
          <li>
            <Link href={"#about"} onClick={(e) => smoothScrollToSection(e)}>
              about
            </Link>
          </li>
          <li>
            <Link href={"#projects"} onClick={(e) => smoothScrollToSection(e)}>
              projects
            </Link>
          </li>
          <li>
            <Link href={"#contact"} onClick={(e) => smoothScrollToSection(e)}>
              contact
            </Link>
          </li>
        </ul>
        <ModeToggle />
      </nav>
    </header>
  );
}
