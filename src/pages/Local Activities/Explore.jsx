import React, { useState, useEffect, useRef } from "react";

const Explore = () => {
  const [isVisible, setIsVisible] = useState([false, false]);
  const sectionRefs = [useRef(null), useRef(null)];

  useEffect(() => {
    sectionRefs.forEach((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible((prev) => {
            const newState = [...prev];
            newState[index] = entry.isIntersecting;
            return newState;
          });
        },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => ref.current && observer.unobserve(ref.current);
    });
  }, []);

  const slideInLeft = (visible) =>
    visible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0";
  const slideInRight = (visible) =>
    visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0";

  const sections = [
    {
      title: "Winter Activities",
      subtitle: "SPORTS & ADVENTURES",
      text: "Snowy Andermatt offers a wide range of winter sports. The modern ski resort is known for its sunny slopes, gentle descents, long, steep runs and deep powder descents. You'll also find trails for winter hiking, snowshoeing and cross-country skiing.",
      image: "/images/snow.avif",
      stats: [
        { value: "180km", label: "SKI PISTES" },
        { value: "33", label: "LIFTS" },
        { value: "6km", label: "LONGEST DESCENT" },
      ],
      reverse: true, // image on right
    },
    {
      title: "Summer Activities",
      subtitle: "ENJOY THE SUNSHINE",
      text: "850 km of hiking trails, 4 cableways, one golf course, several Alpine passes: there are many ways to enjoy your holiday in the Andermatt region – whether hiking, swimming in clear alpine lakes, or cycling against the backdrop of the spectacular Alps.",
      image: "/images/summer.avif",
      stats: [
        { value: "850", label: "HIKING TRAILS" },
        { value: "21", label: "SAC HUTS" },
        { value: "4", label: "CABLEWAYS" },
      ],
      reverse: false, // image on left
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h5 className="text-xs sm:text-sm text-[#ba9d75] font-medium uppercase mb-4 drop-shadow-md">
          Explore the majestic Swiss Alps
        </h5>
        <h3 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-black leading-snug">
          Andermatt awaits you with year-round outdoor activities amidst spectacular nature. When it comes to leisure activities, the Alps are almost unbeatable.
        </h3>
      </div>

      {sections.map((section, idx) => (
        <section
          key={idx}
          ref={sectionRefs[idx]}
          className="relative w-full min-h-[96vh] flex flex-col items-center justify-center mb-24 lg:mb-32"
        >
          <div
            className={`relative w-full flex flex-col lg:flex-row items-center ${section.reverse ? "lg:flex-row-reverse" : ""
              }`}
          >
            {/* Image */}
            <div
              className={`w-full lg:w-2/3 transition-all duration-1000 ease-out ${section.reverse
                  ? slideInLeft(isVisible[idx])
                  : slideInRight(isVisible[idx])
                }`}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-[500px] lg:h-[700px] object-cover shadow-2xl "
              />
            </div>

            {/* Content */}
            <div
              className={`bg-black p-8 lg:p-12 space-y-6 transition-all duration-1000 ease-out w-full lg:w-1/2 mt-8 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 ${section.reverse ? "lg:left-0" : "lg:right-0"
                } z-10 shadow-2xl  ${section.reverse
                  ? slideInRight(isVisible[idx])
                  : slideInLeft(isVisible[idx])
                }`}
            >
              <h5 className="text-sm text-[#ba9d75] uppercase tracking-wide">
                {section.subtitle}
              </h5>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white uppercase">
                {section.title}
              </h3>
              <h1 className="text-white leading-relaxed text-lg">{section.text}</h1>
              <button id="discover" className="bg-transparent text-white px-8 py-3 font-semibold hover:bg-[#ba9d78] transition-colors duration-300 uppercase tracking-wide border border-[#ba9d75]">
                Discover More
              </button>

              <div className="grid grid-cols-3 gap-4 mt-6 text-white">
                {section.stats.map((stat, idx2) => (
                  <div key={idx2} className="text-center p-3">
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">
                      {stat.value}
                    </h3>
                    <h1 className="text-xs md:text-sm font-medium text-[#ba9d75] uppercase tracking-wide">
                      {stat.label}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Explore;
