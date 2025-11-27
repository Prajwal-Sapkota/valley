import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Pool = () => {
    const [playVideo, setPlayVideo] = useState(false);

    const videoId = "e9FTSxxFIH0";
    const thumbnail = "/images/pool.avif";

    return (
        <div className="w-full bg-white">
            <div className="py-12 px-4 sm:px-12">
                <h5 className=" text-left text-sm sm:text-md font-light tracking-wider mb-4 sm:mb-8 text-[#ba9d75] ml-12 ">
                    DAY SPA AND INDOOR POOL
                </h5>
                <div className="grid grid-cols-2 ">
                    <h3 className=" flex flex-col text-left text-2xl sm:text-3xl md:text-4xl font-light text-[#1b1c1b] mx-auto leading-relaxed uppercase ml-10">
                        An ideal place for relaxing spa moments in a dream setting
                    </h3>
                    <h5 className=" flex flex-col text-left text-md sm:text-md md:text-lg font-light text-[#1b1c1b] mx-auto leading-relaxed mr-10">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </h5>
                </div>
            </div>

            <div className="relative py-8 mb-10">
                <div className="max-w-7xl mx-auto">
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

export default Pool;
