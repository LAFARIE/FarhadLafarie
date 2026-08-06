import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import type { ReactNode } from "react";

/** Canonical CV HTML — see AGENTS.md */
const CV_HTML_PATH = path.join(process.cwd(), "app/cv/cv-tailwind-dev.html");

export const metadata: Metadata = {
  title: "Farhad Lafarie | Curriculum Vitae (CV)",
  description:
    "View the professional Curriculum Vitae (CV) of Farhad Lafarie, Software Engineer focused on automation, integrations, and delivery.",
  keywords:
    "Farhad Lafarie CV, Farhad Lafarie Resume, Software Engineer Sri Lanka, Full-Stack Developer, DevOps",
  alternates: {
    canonical: "/cv/",
  },
};

export default async function CVPage(): Promise<ReactNode> {
  const html = await readFile(CV_HTML_PATH, "utf-8");

  return (
    <main className="min-h-[100dvh] bg-white pt-20 print:pt-0">
      <iframe
        title="Farhad Lafarie CV"
        srcDoc={html}
        className="block h-[calc(100dvh-5rem)] w-full border-0 bg-white print:h-auto print:min-h-[100vh]"
      />
    </main>
  );
}
