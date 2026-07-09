import { useState } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import Navigation from "../components/navigation";
import ZoomControls from "../components/zoomControls";
import { useLocation } from "react-router-dom";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Reader = () => {
  const [numPages, setNumPages] = useState(0);

  const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();
  const book = location.state.book;

  const [scale, setScale] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }:{numPages:number}) => {
    setNumPages(numPages);
  };
  const previous = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };
  const next = () => {
    if (pageNumber < numPages) {
      setPageNumber((prev) => prev + 1);
    }
  };

  const zoomIn = () => {
    setScale((prev) => prev + 0.2);
  };
  const zoomOut = () => {
    setScale((prev) => Math.max(0.8, prev - 0.2));
  };
  return (
    <div className="h-screen bg-slate-900 flex flex-col overflow-hidden">

    {/* Title */}
    <header className="py-5 text-center border-b border-slate-800 shrink-0">

      <h1 className="text-white text-2xl font-semibold tracking-wide">

        {book.title}

      </h1>

    </header>

    {/* PDF Viewer */}

    <main className="flex-1 overflow-auto flex justify-center py-10 px-6">

      <Document
        file={book.pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <p className="text-white text-lg">
            Your book is Loading please wait... It may take a while.
          </p>
        }
      >

        <Page
          pageNumber={pageNumber}
          scale={scale}
          
          className="shadow-[0_25px_70px_rgba(0,0,0,.45)]"
        />

      </Document>

    </main>

    {/* Floating Controls */}

    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">

      <div className="bg-white/90 backdrop-blur-xl rounded-full shadow-2xl px-8 py-4 flex items-center gap-8">

        <ZoomControls
          scale={scale}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
        />

        <div className="w-px h-8 bg-gray-300" />

        <Navigation
          pageNumber={pageNumber}
          totalPages={numPages}
          previous={previous}
          next={next}
        />

      </div>

    </div>

  </div>
  );
};
export default Reader;
