import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import type { Book } from "../type/book";
import BookCard from "./bookCard";
import Pagination from "./pagination";
import BookCardSkeleton from "./BookCardSkeleton";

const HomePageBook = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const { fetchBooks } = useAuth();
  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true)
      const response = await fetchBooks({
        page,
        limit: 5,
        category: "",
        search: "",
        sort: "",
        selectedLanguage: "",
      });

      setBooks(response.books);
      setTotalPages(response.totalPages);
      setLoading(false)
    };
    loadBooks();
  }, [page]);

  return (
    <div>
      <section className="max-w-7xl bg-slate-50 mx-auto py-16 px-5">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <BookCardSkeleton key={index} />
            ))}
          </div>
        ) : books.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center text-xl text-gray-500 py-10">
            No books found matching your filters.
          </div>
        )}
      </section>

       {totalPages > 1 && (
      <div>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>)}
    </div>
  );
};

export default HomePageBook;
