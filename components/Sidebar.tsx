"use client";

import { motion } from "framer-motion";
import { Home, BookOpen, Activity, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/", label: "Dashboard", icon: Home },
  { path: "/courses", label: "Courses", icon: BookOpen },
  { path: "/activity", label: "Activity", icon: Activity },
  { path: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  // This hook tells us the current URL path
  const pathname = usePathname();

  return (
    <nav className="w-full md:w-20 lg:w-64 bg-neutral-900 border-t md:border-t-0 md:border-r border-neutral-800 flex md:flex-col justify-around md:justify-start p-4 fixed bottom-0 md:relative z-50 order-last md:order-first">
      {/* Logo Area */}
      <div className="hidden md:flex items-center justify-center lg:justify-start lg:px-4 h-16 mb-8 text-xl font-bold text-neutral-100">
        <span className="lg:hidden">LD</span>
        <span className="hidden lg:block">LearningDash</span>
      </div>

      <ul className="flex md:flex-col gap-2 w-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          // Check if the current URL matches the item's path
          const isActive = pathname === item.path;

          return (
            <li key={item.path} className="relative group w-full">
              {/* Swapped <button> for <Link> */}
              <Link
                href={item.path}
                className={`relative flex items-center justify-center lg:justify-start gap-4 w-full p-3 rounded-xl transition-colors z-10 ${
                  isActive ? "text-neutral-50" : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {/* The animated snapping background highlight */}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-neutral-800 rounded-xl"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
                
                <span className="relative z-20 flex items-center gap-4">
                  <Icon size={24} />
                  <span className="hidden lg:block font-medium">{item.label}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}