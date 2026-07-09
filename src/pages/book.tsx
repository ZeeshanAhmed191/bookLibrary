import { useEffect, useState } from "react";

import BookCard from "../components/bookCard";
import { Search, Filter } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pagination from "../components/pagination";
import { useAuth } from "../context/AuthContext";
import type { Book } from "../type/book";
import { useSearchParams } from "react-router-dom";
import { categories } from "../data/categories";
import BookCardSkeleton from "../components/BookCardSkeleton";

const Books = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const { fetchBooks } = useAuth();

  // 1. URL se saare filters direct variables mein nikalein
  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const language = searchParams.get("language") || "";
  const sort = searchParams.get("sort") || "oldest";

  // 2. Search Input ke liye local state (Taki typing smooth ho)
  const [searchInput, setSearchInput] = useState(search);
  // 1. Check karein ke kya koi filter laga hua hai (Page ke ilawa)
  const isFilterActive = search || category || language || sort !== "oldest";

  // 2. Saare filters ko clear karne ka function
  const clearAllFilters = () => {
    setSearchInput(""); // Local search input khali karein
    setSearchParams({}); // URL ke saare params delete kar ke reset kar dein
  };

  // Jab bhi URL se search query change ho (jaise clear ho), local input sync ho jaye
  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  // 3. Central Filter Update Function
  const updateFilters = (updates: Record<string, string | number>) => {
    setSearchParams((prevParams) => {
      const nextParams = new URLSearchParams(prevParams);

      Object.entries(updates).forEach(([key, value]) => {
        if (value) {
          nextParams.set(key, String(value));
        } else {
          nextParams.delete(key);
        }
      });

      // Jab bhi koi filter badle (except page itself), page ko 1 par reset karein
      if (!updates.page) {
        nextParams.set("page", "1");
      }

      return nextParams;
    });
  };

  // 4. Search Handler (Sirf Enter ya Button Click par trigger hoga)
  const handleSearchSubmit = () => {
    updateFilters({ search: searchInput });
  };

  // 5. Single useEffect jo URL badalne par automatic data fetch karega
  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        const response = await fetchBooks({
          page,
          limit: 5,
          category,
          search,
          sort,
          selectedLanguage: language, // API param key
        });

        setBooks(response.books || []);
        setTotalPages(response.totalPages || 1);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, [page, category, search, sort, language]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-linear-to-r from-emerald-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h1 className="text-5xl font-bold">Explore Our Library</h1>
          <p className="mt-5 text-lg text-green-100 max-w-2xl mx-auto">
            Discover thousands of Urdu, English, Arabic and translated books.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5">
        <div className="bg-white rounded-3xl shadow-xl p-6 -mt-10 relative z-20">
          <div className="grid lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="lg:col-span-2 flex">
              <input
                type="text"
                value={searchInput}
                placeholder="Search books..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearchSubmit();
                  }
                }}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full border border-gray-200 outline-none rounded-l-xl p-3 bg-gray-50 placeholder:text-gray-400 focus:border-green-700"
              />
              <button
                className="bg-primary px-5 rounded-r-xl flex items-center justify-center hover:opacity-90 transition-opacity"
                onClick={handleSearchSubmit}
              >
                <Search color="#fff" size={20} />
              </button>
            </div>

            {/* Language Select */}
            <select
              className="border rounded-xl px-4 py-3 outline-none focus:border-green-700 bg-white"
              value={language}
              onChange={(e) => updateFilters({ language: e.target.value })}
            >
              <option value="">All Languages</option>
              <option value="Urdu">Urdu</option>
              <option value="English">English</option>
            </select>

            {/* Category Select */}
            <select
              className="border rounded-xl px-4 py-3 outline-none focus:border-green-700 bg-white"
              value={category}
              onChange={(e) => updateFilters({ category: e.target.value })}
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Second Row (Sort & Count) */}
          <div className="flex flex-wrap justify-between items-center mt-6 gap-4">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{books.length}</span>{" "}
              Books
            </p>
            <div className="flex items-center gap-4">
              {/* Agar koi bhi filter active hai, to Clear button show hoga */}
              {isFilterActive && (
                <button
                  onClick={clearAllFilters}
                  className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-xl cursor-pointer"
                >
                  Clear Filters
                </button>
              )}
              <div className="flex items-center gap-3">
                <Filter size={18} className="text-gray-500" />
                <select
                  className="border rounded-xl px-4 py-2 bg-white outline-none focus:border-green-700"
                  value={sort}
                  onChange={(e) => updateFilters({ sort: e.target.value })}
                >
                  <option value="oldest">Oldest</option>
                  <option value="newest">Newest</option>
                  <option value="downloads">Most Downloaded</option>
                  <option value="views">Most Viewed</option>
                  <option value="az">A-Z</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <section className="max-w-7xl mx-auto py-16 px-5">
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mb-20">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(newPage) => updateFilters({ page: newPage })}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Books;
