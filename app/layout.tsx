import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Next-Gen Learning Dashboard",
  description: "A high-fidelity student dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-neutral-950 text-neutral-50 antialiased flex flex-col md:flex-row min-h-screen overflow-hidden">
        {/* The persistent navigation sidebar */}
        <Sidebar />
        
        {/* The main dynamic content area */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}