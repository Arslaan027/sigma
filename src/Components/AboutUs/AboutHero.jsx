import { useState, useEffect } from "react";
import bgvideo from "../../assets/Vedio/bg.mp4";
// import AboutUs from "./AboutUs";

const AboutNav = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    // Trigger video animation after component mounts
    setTimeout(() => setIsVideoVisible(true), 100);

    // Trigger text animation after video appears
    setTimeout(() => setIsTextVisible(true), 1100); // Delayed text by 1 second for smoother effect
  }, []);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          src={bgvideo}
          autoPlay
          loop
          muted
          className={`absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 ease-in-out ${
            isVideoVisible ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Overlay with Text */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            className={`text-center text-white transform transition-all duration-1000 ease-in-out delay-100 ${
              isTextVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl max-w-lg mx-auto">
              Welcome to our world. We are committed to delivering the best
              services for your needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutNav;
