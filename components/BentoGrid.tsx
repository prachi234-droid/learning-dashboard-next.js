"use client";

import { Course } from "@/types";
import { motion, Variants } from "framer-motion";
import CourseCard from "./CourseCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function BentoGrid({ courses }: { courses: Course[] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min"
    >
      {/* Activity Tile - Fulfills the "medium tile showing a mock chart" requirement */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
        }}
        className="col-span-1 md:col-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col min-h-[220px] group relative overflow-hidden"
      >
         <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
         <h2 className="text-xl font-semibold z-10 text-neutral-200">Weekly Activity</h2>
         <div className="mt-4 flex-1 w-full bg-neutral-950/50 rounded-xl border border-neutral-800/50 flex items-center justify-center text-neutral-500 text-sm z-10">
            [Activity Chart Mockup]
         </div>
      </motion.div>

      {/* Dynamic Course Tiles */}
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </motion.div>
  );
}