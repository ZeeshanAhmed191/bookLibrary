import Navbar from "../components/Navbar";

import Categories from "../components/Categories";

import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

import HomePageBook from "../components/HomePageBook";
import Mission from "../components/mission";
import ChooseUs from "../components/choosUs";

const HomePage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <HeroSection />

      <Categories />

      <HomePageBook />
      <Mission />
      <ChooseUs />
      <Footer />
    </div>
  );
};

export default HomePage;
