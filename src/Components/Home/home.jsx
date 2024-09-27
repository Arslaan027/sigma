import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "../HeroSection/HeroSection";
import WhyLegalWiz from "./WhyUs";
import Trust from "./Trust";
import ComparisonSection from "./ComparisonSection";
import BestBusiness from "./BestBusiness";
import Experts from "./Experts";
import Partners from "./Partners";
import AboutTop from "../AboutUs/AboutTop";

const Home = () => {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <HeroSection />
      <WhyLegalWiz />
      <div className="hidden md:block">
        <Trust />
      </div>
      <ComparisonSection />
      <BestBusiness />
      <Experts />
      <AboutTop />
      <Partners />
    </div>
  );
};

export default Home;
