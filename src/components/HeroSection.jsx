import React from "react";
import Slider from "react-slick";
import { motion } from "motion/react";
import SearchScholarshipButton from "./SearchScholarshipButton";

import bg1 from "../assets/scholarship-bg.jpg";
import bg2 from "../assets/bg-2.jpg";
import bg3 from "../assets/bg-3.jpg";

const HeroSection = () => {
  const slides = [
    {
      title: "Find Your Future with ScholarStream",
      highlight: "Future",
      desc:
        "Discover verified scholarships worldwide and take the next step toward your academic success.",
      bg: bg1,
    },
    {
      title: "Scholarships Made Simple",
      highlight: "Simple",
      desc:
        "Search, compare, and apply to scholarships with a seamless and secure platform.",
      bg: bg2,
    },
    {
      title: "Study Without Financial",
      highlight: "Stress-Free",
      desc:
        "We connect students with the right opportunities to support their education journey.",
      bg: bg3,
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <section className="relative h-[65vh] overflow-hidden">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="h-[65vh] bg-cover bg-center object-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div className="absolute inset-0" />

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center px-4 max-w-4xl"
              >
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                  {slide.title.split(slide.highlight)[0]}
                  <span className="text-yellow-400">
                    {slide.highlight}
                  </span>
                  {slide.title.split(slide.highlight)[1]}
                </h1>

                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  {slide.desc}
                </p>

                <SearchScholarshipButton />
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white text-sm tracking-wide"
        >
          ↓ Scroll Down
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
