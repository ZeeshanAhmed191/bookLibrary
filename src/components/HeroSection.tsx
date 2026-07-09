import HeroImage from "../assets/heroImage.png";
import Input from "./Input";
import { BookOpenText, Download, Users, LayoutGrid } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { icon: BookOpenText, count: "1,000+", label: "Books", color: "text-emerald-400" },
    { icon: Download, count: "10k+", label: "Downloads", color: "text-amber-400" },
    { icon: Users, count: "500+", label: "Authors", color: "text-blue-400" },
    { icon: LayoutGrid, count: "10+", label: "Categories", color: "text-rose-400" },
  ];

  return (
    <section className="relative h-[92vh] md:h-screen w-full overflow-hidden bg-slate-950">
      
      {/* Background Image with Cinematic Subtle Zoom */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HeroImage} 
          alt="Library Background" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_infinite_alternate]"
        />
        {/* Deep Dual-Layer Premium Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950/90" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        
        {/* Glowing Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 backdrop-blur-md mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          Welcome To Urdu Kitabain
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
          Discover Thousands of 
          <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-yellow-400 to-orange-400">
            Urdu Books
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
          Urdu literature, novels, Islamic books, history, poetry and much more. 
          <span className="block text-slate-400 text-sm sm:text-base mt-1">
            Read online or download with ease.
          </span>
        </p>

        {/* Premium Framed Search Box */}
        <div className="mt-10 w-full max-w-2xl p-2 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] focus-within:border-amber-400/50 transition-colors duration-300">
          <Input placeholder="Search books, authors and categories..." />
        </div>

        {/* Glassmorphic Stats Section */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={idx}
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/3 backdrop-blur-md p-4 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/10 hover:-translate-y-1 shadow-md"
              >
                <div className={`p-3 rounded-xl bg-slate-900/50 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <IconComponent size={24} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <p className="text-lg md:text-xl font-extrabold text-white tracking-tight leading-none">
                    {stat.count}
                  </p>
                  <p className="mt-1 text-xs md:text-sm font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;