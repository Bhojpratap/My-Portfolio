"use client";

import { useMotionValue } from "framer-motion";
import ScrollyVideo from "@/components/ScrollyVideo";
import Overlay from "@/components/Overlay";

export default function Hero() {
  // Mobile uses a static hero image; keep the first overlay panel visible.
  const staticProgress = useMotionValue(0);

  return (
    <div className="relative" id="home">
      <div className="relative h-screen w-full bg-[#0a0a0a] bg-[#0a0a0a]  overflow-hidden md:hidden">
        <img 
          src="/image/my.png"
          alt="Hero background"
          className="h-full w-full object-cover rounded-b-[2.2rem]"
        />
        <Overlay scrollYProgress={staticProgress} />
      </div>

      <div className="hidden md:block">
        {/* <ScrollyVideo src="/hero-video.mp4"> */}
        <ScrollyVideo src="/video4.mp4">
          {(progress: any) => <Overlay scrollYProgress={progress} />}
        </ScrollyVideo>
      </div>
    </div>
  );
}
