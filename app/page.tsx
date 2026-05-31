import { supabase } from "@/lib/supabase";
import { Course } from "@/types";
import BentoGrid from "@/components/BentoGrid";
import { Suspense } from "react";
import Loading from "./loading";

// Ensures Next.js always fetches live data rather than caching it forever
export const revalidate = 0; 

export default async function DashboardPage() {
  // Server-side data fetching
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  // Graceful error handling if the database connection fails
  if (error) {
    return (
      <div className="p-6 bg-red-900/20 text-red-400 rounded-2xl border border-red-900/50">
        Failed to load dashboard data. Please check your Supabase connection.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 pb-20 md:pb-0">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-500">
          Welcome back, Student
        </h1>
        <p className="text-neutral-400 flex items-center gap-2">
          <span className="flex h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
          Your daily learning streak is active!
        </p>
      </header>

      {/* Suspense boundary for our client-side animated grid */}
      <Suspense fallback={<Loading />}>
        <BentoGrid courses={courses as Course[]} />
      </Suspense>
    </div>
  );
}