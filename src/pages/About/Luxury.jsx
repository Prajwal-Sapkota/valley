import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Luxury = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const videoId = "wmYG1a0QvUA"; 
  const thumbnail = "/images/about.avif"; 

  return (
    <div className="w-full bg-white">
      <div className="py-12 px-4 sm:px-12 text-center">
        <h5 className="text-sm sm:text-md font-light tracking-wider mb-4 sm:mb-8 text-[#ba9d75] mt-10">
          SWISS HERITAGE MEETS MODERN LUXURY
        </h5>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#1b1c1b] mx-auto leading-relaxed mb-6">
          CozyStay in the heart of the mountains is an architectural<br />
          masterpiece offering contemporary accommodations<br />
          with unrivalled ski and hiking trails.
        </h3>
        <h1 className="text-md sm:text-md md:text-lg font-light text-[#1b1c1b] mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Aenean commodo ligula eget dolor. <br /> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        </h1>
      </div>

      <div className="relative w-full py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative shadow-2xl overflow-hidden ">
            <div className="relative pb-[50%] h-0"> {/* Reduced height here */}
              {playVideo ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div
                  className="absolute top-0 left-0 w-full h-full cursor-pointer group"
                  onClick={() => setPlayVideo(true)}
                >
                  <img
                    src={thumbnail}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-transparent rounded-full w-32 h-32 flex items-center justify-center transition-transform transform border border-white ">
                      <FaPlay className="text-white text-3xl ml-1" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
