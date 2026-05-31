"use client";

import { Course } from "@/types";
import { motion, Variants } from "framer-motion";
import * as Icons from "lucide-react";
import { useEffect, useState } from "react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export default function CourseCard({ course }: { course: Course }) {
  const [progress, setProgress] = useState(0);

  // Dynamically load the icon from Lucide React based on the database string
  const IconComponent = (Icons[course.icon_name as keyof typeof Icons] || Icons.Book) as React.ElementType;
  useEffect(() => {
    // Delay progress bar animation slightly for a dramatic reveal
    const timer = setTimeout(() => {
      setProgress(course.progress);
    }, 400);
    return () => clearTimeout(timer);
  }, [course.progress]);

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative p-6 rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden group cursor-pointer flex flex-col justify-between min-h-[220px]"
    >
      {/* Subtle background gradient that shifts on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Subtle glowing border effect on hover */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-2xl transition-colors duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="p-3 bg-neutral-950 rounded-xl w-fit text-neutral-400 group-hover:text-neutral-100 transition-colors border border-neutral-800">
          <IconComponent size={24} />
        </div>

        <h3 className="text-xl font-semibold text-neutral-200 mt-4 mb-6">
          {course.title}
        </h3>

        <div className="mt-auto">
          <div className="flex justify-between text-sm text-neutral-400 mb-2">
            <span>Progress</span>
            <span className="text-neutral-200 font-medium">{course.progress}%</span>
          </div>
          {/* Animated Progress Bar */}
          <div className="h-2 w-full bg-neutral-950 rounded-full overflow-hidden border border-neutral-800">
            <motion.div
              className="h-full bg-gradient-to-r from-neutral-500 to-neutral-200 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}