import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationProps {
  pageNumber: number;
  totalPages: number;
  previous: () => void;
  next: () => void;
}

const Navigation = ({
  pageNumber,
  totalPages,
  previous,
  next,
}: NavigationProps) => {
  return (
    <div className="flex items-center gap-6">

      <button
        disabled={pageNumber <= 1}
        onClick={previous}
        className="disabled:opacity-40"
      >
        <ChevronLeft size={28} />
      </button>

      <span className="font-semibold">
        {pageNumber} / {totalPages}
      </span>

      <button
        disabled={pageNumber >= totalPages}
        onClick={next}
        className="disabled:opacity-40"
      >
        <ChevronRight size={28} />
      </button>

    </div>
  );
};

export default Navigation;