import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CV_VARIANT_ORDER, CV_VARIANTS } from "@/content/cv";

export const metadata: Metadata = {
  title: "Farhad Lafarie | Choose CV",
  description:
    "Download Farhad Lafarie's CV for Full-Stack Developer or DevOps Engineer roles.",
  alternates: {
    canonical: "/cv/",
  },
};

export default function CVChooserPage(): ReactNode {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-base px-4 pb-16 pt-28">
      <div className="w-full max-w-2xl">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.18em] text-ink-faint">
          Curriculum Vitae
        </p>
        <h1 className="mt-2 text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Looking for Full-Stack or DevOps?
        </h1>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-ink-dim">
          Two CV tracks. Open the version that matches the role, or download the PDF.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {CV_VARIANT_ORDER.map((id) => {
            const cv = CV_VARIANTS[id];
            return (
              <li
                key={cv.id}
                className="low-poly-card flex flex-col p-5"
              >
                <h2 className="text-base font-semibold text-ink">{cv.label}</h2>
                <p className="mt-2 flex-1 text-sm text-ink-dim">{cv.description}</p>
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href={cv.viewHref}
                    className="inline-flex items-center justify-center rounded-lg border-2 border-line-strong bg-surface px-3 py-2.5 text-sm font-semibold text-ink"
                  >
                    View CV
                  </a>
                  <a
                    href={cv.pdfHref}
                    download={cv.pdfFileName}
                    className="inline-flex items-center justify-center rounded-lg border border-line px-3 py-2.5 text-sm font-semibold text-ink-dim hover:text-ink"
                  >
                    Download PDF
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
