import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CvHtmlViewer, cvMetadata } from "../CvHtmlViewer";

export const metadata: Metadata = cvMetadata("full_stack");

export default function FullStackCvPage(): Promise<ReactNode> {
  return CvHtmlViewer({ variantId: "full_stack" });
}
