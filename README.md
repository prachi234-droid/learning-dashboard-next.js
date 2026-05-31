# Next-Gen Learning Dashboard

A high-fidelity student dashboard prototype built for the Frontend Intern Challenge.

## Tech Stack
* **Framework:** Next.js (App Router)
* **Database:** Supabase (PostgreSQL)
* **Styling:** Tailwind CSS v4
* **Animations:** Framer Motion
* **Icons:** Lucide React

## Architectural Choices & Component Split
To ensure maximum performance and adhere to Next.js best practices, I strictly separated Server and Client components:
* **Server-Side Data Fetching:** The main `page.tsx` is a Server Component. It connects securely to Supabase using `@supabase/supabase-js`, meaning no database logic or sensitive API keys are exposed to the browser.
* **Client-Side Interactivity:** UI elements requiring animations (`CourseCard`, `Sidebar`, `BentoGrid`) use the `"use client"` directive to utilize Framer Motion and React hooks (`useState`, `useEffect`). 
* **Loading States:** I utilized Next.js's native `loading.tsx` and `<Suspense>` boundaries to deliver instant feedback (pulsing skeleton loaders) while the server fetches data.
* **Zero Layout Shifts:** All hover and entrance animations utilize CSS `transform` and `opacity` to prevent costly browser repaints.

## Local Setup
1. Clone the repository.
2. Run `npm install`.
3. Rename `.env.example` to `.env.local` and add your Supabase credentials.
4. Run `npm run dev`.