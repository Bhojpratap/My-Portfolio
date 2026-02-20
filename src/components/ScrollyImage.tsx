"use client";

import { useScroll, useSpring, MotionValue } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollyImageProps {
  src: string;
  alt?: string;
  children?: (progress: MotionValue<number>) => ReactNode;
}

export default function ScrollyImage({
  src,
  alt = "Hero background",
  children,
}: ScrollyImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 40,
    stiffness: 200,
  });

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
        {children && children(smoothProgress)}
      </div>
    </div>
  );
}
