import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Adventure = () => {
    const activities = [
        { id: 1, title: "Elephant Ride", image: "/images/elephantride.avif", category: "JUNGLE EXPERIENCE", link: "/experiences/elephant-ride-experience" },
        { id: 2, title: "Jeep Safari", image: "/images/jeepsafari.avif", category: "ADVENTURE", link: "/experiences/jeep-safari-adventure" },
        { id: 3, title: "Canoeing", image: "/images/canoeing.avif", category: "WATER ACTIVITY", link: "/experiences/canoeing-on-rapti-river" },
        { id: 4, title: "Jungle Walk", image: "/images/junglewalk.avif", category: "NATURE EXPLORATION", link: "/experiences/jungle-walking-tour" },
        { id: 5, title: "Wellness Sanctuary", image: "/images/wellness.avif", category: "SPA & RELAXATION", link: "/wellness/luxury-spa-treatments" },
        { id: 6, title: "Cultural Experience", image: "/images/cultural1.jpg", category: "LOCAL HERITAGE", link: "/experiences/cultural-experience" },
        { id: 7, title: "Village Tour", image: "/images/village.avif", category: "CULTURAL", link: "/experiences/village-tour-experience" },
        { id: 8, title: "Tharu Dance Show", image: "/images/cultural.jpg", category: "ENTERTAINMENT", link: "/experiences/tharu-cultural-dance-show" },
    ];

    const navigate = useNavigate();
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

    const getVisibleActivities = () => {
        return activities.slice(currentSlide, currentSlide + slidesToShow);
    };

    return (
        <div className="bg-white pt-8 sm:pt-18 pb-6 sm:pb-8 px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
                <span className="text-sm sm:text-md md:text-lg font-medium text-[#55694f]">EXPERIENCE THE WILDERNESS</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#1b1c1b] leading-tight py-4 sm:py-6">JUNGLE ADVENTURES</h3>
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
                                onClick={() => navigate(activity.link)}
                                className={`relative overflow-hidden shadow-lg group cursor-pointer ${index % 2 === 0 ? "-translate-y-2 sm:-translate-y-4" : "translate-y-2 sm:translate-y-4"} transition-transform duration-500`}
                            >
                                <img
                                    src={activity.image}
                                    alt={activity.title}
                                    className="w-full h-72 sm:h-80 md:h-120 object-cover group-hover:scale-105 transition-transform duration-600"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                                <div className="absolute inset-2 sm:inset-3 border border-[#ba9d75] pointer-events-none"></div>



                                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white py-4 px-2 text-left">
                                    <p className=" text-[9px] sm:text-xs font-normal tracking-wider">{activity.category}</p>
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