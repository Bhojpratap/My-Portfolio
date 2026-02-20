"use client";

import ScrollyVideo from "@/components/ScrollyVideo";
import ScrollyImage from "@/components/ScrollyImage";
import Overlay from "@/components/Overlay";

export default function Hero() {
  return (
    <div className="relative" id="home">
      <div className="md:hidden">
        <ScrollyImage           src="/image/my.png"
>
          {(progress: any) => <Overlay scrollYProgress={progress} />}
        </ScrollyImage>
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
