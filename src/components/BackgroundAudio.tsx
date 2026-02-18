"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Restore saved preference
    try {
      const val = localStorage.getItem("bg:playing");
      if (val === "true") setPlaying(true);
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      const p = audio.play();
      // Safari/Chrome may return a promise
      if (p && typeof p.then === "function") p.catch(() => setPlaying(false));
    } else {
      audio.pause();
      try {
        audio.currentTime = 0;
      } catch {}
    }

    try {
      localStorage.setItem("bg:playing", playing ? "true" : "false");
    } catch {}
  }, [playing, mounted]);

  return (
    <>
      <audio ref={audioRef} loop preload="auto" src="/bg-music.mp3.mp3" />

      {mounted && (
        <motion.div
          onClick={() => setPlaying(!playing)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="fixed right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/6 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 transition-all shadow-lg cursor-pointer"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={playing ? "on" : "off"}
              transition={{ duration: 0.3 }}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                {playing ? (
                  <>
                    <rect x="4" y="8" width="3" height="8" rx="1">
                      <animate
                        attributeName="height"
                        values="6;14;6"
                        dur="0.9s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="y"
                        values="10;6;10"
                        dur="0.9s"
                        repeatCount="indefinite"
                      />
                    </rect>

                    <rect x="9" y="6" width="3" height="12" rx="1">
                      <animate
                        attributeName="height"
                        values="8;18;8"
                        dur="0.6s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="y"
                        values="8;3;8"
                        dur="0.6s"
                        repeatCount="indefinite"
                      />
                    </rect>

                    <rect x="14" y="9" width="3" height="6" rx="1">
                      <animate
                        attributeName="height"
                        values="5;14;5"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="y"
                        values="11;6;11"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </rect>

                    <rect x="19" y="7" width="3" height="10" rx="1">
                      <animate
                        attributeName="height"
                        values="7;16;7"
                        dur="0.7s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="y"
                        values="9;4;9"
                        dur="0.7s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </>
                ) : (
       <>
   <rect x="4" y="8" width="3" height="8" rx="1">
                      
                    </rect>

                    <rect x="9" y="6" width="3" height="12" rx="1">
                     
                    </rect>

                    <rect x="14" y="9" width="3" height="6" rx="1">
                    
                    </rect>

                    <rect x="19" y="7" width="3" height="10" rx="1">
                     
                    </rect>
  </>
                )}
              </svg>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
