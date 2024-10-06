import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "../HeroSection/HeroSection";
import WhyLegalWiz from "./WhyUs";
import Experts from "./Experts";
import AboutTop from "../AboutUs/AboutTop";
import BLOG from "./BLOG";

const Home = () => {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <HeroSection />
      <WhyLegalWiz />
      <BLOG />
      <Experts />
      <AboutTop />
    </div>
  );
};

export default Home;
