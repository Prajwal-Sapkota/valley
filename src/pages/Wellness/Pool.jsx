import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Pool = () => {
    const [playVideo, setPlayVideo] = useState(false);

    const videoId = "e9FTSxxFIH0";
    const thumbnail = "/images/pool.avif";

    return (
        <div className="w-full bg-white py-18">
            <div className="text-left space-y-2 px-30">
                <span className="text-md sm:text-lg font-medium tracking-wider text-[#55694f]">
                    OUTDOOR SWIMMING POOL & BAR
                </span>
                <div className="grid grid-cols-2">
                    <h3 className="flex flex-col text-left text-2xl sm:text-3xl md:text-4xl font-normal text-[#1b1c1b] mx-auto leading-relaxed uppercase py-2">
                        Relax by our outdoor pool with scenic views
                    </h3>
                    <p className="flex flex-col text-left text-md sm:text-md md:text-lg font-normal text-[#1b1c1b] mx-auto leading-relaxed">
                        Unwind by our outdoor swimming pool with refreshing cocktails, mocktails, and light snacks in a scenic open-air setting. Enjoy the peaceful natural surroundings near the Rapti River and Kerung Stream.
                    </p>
                </div>

                <div className="relative py-1">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative shadow-2xl overflow-hidden">
                            <div className="relative pb-[50%] h-0">
                                {playVideo ? (
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                        title="Moonlit Resort Outdoor Pool & Bar"
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
                                            alt="Moonlit Resort Outdoor Swimming Pool"
                                            className="w-full h-full object-cover transition-transform duration-500"
                                        />
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-transparent rounded-full w-32 h-32 flex items-center justify-center transition-transform transform border border-white">
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
        </div>
    );
};

export default Pool;