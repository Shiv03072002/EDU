"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function DocumentViewer() {
  const { slug } = useParams();
  const [pdfUrl, setPdfUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDocument() {
      try {
        setLoading(true);
        setError(null);
        
        const documentUrl = `https://platform.examwalisite.com/wp-json/wp/v2/document?slug=${slug}`;
        const res = await fetch(documentUrl);

        if (!res.ok) {
          throw new Error(`Failed to fetch document: ${res.status}`);
        }

        const data = await res.json();

        if (!data.length) {
          setError("Document not found");
          return;
        }

        const post = data[0];
        setTitle(post.title.rendered);

        const attachmentId = post.acf?.document_file || post.acf?.wble_document;
        
        if (!attachmentId) {
          setError(`No document file attached.`);
          return;
        }

        const attachmentUrl = `https://platform.examwalisite.com/wp-json/wp/v2/media/${attachmentId}`;
        const attachRes = await fetch(attachmentUrl);
        
        if (!attachRes.ok) {
          throw new Error(`Failed to fetch attachment: ${attachRes.status}`);
        }

        const attachment = await attachRes.json();
        const fileUrl = attachment.source_url;
        
        if (!fileUrl) {
          throw new Error("No source_url found in attachment response");
        }
        
        setPdfUrl(fileUrl);

      } catch (error) {
        console.error("Error:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchDocument();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-600">Loading document...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Document</h3>
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Encode the PDF URL for Google Viewer
  const googleViewerUrl = pdfUrl ? `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true` : null;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {title && (
        <h1 
          className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}

      {pdfUrl ? (
        <div>
          <div className="mb-4 flex gap-3 flex-wrap">
            <a
              href={pdfUrl}
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg inline-flex items-center gap-2 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
            
            <button
              onClick={() => window.open(pdfUrl, '_blank')}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg inline-flex items-center gap-2 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in New Tab
            </button>
          </div>

          {/* Google PDF Viewer - More reliable for cross-origin PDFs */}
          <div className="border rounded-lg overflow-hidden bg-gray-50 shadow-lg">
            <iframe
              src={googleViewerUrl}
              width="100%"
              height="800px"
              className="w-full"
              title="PDF Viewer"
              allow="fullscreen"
            />
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No PDF available for this document.</p>
        </div>
      )}
    </div>
  );
}
