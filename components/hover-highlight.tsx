"use client";

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HoverHighlightProps {
  children: React.ReactNode;
  padding?: number;
  className?: string;
}

export function HoverHighlight({
  children,
  padding = 6,
  className = "",
}: HoverHighlightProps) {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  if (!isMobile) {
    return <div className={cn("relative", className)}>{children}</div>;
  }

  const handleHover = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const container = containerRef.current?.getBoundingClientRect();

    if (!container) return;

    const adjusted = new DOMRect(
      r.left - container.left - padding,
      r.top - container.top - padding,
      r.width + padding * 2,
      r.height + padding * 2,
    );

    setRect(adjusted);
  };

  const clear = () => setRect(null);

  return (
    <div ref={containerRef} className="relative">
      {/* the highlight */}
      <AnimatePresence>
        {rect && (
          <motion.div
            layout
            key={"highlight"}
            className="absolute rounded-md border-2 border-white/50"
            style={{
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.2 }}
          />
        )}

        <div className={cn("relative z-10", className)}>
          {Array.isArray(children)
            ? children.map((child, index) => (
                <div
                  key={index}
                  onMouseEnter={handleHover}
                  onMouseLeave={clear}
                >
                  {child}
                </div>
              ))
            : children}
        </div>
      </AnimatePresence>
    </div>
  );
}
