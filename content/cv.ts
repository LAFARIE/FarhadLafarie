export type CvVariantId = "full_stack" | "devops";

export type CvVariant = {
  id: CvVariantId;
  label: string;
  shortLabel: string;
  description: string;
  /** Absolute-from-repo path to the Tailwind HTML source */
  htmlPath: string;
  viewHref: string;
  pdfHref: string;
  pdfFileName: string;
};

/**
 * Dual CV tracks:
 * - full_stack → app/cv/cv-tailwind-dev.html
 * - devops → app/cv/cv-tailwind.html
 */
export const CV_VARIANTS: Record<CvVariantId, CvVariant> = {
  full_stack: {
    id: "full_stack",
    label: "Full-Stack Developer",
    shortLabel: "Full-Stack",
    description:
      "Product engineering: Next.js apps, APIs, UI, and delivery.",
    htmlPath: "app/cv/cv-tailwind-dev.html",
    viewHref: "/cv/dev/",
    pdfHref: "/cv/FarhadLafarie-FullStack.pdf",
    pdfFileName: "FarhadLafarie-FullStack.pdf",
  },
  devops: {
    id: "devops",
    label: "DevOps Engineer",
    shortLabel: "DevOps",
    description:
      "CI/CD, containers, cloud infrastructure, monitoring, and reliability.",
    htmlPath: "app/cv/cv-tailwind.html",
    viewHref: "/cv/devops/",
    pdfHref: "/cv/FarhadLafarie-DevOps.pdf",
    pdfFileName: "FarhadLafarie-DevOps.pdf",
  },
};

export const CV_VARIANT_ORDER: CvVariantId[] = ["full_stack", "devops"];
