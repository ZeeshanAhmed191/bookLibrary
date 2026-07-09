import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const generatePages = () => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 4) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 3) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">

      {/* Previous */}

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex items-center gap-2 rounded-xl border px-4 py-2 transition
        disabled:opacity-40 disabled:cursor-not-allowed
        hover:bg-green-700 hover:text-white"
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      {generatePages().map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={index}
              className="px-3 text-gray-500"
            >
              ...
            </span>
          );
        }

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-11 h-11 rounded-xl font-semibold transition
              ${
                currentPage === page
                  ? "bg-green-700 text-white shadow-lg"
                  : "border hover:bg-green-100"
              }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex items-center gap-2 rounded-xl border px-4 py-2 transition
        disabled:opacity-40 disabled:cursor-not-allowed
        hover:bg-green-700 hover:text-white"
      >
        Next
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;