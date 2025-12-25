import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Adventure = () => {
    const activities = [
        { id: 1, title: "Elephant Ride", image: "/images/elephantride.avif", category: "JUNGLE EXPERIENCE" },
        { id: 2, title: "Jeep Safari", image: "/images/jeepsafari.avif", category: "ADVENTURE" },
        { id: 3, title: "Canoeing", image: "/images/canoeing.avif", category: "WATER ACTIVITY" },
        { id: 4, title: "Jungle Walk", image: "/images/junglewalk.avif", category: "NATURE EXPLORATION" },
        { id: 5, title: "Wellness Sanctuary", image: "/images/wellness.avif", category: "SPA & RELAXATION" },
        { id: 6, title: "Cultural Experience", image: "/images/cultural1.jpg", category: "LOCAL HERITAGE" },
        { id: 7, title: "Village Tour", image: "/images/village.avif", category: "CULTURAL" },
        { id: 8, title: "Tharu Dance Show", image: "/images/cultural.jpg", category: "ENTERTAINMENT" },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1);
                setCurrentSlide(0);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
                setCurrentSlide(0);
            } else {
                setSlidesToShow(4);
                setCurrentSlide(0);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => {
            if (prev + slidesToShow >= activities.length) {
                return 0;
            }
            return prev + 1;
        });
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => {
            if (prev === 0) {
                return Math.max(0, activities.length - slidesToShow);
            }
            return prev - 1;
        });
    };

    // Calculate visible activities based on current slide
    const getVisibleActivities = () => {
        return activities.slice(currentSlide, currentSlide + slidesToShow);
    };

    return (
        <div className="min-h-screen bg-white py-12 sm:py-18 px-4">
            <div className="text-center max-w-3xl mx-auto">
                <span className="text-md sm:text-lg font-medium text-[#55694f]">EXPERIENCE THE WILDERNESS</span>
                <h3 className="text-4xl md:text-5xl font-normal text-[#1b1c1b] leading-tight py-6">JUNGLE ADVENTURES</h3>
            </div>

            <div className="relative max-w-7xl mx-auto ">
                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                    <FaArrowLeft size={20} />
                </button>
                
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                    <FaArrowRight size={20} />
                </button>

                {/* Carousel Container */}
                <div className="overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-6">
                        {getVisibleActivities().map((activity, index) => (
                            <div
                                key={activity.id}
                                className={`relative overflow-hidden shadow-lg group ${index % 2 === 0 ? "-translate-y-2 sm:-translate-y-4" : "translate-y-2 sm:translate-y-4"} transition-transform duration-500`}
                            >
                                <img
                                    src={activity.image}
                                    alt={activity.title}
                                    className="w-full h-72 sm:h-80 md:h-120 object-cover group-hover:scale-105 transition-transform duration-600"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                                <div className="absolute inset-2 sm:inset-3 border border-[#ba9d75] pointer-events-none"></div>

                                <span className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white text-black py-1 px-2 sm:py-1.5 sm:px-3 text-xs sm:text-sm font-normal">
                                    $180 / PERSON
                                </span>

                                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white py-4 px-2">
                                    <p className="text-left text-[9px] sm:text-xs font-normal tracking-wider">{activity.category}</p>
                                    <p className="text-lg sm:text-xl font-normal py-2">{activity.title}</p>
                                    <a className="text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 hover:opacity-80 cursor-pointer">
                                        DISCOVER TRIP <span>›</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Adventure;