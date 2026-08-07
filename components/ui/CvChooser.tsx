"use client";

import { Download, FileText, X } from "lucide-react";
import { CV_VARIANT_ORDER, CV_VARIANTS } from "@/content/cv";
import { cn } from "@/lib/utils";

type CvChooserProps = {
  open: boolean;
  onClose: () => void;
};

export function CvChooser({ open, onClose }: CvChooserProps) {
  if (!open) return null;

  return (
    <div
      className="pointer-events-auto fixed inset-0 z-[80] flex items-center justify-center p-4 print:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-chooser-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        aria-label="Close CV chooser"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-lg rounded-2xl border-2 border-line-strong bg-surface p-5 shadow-2xl sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-faint">
              Curriculum Vitae
            </p>
            <h2
              id="cv-chooser-title"
              className="mt-1 text-lg font-semibold tracking-tight text-ink sm:text-xl"
            >
              What are you looking for?
            </h2>
            <p className="mt-1.5 text-sm text-ink-dim">
              Pick a track. Each CV matches that role, with a matching PDF download.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line text-ink-dim hover:text-ink"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {CV_VARIANT_ORDER.map((id) => {
            const cv = CV_VARIANTS[id];
            return (
              <li
                key={cv.id}
                className={cn(
                  "flex flex-col rounded-xl border border-line bg-base/60 p-4",
                  "hover:border-line-strong",
                )}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface">
                    <FileText size={15} className="text-ink" />
                  </span>
                  <h3 className="text-sm font-semibold text-ink">{cv.label}</h3>
                </div>
                <p className="mb-4 flex-1 text-xs leading-relaxed text-ink-dim">
                  {cv.description}
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={cv.viewHref}
                    onClick={onClose}
                    className="inline-flex items-center justify-center rounded-lg border border-line-strong bg-surface px-3 py-2 text-xs font-semibold text-ink hover:bg-base"
                  >
                    View {cv.shortLabel} CV
                  </a>
                  <a
                    href={cv.pdfHref}
                    download={cv.pdfFileName}
                    onClick={onClose}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-line px-3 py-2 text-xs font-semibold text-ink-dim hover:border-line-strong hover:text-ink"
                  >
                    <Download size={13} />
                    Download PDF
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
