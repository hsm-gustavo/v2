"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn, smoothScrollToSection } from "@/lib/utils";
import { Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";

interface ProjectComponentProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
  codeUrl?: string;
  side?: "left" | "right";
}

export default function ProjectComponent({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  codeUrl,
  side = "left",
}: ProjectComponentProps) {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const textParallax = useTransform(scrollYProgress, [0, 1], [0, -75]);

  const linkProps = useMemo(() => {
    const href = projectUrl ?? codeUrl ?? "#projects";
    const hasExternalUrl = projectUrl || codeUrl;

    return {
      href,
      target: hasExternalUrl ? "_blank" : undefined,
      rel: hasExternalUrl ? "noopener noreferrer" : undefined,
      onClick: hasExternalUrl ? undefined : smoothScrollToSection,
    };
  }, [projectUrl, codeUrl]);

  if (!isMobile) {
    return (
      <Link
        className="group relative grid h-full w-full grid-cols-[repeat(6,1fr)] items-center gap-2.5 rounded-sm"
        role="group"
        {...linkProps}
        ref={ref}
      >
        <motion.figure
          className={cn(
            "image-shadow relative aspect-video",
            side === "left" ? "col-[4/7] row-1" : "col-[1/4] row-1",
          )}
          style={{ y: side === "left" ? imageParallax : textParallax }}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="rounded-sm object-cover opacity-80"
            loading="lazy"
          />
        </motion.figure>
        <motion.div
          className={cn(
            "bg-secondary text-secondary-foreground z-10 w-full rounded-sm p-8 text-shadow-2xs",
            side === "left" ? "col-[1/5] row-1" : "col-[3/7] row-1",
          )}
          style={{ y: side === "left" ? textParallax : imageParallax }}
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="my-4 text-base md:text-lg">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-fira-code bg-background/50 px-3 py-1 text-xs md:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link
      className="bg-primary/20 focus:ring-primary relative block h-full w-full max-w-3xl overflow-hidden rounded-sm p-8"
      role="group"
      {...linkProps}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover opacity-10"
      />

      <div className="relative">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="my-4 text-base md:text-lg">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-fira-code bg-background/50 px-3 py-1 text-xs md:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-0 m-2 flex gap-2">
        {projectUrl && (
          <div>
            <ExternalLink className="h-5 w-5 text-white/70 hover:text-white" />
          </div>
        )}
        {codeUrl && (
          <div>
            <Code className="h-5 w-5 text-white/70 hover:text-white" />
          </div>
        )}
      </div>
    </Link>
  );
}
