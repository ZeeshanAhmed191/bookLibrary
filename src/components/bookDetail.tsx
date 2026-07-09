import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookBySlug } from "../api/book";
import { Eye, Download, BookOpen, Globe, ArrowDownToLine } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const BookDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate()
  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchBook = async () => {
    try {
      const result = await getBookBySlug(slug!);
      console.log("REsult", result);
      setBook(result.book);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, [slug]);
  const handleRead = () => {

    navigate(`/reader/${book.slug}`,{
    state:{
        book
    }
});

}
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen">
        Book not found.
      </div>
    );
  }

  return (
    <div>
      <Navbar/>
      <div className="bg-linear-to-br from-emerald-900 via-green-800 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Cover */}

            <div className="lg:col-span-4 flex justify-center">
              <img
                src={book.coverUrl}
                alt={book.title}
                className="w-72 rounded-3xl shadow-2xl border-4 border-white/20 hover:scale-105 transition duration-500"
              />
            </div>

            {/* Details */}

            <div className="lg:col-span-8">
              {/* Category */}

              <span className="inline-flex bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                {book.category.name}
              </span>

              {/* Title */}

              <h1 className="text-5xl font-extrabold mt-5 leading-tight">
                {book.title}
              </h1>

              {/* Author */}

              <p className="mt-4 text-green-100 text-xl">
                By{" "}
                <span className="font-semibold text-white">
                  {book.author.name}
                </span>
              </p>

              {/* Language */}

              <div className="flex flex-wrap gap-3 mt-6">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
                  <Globe size={18} />

                  {book.language}
                </div>

                {book.language !== book.orginalLanguage  && (
                  <div className="bg-white/10 px-4 py-2 rounded-xl">
                  Original Language: {book.orginalLanguage}
                  </div>
                )}

                {/* {book.isTranslated && (
                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold">
                    Translated
                  </div>
                )} */}
              </div>

              {/* Stats */}

              <div className="flex flex-wrap gap-5 mt-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-5 min-w-42.5">
                  <div className="flex items-center gap-2">
                    <Eye />

                    <span className="text-lg font-semibold">{book.views}</span>
                  </div>

                  <p className="text-green-100 mt-2">Total Views</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-5 min-w-42.5">
                  <div className="flex items-center gap-2">
                    <Download />

                    <span className="text-lg font-semibold">
                      {book.downloads}
                    </span>
                  </div>

                  <p className="text-green-100 mt-2">Downloads</p>
                </div>
              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-5 mt-10">
                <button
               
                  onClick={handleRead}
                  className="flex items-center gap-3 bg-white text-green-800 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
                >
                  <BookOpen size={22} />
                  Read Online
                </button>

                <a
                  href={book.pdfUrl}
                  download
                  className="flex items-center gap-3 border-2 border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-green-800 transition"
                >
                  <ArrowDownToLine size={22} />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* About */}

          <div className="bg-white rounded-3xl shadow-lg p-10">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-green-700" size={28} />

              <h2 className="text-3xl font-bold text-slate-800">
                About this Book
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-9">
              {book.description}
            </div>
          </div>

          {/* Related */}

          <div className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold">Related Books</h2>

                <p className="text-gray-500 mt-2">More books you may enjoy</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {/* {relatedBooks.map((item) => (

          <BookCard
            key={item.id}
            book={item}
          />

        ))} */}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BookDetail;
