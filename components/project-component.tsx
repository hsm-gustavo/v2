"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";
import { useLinkProps } from "@/lib/link-props";
import ProjectDefaultComponent from "./project-default-component";

interface ProjectComponentProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
  codeUrl?: string;
  side?: "left" | "right";
  validateMobile?: boolean;
}

export default function ProjectComponent({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  codeUrl,
  side = "left",
  validateMobile = true,
}: ProjectComponentProps) {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const textParallax = useTransform(scrollYProgress, [0, 1], [0, -75]);

  const linkProps = useLinkProps(projectUrl, codeUrl);

  if (!isMobile && validateMobile) {
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
          style={{ y: imageParallax }}
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
          style={{ y: textParallax }}
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
    <ProjectDefaultComponent
      title={title}
      description={description}
      tags={tags}
      imageUrl={imageUrl}
      projectUrl={projectUrl}
      codeUrl={codeUrl}
      linkProps={linkProps}
    />
  );
}
