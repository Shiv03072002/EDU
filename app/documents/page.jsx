import Link from "next/link";
import { FileText, Calendar, Download } from "lucide-react";

async function getDocuments() {
  try {
    const res = await fetch(
      "https://platform.examwalisite.com/wp-json/wp/v2/document",
      { 
        cache: "no-store",
        headers: {
          'Accept': 'application/json',
        }
      }
    );
    
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
}

export default async function DocumentsPage() {
  const docs = await getDocuments();

  if (!docs || docs.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Study Material</h1>
            <p className="text-gray-500">No documents available at the moment.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Study Material
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access your learning materials, notes, and resources
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc) => (
            <div
              key={doc.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                {/* Document Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                
                {/* Title */}
                <h2
                  className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition"
                  dangerouslySetInnerHTML={{
                    __html: doc.title.rendered,
                  }}
                />

                {/* Excerpt */}
                <div
                  className="text-gray-600 text-sm mb-4 line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: doc.excerpt.rendered || "No description available",
                  }}
                />

                {/* Meta Info */}
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(doc.date).toLocaleDateString()}</span>
                </div>

                {/* View Button */}
                <Link
                  href={`/documents/${doc.slug}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm gap-2"
                >
                  View Document
                  <Download className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}