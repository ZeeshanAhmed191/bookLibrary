import { BookOpen, Globe, Smartphone, ShieldCheck } from "lucide-react";
const ChooseUs = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-amber-600 font-semibold tracking-[0.25em] uppercase">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Everything You Need
            <br />
            In One Digital Library
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Kitab Ghar is designed to provide a modern, fast and enjoyable
            reading experience with thousands of books available anytime,
            anywhere.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}

          <div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
              <BookOpen size={30} />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              Huge Collection
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Explore thousands of carefully organized books across multiple
              genres and categories.
            </p>
          </div>

          {/* Card 2 */}

          <div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
              <Globe size={30} />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              Multiple Languages
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Read books in Urdu, English, Arabic and translated editions from
              one platform.
            </p>
          </div>

          {/* Card 3 */}

          <div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 transition group-hover:bg-purple-700 group-hover:text-white">
              <Smartphone size={30} />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              Read Anywhere
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Enjoy a responsive reading experience on desktop, tablet and
              mobile devices.
            </p>
          </div>

          {/* Card 4 */}

          <div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition group-hover:bg-amber-700 group-hover:text-white">
              <ShieldCheck size={30} />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              Free Access
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Read online or download books freely without subscriptions or
              hidden charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
