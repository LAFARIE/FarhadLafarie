import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CvHtmlViewer, cvMetadata } from "../CvHtmlViewer";

export const metadata: Metadata = cvMetadata("devops");

export default function DevOpsCvPage(): Promise<ReactNode> {
  return CvHtmlViewer({ variantId: "devops" });
}
