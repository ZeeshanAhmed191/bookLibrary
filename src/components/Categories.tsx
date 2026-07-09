// Provide a local module declaration so TypeScript knows the shape of the imported JS file

import { useNavigate } from "react-router-dom";
import { categories } from "../data/categories";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24  bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[0.3em] text-emerald-700 font-semibold">
            Explore
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Browse By Category
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Discover thousands of books organized into carefully selected
            categories.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                onClick={() =>
                  navigate(
                    `/books?category=${encodeURIComponent(category.name)}`,
                  )
                }
                className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer flex flex-col items-center justify-between"
              >
                <div className="absolute inset-0 bg-linear-to-br from-emerald-50 via-transparent to-emerald-100/50 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-600 to-green-500 text-white transition duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-md shadow-emerald-600/20">
                  <Icon size={28} />
                </div>

                <h3 className="relative z-10 mt-6 text-center font-bold text-slate-800 leading-snug text-base">
                  {category.name}
                </h3>

                <div className="relative z-10 mt-5 h-1 w-0 rounded-full bg-emerald-600 transition-all duration-300 group-hover:w-12" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
