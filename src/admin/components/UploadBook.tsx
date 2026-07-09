import { useState, useEffect, type ChangeEvent } from "react";
import { ImagePlus, FileText, UploadCloud } from "lucide-react";
import { uploadBook } from "../../api/book";
import { categories } from "../../data/categories";

const UploadBookForm = () => {
  const [cover, setCover] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState<{
    bookName: string;
    author: string;
    description: string;
    category: string;
    language: string;
    originalLanguage: string;
  }>({
    bookName: "",
    author: "",
    description: "",
    category: "",
    language: "",
    originalLanguage: "",
  });
  const [pdf, setPdf] = useState<File | null>(null);

  const handleCover = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setCover(file);

    setCoverPreview(URL.createObjectURL(file));
  };

  const handlePDF = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setPdf(file);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!cover || !pdf) {
      alert("Please upload both cover and PDF.");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("bookName", data.bookName);
      formData.append("author", data.author);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("language", data.language);
      formData.append("originalLanguage", data.originalLanguage);
      formData.append("cover", cover);
      formData.append("pdf", pdf);
      console.log("FormData", formData);
      const result = await uploadBook(formData);

      console.log(result);
      console.log(result.success);
      if (result.success) {
        setData({
          bookName: "",
          author: "",
          description: "",
          category: "",
          language: "",
          originalLanguage: "",
        });
        setPdf(null);
        setCover(null);
        setCoverPreview("");
        setMessage("Data uploaded successfully.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    return () => {
      if (coverPreview) {
        URL.revokeObjectURL(coverPreview);
      }
    };
  }, [coverPreview]);
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8">
      <h2 className="text-3xl font-bold text-primary">Upload New Book</h2>

      <p className="text-gray-500 mt-2 mb-8">Publish a new Urdu book.</p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="font-semibold block mb-2">Book Title</label>

            <input
              type="text"
              name="bookName"
              value={data.bookName}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">Author</label>

            <input
              type="text"
              name="author"
              value={data.author}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 outline-none focus:border-primary"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <label className="font-semibold block mb-2">Category</label>
            <select
              name="category"
              value={data.category}
              onChange={handleChange}
              className="w-full  border rounded-xl p-3 outline-none focus:border-primary"
            >
              <option value="">Select Category</option>

              {categories.map((category) => {
                return (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Original Language
            </label>
            <select
              name="originalLanguage"
              value={data.originalLanguage}
              onChange={handleChange}
              className="w-full  border rounded-xl p-3 outline-none focus:border-primary"
            >
              <option value="Urdu">Urdu</option>
              <option value="English">English</option>
              <option value="English">Russian</option>
            </select>
          </div>
        </div>

        <div>
          <label className="font-semibold block mb-2">Language</label>
          <select
            name="language"
            value={data.language}
            onChange={handleChange}
            className="w-full  border rounded-xl p-3 outline-none focus:border-primary"
          >
            <option value="Urdu">Urdu</option>
            <option value="English">English</option>
          </select>
        </div>
        <div>
          <label className="font-semibold block mb-2">Description</label>

          <textarea
            rows={5}
            name="description"
            value={data.description}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 resize-none outline-none focus:border-primary"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <label className="border-2 border-dashed rounded-2xl cursor-pointer p-8 hover:border-primary transition">
            <input hidden type="file" accept="image/*" onChange={handleCover} />

            {coverPreview ? (
              <div>
                <img
                  src={coverPreview}
                  className="w-48 h-64 mx-auto rounded-xl object-cover shadow-lg"
                />

                <p className="mt-4 text-center font-semibold">{cover?.name}</p>
              </div>
            ) : (
              <div className="text-center">
                <ImagePlus size={50} className="mx-auto text-primary" />

                <p className="font-semibold mt-4">Upload Cover Image</p>

                <span className="text-gray-500">JPG • PNG • WEBP</span>
              </div>
            )}
          </label>

          {/* PDF */}

          <label className="border-2 border-dashed rounded-2xl cursor-pointer p-8 hover:border-primary transition">
            <input hidden type="file" accept=".pdf" onChange={handlePDF} />

            <div className="text-center">
              <FileText size={50} className="mx-auto text-primary" />

              <p className="font-semibold mt-4">
                {pdf ? pdf.name : "Upload PDF"}
              </p>

              {pdf && (
                <p className="text-sm text-green-600 mt-2">
                  {(pdf.size / 1024 / 1024).toFixed(2)} MB
                </p>
              )}
            </div>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-green-800 text-white rounded-2xl py-4 flex justify-center gap-3 transition"
        >
          <UploadCloud />
          Publish Book
        </button>

        <p>{message}</p>
      </form>
    </div>
  );
};

export default UploadBookForm;
