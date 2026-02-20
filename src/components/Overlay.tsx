"use client";

import { MotionValue, useTransform, motion } from "framer-motion";

export default function Overlay({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number> | any;
}) {
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const opacity2 = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4, 0.5],
    [0, 1, 1, 0]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7, 0.8],
    [0, 1, 1, 0]
  );

  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div className="absolute font-dancing inset-0 pointer-events-none z-10 flex flex-col justify-center text-white mix-blend-difference">
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center p-6 md:p-8"
      >
        <div className="text-center md:hidden">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 leading-[1.2]">Bhojpratap Sahu.</h1>
                <p className="text-2xl font-bold tracking-tight">Software Developer.</p>
            </div>
            <div className="text-center hidden md:block">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">Bhojpratap Sahu.</h1>
                <p className="text-2xl md:text-4xl font-bold tracking-tight">Full Stack Developer.</p>
            </div>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-center md:justify-start p-6 md:p-24 text-center md:text-left"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Building Scalable <br />
            <span className="text-blue-500">UI</span> & Web Apps.
          </h2>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-center md:justify-end p-6 md:p-24 text-center md:text-right"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Expertise in <span className="text-purple-500">
             React.js </span>
             <br />
                Node.js & Cloud.
          </h2>
        </div>
      </motion.div>
    </div>
  );
}
