import React, { useState, useEffect, useRef } from "react";

const Explore = () => {
  // Initialize state for 6 sections
  const [isVisible, setIsVisible] = useState(Array(6).fill(false));
  const sectionRefs = Array(6).fill(null).map(() => useRef(null));

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
      title: "Jeep Safari Adventure",
      subtitle: "CHITWAN EXPLORATION",
      text: "Cover vast areas of Chitwan National Park with our professional Jeep Safaris. Access remote locations and increase your chances of spotting diverse wildlife including tigers, rhinos, and exotic birds with experienced guides.",
      image: "/images/jeep.jpg",
      stats: [
        { value: "Remote", label: "AREAS" },
        { value: "Diverse", label: "WILDLIFE" },
        { value: "Professional", label: "GUIDES" },
      ],
      reverse: true,
    },
    {
      title: "Elephant Ride Experience",
      subtitle: "CHITWAN ADVENTURES",
      text: "Explore Chitwan National Park from a unique perspective with our guided elephant rides. Traverse through diverse habitats while spotting wildlife in their natural environment, creating unforgettable jungle memories.",
      image: "/images/elephant.jpg",
      stats: [
        { value: "Wildlife", label: "VIEWING" },
        { value: "Guided", label: "TOURS" },
        { value: "Unique", label: "PERSPECTIVE" },
      ],
      reverse: false,
    },
    {
      title: "Canoeing on Rapti River",
      subtitle: "RIVER ADVENTURES",
      text: "Enjoy serene canoeing experiences along the Rapti River near our resort. Glide through tranquil waters while spotting crocodiles, aquatic birds, and riverside wildlife in a peaceful natural setting.",
      image: "/images/canoeing.jpg",
      stats: [
        { value: "Rapti", label: "RIVER" },
        { value: "Aquatic", label: "WILDLIFE" },
        { value: "Tranquil", label: "EXPERIENCE" },
      ],
      reverse: true,
    },
    {
      title: "Jungle Walking Tour",
      subtitle: "NATURE IMMERSION",
      text: "Immerse yourself in the jungle with guided walking tours through Chitwan National Park. Experience the forest up close, learn about local flora and fauna, and connect deeply with nature in our peaceful surroundings.",
      image: "/images/junglewalk.jpg",
      stats: [
        { value: "Guided", label: "WALKS" },
        { value: "Flora &", label: "FAUNA" },
        { value: "Nature", label: "CONNECTION" },
      ],
      reverse: false,
    },
    {
      title: "Village Tour Experience",
      subtitle: "LOCAL CULTURE",
      text: "Explore authentic Tharu villages near Chitwan National Park. Learn about traditional lifestyles, local craftsmanship, and experience the warm hospitality of the local communities through immersive village tours.",
      image: "/images/village.jpg",
      stats: [
        { value: "Tharu", label: "CULTURE" },
        { value: "Traditional", label: "LIFESTYLES" },
        { value: "Local", label: "COMMUNITIES" },
      ],
      reverse: true,
    },
    {
      title: "Tharu Cultural Dance Show",
      subtitle: "CULTURAL NIGHTS",
      text: "Experience the rich heritage of the region with our Tharu Cultural Dance Show, hosted every alternate day exclusively for our guests. Enjoy traditional music, vibrant costumes, and authentic performances showcasing local traditions.",
      image: "/images/tharudance.jpg",
      stats: [
        { value: "Every", label: "ALTERNATE DAY" },
        { value: "Traditional", label: "MUSIC" },
        { value: "Vibrant", label: "PERFORMANCES" },
      ],
      reverse: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-18">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-md sm:text-lg text-[#55694f] font-medium uppercase mb-4 drop-shadow-md">
          Moonlit Resort Experiences
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-3xl font-normal text-black leading-snug py-4">
          Located close to Chitwan National Park, guests can enjoy unforgettable adventures and cultural experiences in a peaceful natural setting.
        </h3>
      </div>

      {sections.map((section, idx) => (
        <section
          key={idx}
          ref={sectionRefs[idx]}
          className="relative w-full min-h-[96vh] flex flex-col items-center justify-center py-12"
        >
          <div
            className={`relative w-full flex flex-col lg:flex-row items-center ${
              section.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div
              className={`w-full lg:w-2/3 transition-all duration-1000 ease-out ${
                section.reverse
                  ? slideInLeft(isVisible[idx])
                  : slideInRight(isVisible[idx])
              }`}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-[500px] lg:h-[700px] object-cover shadow-2xl"
              />
            </div>

            {/* Content */}
            <div
              className={`bg-[#55694f] py-18 px-3 space-y-2 transition-all duration-1000 ease-out w-full lg:w-1/2 lg:absolute lg:top-1/2 lg:-translate-y-1/2 ${
                section.reverse ? "lg:left-0" : "lg:right-0"
              } z-10 shadow-2xl ${
                section.reverse
                  ? slideInRight(isVisible[idx])
                  : slideInLeft(isVisible[idx])
              }`}
            >
              <span className="text-sm text-[#ba9d75] uppercase tracking-wide font-medium">
                {section.subtitle}
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white uppercase py-8">
                {section.title}
              </h3>
              <p className="text-white leading-relaxed text-lg font-normal mb-8">
                {section.text}
              </p>
              <button className="bg-transparent text-white px-8 py-3 font-normal hover:bg-[#ba9d78] transition-colors duration-300 uppercase tracking-wide border border-[#ba9d75]">
                Book Experience
              </button>

              <div className="grid grid-cols-3 gap-4 text-white py-6">
                {section.stats.map((stat, idx2) => (
                  <div key={idx2} className="text-center p-3">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {stat.value}
                    </h3>
                    <span className="text-xs md:text-sm font-medium text-[#ba9d75] uppercase tracking-wide">
                      {stat.label}
                    </span>
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