'use client';

import { useState } from 'react';

interface SecurePdfViewerProps {
  pdfUrl: string;
  title?: string;
}

const SecurePdfViewer = ({ pdfUrl, title = "PDF Document" }: SecurePdfViewerProps) => {
  const [loading, setLoading] = useState(true);

  // For Google Docs Viewer - we need the full URL
  const getGoogleDocsUrl = () => {
    if (typeof window !== 'undefined') {
      const encodedPdfUrl = encodeURIComponent(`${window.location.origin}${pdfUrl}`);
      return `https://docs.google.com/gview?url=${encodedPdfUrl}&embedded=true`;
    }
    return '';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
        
        {/* Loading indicator */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            <span className="ml-3 text-gray-600">Loading document...</span>
          </div>
        )}

        {/* PDF Viewer using iframe with restricted controls */}
        <div className="w-full h-[600px] border rounded-lg overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0`}
            width="100%"
            height="100%"
            onLoad={() => setLoading(false)}
            className={`${loading ? 'hidden' : 'block'}`}
            title="PDF Document"
          >
            <p>Your browser does not support PDFs.</p>
          </iframe>
        </div>

        <p className="text-sm text-gray-500 mt-4 text-center">
          This document is for viewing only. Download and print options have been disabled.
        </p>
      </div>
    </div>
  );
};

export default SecurePdfViewer;