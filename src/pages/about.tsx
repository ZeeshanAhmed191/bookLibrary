import Navbar from "../components/Navbar";
import HeroImage from "../assets/heroImage.png";
import { Link } from "react-router-dom";
import Mission from "../components/mission";
import ChooseUs from "../components/choosUs";
import { CheckCircle2, ArrowRight, BookOpen } from "lucide-react";
import Footer from "../components/Footer";
import CTA from "../assets/CTA.png"
import ReaderE from "../assets/ReaderE.png"
const About = () => {
  return (
    <div>
      <Navbar />

       <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-900 py-16 lg:py-0">
      
   
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={HeroImage}
          alt="Library"
          className="h-full w-full object-cover object-center transform scale-105 animate-[pulse_8s_infinite_alternate]"
        />
   
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-16 grid lg:grid-cols-12 gap-12 items-center">
        

        <div className="lg:col-span-7 max-w-2xl">
 
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
            About Kitab Ghar
          </span>

    
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl md:text-6xl tracking-tight">
            Knowledge is <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-300">Power.</span>
            <br />
            Reading is
            <span className="relative inline-block ml-3 text-amber-300">
              Freedom.
              <span className="absolute left-0 bottom-1 h-2 w-full bg-amber-400/20 -z-10 rounded-full" />
            </span>
          </h1>

         
          <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-300 font-normal">
            At Kitab Ghar, we believe books have the power to transform lives.
            Our mission is to make quality literature freely accessible through a modern, beautiful digital library.
          </p>

     
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/books"
              className="group flex items-center gap-2 rounded-2xl bg-linear-to-r from-amber-400 to-amber-500 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:from-amber-300 hover:to-amber-400 hover:-translate-y-0.5"
            >
              Browse Books
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#mission"
              className="rounded-2xl border border-slate-700 bg-slate-800/40 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-slate-800/70 hover:border-slate-600"
            >
              Our Mission
            </a>
          </div>
        </div>

        

      </div>
    </section>

  

      <Mission />

      <ChooseUs />
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left */}

            <div className="relative">
              <div className="absolute inset-0 bg-emerald-300/20 blur-3xl rounded-full" />

              <img
                src={ReaderE}
                alt="Reader"
                className="relative rounded-3xl shadow-2xl border border-gray-200"
              />
            </div>

            {/* Right */}

            <div>
              <span className="uppercase tracking-[0.25em] text-amber-600 font-semibold">
                Reading Experience
              </span>

              <h2 className="mt-5 text-5xl font-bold text-slate-900 leading-tight">
                Designed For Comfortable Reading.
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                Our built-in reader is crafted to make reading effortless with
                smooth navigation, adjustable zoom, secure PDF access and a
                distraction-free interface.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="text-green-600" />

                  <span className="text-lg">Clean & Modern Reader</span>
                </div>

                <div className="flex items-center gap-4">
                  <CheckCircle2 className="text-green-600" />

                  <span className="text-lg">Secure PDF Access</span>
                </div>

                <div className="flex items-center gap-4">
                  <CheckCircle2 className="text-green-600" />

                  <span className="text-lg">Fast Downloads</span>
                </div>

                <div className="flex items-center gap-4">
                  <CheckCircle2 className="text-green-600" />

                  <span className="text-lg">Mobile Friendly Design</span>
                </div>
              </div>

              <Link
                to="/books"
                className="mt-12 inline-flex items-center gap-3 rounded-xl bg-emerald-700 px-8 py-4 font-semibold text-white hover:bg-emerald-800 transition"
              >
                Explore Library
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

         <section className="mb-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-[40px] shadow-2xl border border-slate-200 overflow-hidden">

          <div className="grid lg:grid-cols-2 items-center gap-14 p-12 lg:p-20">

            {/* Left Side */}

            <div>

              <span className="inline-flex items-center gap-3 rounded-full bg-emerald-100 px-5 py-2 text-emerald-700 font-semibold">

                <BookOpen size={18} />

                Start Reading Today

              </span>

              <h2 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">

                Every Great Story

                <span className="block text-emerald-700">

                  Begins With A Page.

                </span>

              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-600 max-w-xl">

                Thousands of books are waiting for you.
                Discover timeless classics, Islamic literature,
                Urdu novels, English books and much more from
                one modern digital library.

              </p>

              <div className="mt-10">

                <Link
                  to="/books"
                  className="inline-flex items-center gap-3 rounded-2xl bg-emerald-700 px-8 py-5 text-lg font-semibold text-white transition duration-300 hover:bg-emerald-800 hover:scale-105"
                >

                  Browse Books

                  <ArrowRight size={22} />

                </Link>

              </div>

            </div>

            {/* Right Side */}

            <div className="flex justify-center">

              <img
                src= {CTA}
                alt="Books"
                className="w-full max-w-md rounded-3xl shadow-2xl border border-gray-200"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
      <Footer />
    </div>
  );
};
export default About;
