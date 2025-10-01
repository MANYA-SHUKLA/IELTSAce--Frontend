import SecurePdfViewer from '@/components/SecurePdfViewer';

const freeMaterials = [
  {
    title: "Sample Test Paper",
    description: "Full-length practice test with answer key to assess your current level",
    pdfUrl: "/materials/sample.pdf"
  },
  {
    title: "Master the Basics", 
    description: "Essential grammar rules and vocabulary for IELTS beginners",
    pdfUrl: "/materials/master_the_basic.pdf"
  },
  {
    title: "Self-Assessment Tool",
    description: "Evaluate your strengths and identify areas for improvement", 
    pdfUrl: "/materials/self-assessment_tool.pdf"
  }
];

export default function FreeMaterialsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Free IELTS Materials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our free IELTS preparation resources. Materials are available for online viewing only.
          </p>
        </div>

        {/* Single PDF Viewer */}
        <div className="mb-8">
          <SecurePdfViewer 
            pdfUrl="/materials/sample.pdf"
            title="Sample IELTS Test Paper"
          />
        </div>

        {/* Single PDF Viewer */}
        <div className="mb-8">
          <SecurePdfViewer 
            pdfUrl="/materials/master_the_basic.pdf"
            title="Master the Basics"
          />
        </div>

        {/* Single PDF Viewer */}
        <div className="mb-8">
          <SecurePdfViewer 
            pdfUrl="/materials/self-assessment_tool.pdf"
            title="Self-Assessment Tool"
          />
        </div>
        

        {/* Notice */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
          <p className="text-yellow-800 text-sm">
            🔒 For copyright protection, materials are available for online viewing only. 
            Download and print options have been disabled.
          </p>
        </div>
      </div>
    </div>
  );
}