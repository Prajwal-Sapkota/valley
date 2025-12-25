import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Luxury = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const videoId = "wmYG1a0QvUA";
  const thumbnail = "/images/about.avif";

  return (
    <div className="w-full bg-white py-18">
      <div className=" px-4 sm:px-12 text-center">
        <span className="text-md sm:text-lg font-medium tracking-wider text-[#55694f]">
          JUNGLE LUXURY MEETS AUTHENTIC HOSPITALITY
        </span>
        <h3 className="max-w-6xl text-2xl sm:text-3xl md:text-4xl font-normal text-[#1b1c1b] mx-auto leading-relaxed py-4">
          Moonlit Resort is a premium leisure and event destination
          located near the world-famous Chitwan National Park,
          designed to harmonize with nature and authentic Nepali culture.<br />

        </h3>

      </div>

      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <div className="relative shadow-2xl overflow-hidden">
            <div className="relative pb-[50%] h-0">
              <div className="absolute top-0 left-0 w-full h-full group">
                <img
                  src="/images/aboutbg.jpeg"
                  alt="Moonlit Resort Experience"
                  className="w-full h-full object-cover"
                />

                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-black/25 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Luxury;