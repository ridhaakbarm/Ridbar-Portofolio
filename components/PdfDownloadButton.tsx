"use client";

import { Download } from "lucide-react";

type PdfDownloadButtonProps = {
  label?: string;
  className?: string;
};

export function PdfDownloadButton({
  label = "Download PDF",
  className = "inline-flex items-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-bold text-white transition hover:bg-cta-hover"
}: PdfDownloadButtonProps) {
  return (
    <button type="button" onClick={() => window.print()} className={className}>
      <Download size={17} />
      {label}
    </button>
  );
}
