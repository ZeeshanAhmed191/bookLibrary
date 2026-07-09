import { Link } from "react-router-dom";
import { Eye, Download, ArrowRight } from "lucide-react";
interface BookCardProps {
  book: {
    id: number;
    title: string;
    slug:string;
    coverUrl: string;
    views: number;
    downloads: number;
    author: {
      name: string;
    };

    category: {
      name: string;
    };
  };
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Link
      to={`/books/${book.slug}`}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Cover */}

      <div className="overflow-hidden">

        <img
          src={book.coverUrl}
          alt={book.title}
          className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
        />

      </div>

      {/* Content */}

      <div className="p-5">

        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          {book.category.name}
        </span>

        <h2 className="font-bold text-lg mt-4 line-clamp-2 min-h-14">

          {book.title}

        </h2>

        <p className="text-gray-500 mt-2 text-sm">

          {book.author.name}

        </p>

        {/* Stats */}

        <div className="flex justify-between mt-5 text-gray-500 text-sm">

          <div className="flex items-center gap-2">

            <Eye size={17} />

            {book.views}

          </div>

          <div className="flex items-center gap-2">

            <Download size={17} />

            {book.downloads}

          </div>

        </div>

        {/* Button */}

        <div className="mt-6">

          <div className="flex justify-center items-center gap-2 bg-green-700 group-hover:bg-green-800 text-white py-3 rounded-xl transition">

            Read Book

            <ArrowRight size={18} />

          </div>

        </div>

      </div>
    </Link>
  );
};

export default BookCard;