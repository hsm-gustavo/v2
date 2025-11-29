"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { smoothScrollToSection } from "@/lib/link-props";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "motion/react";

function MenuButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative flex h-5 w-16 items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.p
            key="menu"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute"
          >
            menu
          </motion.p>
        ) : (
          <motion.p
            key="close"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute"
          >
            close
          </motion.p>
        )}
      </AnimatePresence>
    </button>
  );
}

function Navbar({
  mobile,
  setIsMenuOpen,
}: {
  mobile?: boolean;
  setIsMenuOpen?: (open: boolean) => void;
}) {
  if (mobile && setIsMenuOpen) {
    return (
      <nav className="flex h-full flex-col justify-between p-4">
        <ul className="space-y-4">
          <li>
            <Link
              href={"#about"}
              onClick={(e) => {
                smoothScrollToSection(e);
                setIsMenuOpen(false);
              }}
              title="Go to About Section"
              className="block py-2"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              href={"#projects"}
              onClick={(e) => {
                smoothScrollToSection(e);
                setIsMenuOpen(false);
              }}
              title="Go to Projects Section"
              className="block py-2"
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              href={"#contact"}
              onClick={(e) => {
                smoothScrollToSection(e);
                setIsMenuOpen(false);
              }}
              title="Go to Contact Section"
              className="block py-2"
            >
              contact
            </Link>
          </li>
          <li>
            <Link
              href={"/resume.pdf"}
              title="Go to My Resume"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2"
            >
              resume
            </Link>
          </li>
        </ul>
        <div className="mt-4 border-t pt-4">
          <ModeToggle />
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-6">
      <ul className="flex items-center gap-4">
        <li>
          <Link
            href={"#about"}
            title="Go to About Section"
            onClick={(e) => smoothScrollToSection(e)}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href={"#projects"}
            title="Go to Projects Section"
            onClick={(e) => smoothScrollToSection(e)}
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            href={"#contact"}
            title="Go to Contact Section"
            onClick={(e) => smoothScrollToSection(e)}
          >
            contact
          </Link>
        </li>
        <li>
          <Link
            href={"/resume.pdf"}
            title="Go to My Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </Link>
        </li>
      </ul>
      <ModeToggle />
    </nav>
  );
}

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const isMobile = useIsMobile();

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <>
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <header
        className={`font-fira-code bg-background fixed z-50 flex w-full items-center justify-between px-4 py-3 text-sm transition-transform duration-300 md:px-8 md:py-4 ${isVisible ? "translate-y-0" : "-translate-y-[68px] shadow-2xl"}`}
      >
        <Link
          href={"#"}
          title="Go to Top"
          className="inline-block cursor-pointer space-x-1 select-none"
          onClick={(e) => smoothScrollToSection(e)}
        >
          <span className="text-primary">&lt;</span>g
          <span className="hidden md:inline-block">ustavo</span>
          <span className="text-primary">/</span>
          <span className="text-primary">&gt;</span>
        </Link>

        {isMobile && (
          <>
            <MenuButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.3 }}
                  className="bg-background fixed top-full right-0 h-[calc(100vh-44px)] w-full max-w-48 shadow-lg"
                >
                  <Navbar mobile setIsMenuOpen={setIsMenuOpen} />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {!isMobile && <Navbar />}
      </header>
    </>
  );
}
