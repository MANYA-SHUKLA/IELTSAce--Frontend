"use client"; // Next.js app directory

import { useState } from "react";
import { Document, Page } from "react-pdf";
import "@/utils/pdfWorkerSetup"; // your PDF worker setup

type PdfViewerProps = {
  pdfUrl: string;
};

export default function PdfViewer({ pdfUrl }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={800} // adjust for responsiveness
          />
        ))}
      </Document>
      <p>Page 1 of {numPages}</p>
    </div>
  );
}
