import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "../HeroSection/HeroSection";
import WhyLegalWiz from "./WhyUs";
import AboutTop from "../AboutUs/AboutTop";
import BLOG from "./BLOG";
import Services from "./AllServiceMegaPage/Services";
import Certification from "./Certification";

const Home = () => {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <HeroSection />
      <Services />
      <AboutTop />
      <WhyLegalWiz />
      <Certification />
      <BLOG />
    </div>
  );
};

export default Home;
