import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CV_VARIANTS, type CvVariantId } from "@/content/cv";

export function cvMetadata(variantId: CvVariantId): Metadata {
  const cv = CV_VARIANTS[variantId];
  return {
    title: `Farhad Lafarie | ${cv.label} CV`,
    description: `Curriculum Vitae of Farhad Lafarie, ${cv.label}. ${cv.description}`,
    keywords: `Farhad Lafarie CV, ${cv.label}, Resume, Sri Lanka`,
    alternates: {
      canonical: cv.viewHref,
    },
  };
}

export async function CvHtmlViewer({
  variantId,
}: {
  variantId: CvVariantId;
}): Promise<ReactNode> {
  const cv = CV_VARIANTS[variantId];
  const html = await readFile(
    path.join(process.cwd(), cv.htmlPath),
    "utf-8",
  );

  return (
    <main className="min-h-[100dvh] bg-white pt-20 print:pt-0">
      <div className="pointer-events-none fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-2 print:hidden">
        <a
          href={cv.pdfHref}
          download={cv.pdfFileName}
          className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border-2 border-line-strong bg-surface px-4 py-2 text-xs font-semibold text-ink shadow-lg"
        >
          Download {cv.shortLabel} PDF
        </a>
        <a
          href="/cv/"
          className="pointer-events-auto inline-flex items-center rounded-full border border-line bg-white/90 px-3 py-2 text-xs font-semibold text-ink-dim shadow-md"
        >
          Switch track
        </a>
      </div>
      <iframe
        title={`Farhad Lafarie ${cv.label} CV`}
        srcDoc={html}
        className="block h-[calc(100dvh-5rem)] w-full border-0 bg-white print:h-auto print:min-h-[100vh]"
      />
    </main>
  );
}
