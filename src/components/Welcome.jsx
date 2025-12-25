import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Welcome = () => {
  const slides = [
    { image: "/images/luxury4.avif", alt: "Luxury 4" },
    { image: "/images/luxury5.avif", alt: "Luxury 5" },
    { image: "/images/luxury6.avif", alt: "Luxury 6" },
    { image: "/images/luxury8.avif", alt: "Luxury 8" },
    { image: "/images/luxury1.avif", alt: "Luxury 1" },
    { image: "/images/luxury2.avif", alt: "Luxury 2" },
    { image: "/images/luxury3.avif", alt: "Luxury 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(slides.length);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const duplicatedSlides = [...slides, ...slides, ...slides];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slides.length);
      }, 500);
    } else if (currentIndex === slides.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slides.length);
      }, 500);
    }
  }, [currentIndex, slides.length]);

  return (
    <div className="w-full bg-white">
      {/* Text Section */}
      <div className="py-16 px-4 sm:px-12 text-center">
        <span className="text-md sm:text-lg font-medium tracking-wider text-[#55694f] uppercase">
          Welcome to Moonlit Resort
        </span>

        <h3 className="text-2xl sm:text-3xl md:text-4xl max-w-6xl font-normal text-[#1b1c1b] mx-auto leading-relaxed pt-4">
          Moonlit Resort is a refined luxury retreat designed for leisure travelers, destination weddings, wellness seekers, and premium events. Surrounded by lush greenery, with the Rapti River nearby and the tranquil Kerung Stream adjacent.
        </h3>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="max-w-8xl mx-auto">
          <div className="relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(100 / slidesToShow) * currentIndex}%)`,
                transition: isTransitioning
                  ? "transform 0.5s ease-in-out"
                  : "none",
              }}
              ref={slideRef}
            >
              {duplicatedSlides.map((slide, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2
              bg-white/80 hover:bg-white text-gray-800
              p-3 rounded-full shadow-lg transition-all
              w-12 h-12 flex items-center justify-center z-20"
            >
              <FaChevronLeft className="text-xl sm:text-2xl" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
              bg-white/80 hover:bg-white text-gray-800
              p-3 rounded-full shadow-lg transition-all
              w-12 h-12 flex items-center justify-center z-20"
            >
              <FaChevronRight className="text-xl sm:text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
