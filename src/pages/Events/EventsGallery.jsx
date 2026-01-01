import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const events = [
    { id: 1, slug: "destination-weddings", title: "Destination Weddings", image: "/images/wedding.jpeg" },
    { id: 2, slug: "mice-events", title: "MICE Events", image: "/images/conference1.jpeg" },
    { id: 3, slug: "local-celebrations", title: "Local Celebrations", image: "/images/celebration.webp" },
    { id: 4, slug: "private-functions", title: "Private Functions", image: "/images/private.webp" },
];

const EventsGallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1);
                setCurrentSlide(0);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
                setCurrentSlide(0);
            } else {
                setSlidesToShow(3);
                setCurrentSlide(0);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev + slidesToShow >= events.length ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? Math.max(0, events.length - slidesToShow) : prev - 1
        );
    };

    const visibleEvents = events.slice(
        currentSlide,
        currentSlide + slidesToShow
    );

    return (
        <div className="bg-[#55694f] py-8 sm:py-12 md:py-16 px-4 sm:px-6">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto">
                <span className="text-sm sm:text-md md:text-lg font-medium tracking-wider text-[#bda17b]">
                    MEETINGS, EVENTS & CELEBRATIONS
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white uppercase py-4 sm:py-6 md:py-8">
                    Unforgettable Events with Professional Planning
                </h3>
                
            </div>

            {/* Slider */}
            <div className="relative max-w-7xl mx-auto mt-2 sm:mt-4 md:mt-6">
                {/* Prev - Smaller buttons on mobile */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-8 z-10 bg-white/80 hover:bg-white text-gray-800 p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg cursor-pointer"
                >
                    <FaArrowLeft size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>

                {/* Next - Smaller buttons on mobile */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-8 z-10 bg-white/80 hover:bg-white text-gray-800 p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg cursor-pointer"
                >
                    <FaArrowRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>

                {/* Cards */}
                <div className="overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 py-4 sm:py-6">
                        {visibleEvents.map((event, index) => (
                            <Link
                                key={event.id}
                                to={`/events/${event.slug}`}
                                onClick={() => window.scrollTo(0, 0)}
                                className={`relative overflow-hidden shadow-lg group block ${
                                    index % 2 === 0
                                        ? "-translate-y-1 sm:-translate-y-2 md:-translate-y-4"
                                        : "translate-y-1 sm:translate-y-2 md:translate-y-4"
                                } transition-transform duration-500`}
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-72 sm:h-84 md:h-96 lg:h-108 xl:h-140 object-cover group-hover:scale-105 transition-transform duration-600"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute inset-1 sm:inset-2 md:inset-3 border border-[#ba9d75] pointer-events-none"></div>

                                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 w-full text-center text-white px-2">
                                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal">
                                        {event.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsGallery;