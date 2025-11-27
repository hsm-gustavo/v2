"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  /* scroll -top-14 */
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 56) {
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
      className={`font-fira-code bg-background fixed flex w-full items-center justify-between px-4 py-3 shadow-2xl transition-transform duration-300 md:px-8 md:py-4 ${isVisible ? "translate-y-0" : "-translate-y-14"}`}
    >
      <Link
        href={"/"}
        className="inline-block cursor-pointer space-x-1 select-none"
      >
        <span className="text-primary">&lt;</span>g
        <span className="hidden md:inline-block">ustavo</span>
        <span className="text-primary">/</span>
        <span className="text-primary">&gt;</span>
      </Link>

      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href={"#about"}>about</Link>
          </li>
          <li>
            <Link href={"#projects"}>projects</Link>
          </li>
          <li>
            <Link href={"#contact"}>contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
