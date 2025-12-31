import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const activities = [
    { id: 1, slug: "luxury-spa-treatments", title: "Luxury Spa Treatments", image: "/images/spa1.avif" },
    { id: 2, slug: "steam-sauna", title: "Steam & Sauna", image: "/images/steam.avif" },
    { id: 3, slug: "jacuzzi-therapy", title: "Jacuzzi Therapy", image: "/images/jacuzzi.avif" },
    { id: 4, slug: "ice-bath-therapy", title: "Ice Bath Therapy", image: "/images/icebath.avif" },
    { id: 5, slug: "yoga-meditation", title: "Yoga & Meditation", image: "/images/yoga.webp" },
];

const Journey = () => {
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
        setCurrentSlide((prev) =>
            prev + slidesToShow >= activities.length ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? Math.max(0, activities.length - slidesToShow) : prev - 1
        );
    };

    const visibleActivities = activities.slice(
        currentSlide,
        currentSlide + slidesToShow
    );

    return (
        <div className="bg-[#55694f] py-12 md:py-18 px-4 sm:px-6">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto">
                <span className="text-sm sm:text-md md:text-lg font-normal text-[#bda17b]">
                    MOONLIT WELLNESS SANCTUARY
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white uppercase py-6 md:py-8">
                    Holistic Rejuvenation for Body, Mind & Soul
                </h3>
                <p className="text-sm sm:text-md md:text-lg font-normal text-white">
                    Rejuvenate at our wellness facilities designed for complete
                    relaxation and restoration.
                </p>
            </div>

            {/* Slider */}
            <div className="relative max-w-7xl mx-auto mt-10">
                {/* Prev */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg"
                >
                    <FaArrowLeft size={20} />
                </button>

                {/* Next */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg"
                >
                    <FaArrowRight size={20} />
                </button>

                {/* Cards */}
                <div className="overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-6">
                        {visibleActivities.map((activity, index) => (
                            <Link
                                key={activity.id}
                                to={`/wellness/${activity.slug}`}
                                onClick={() => window.scrollTo(0, 0)}
                                className={`relative overflow-hidden shadow-lg group block ${
                                    index % 2 === 0
                                        ? "-translate-y-2 sm:-translate-y-4"
                                        : "translate-y-2 sm:translate-y-4"
                                } transition-transform duration-500`}
                            >
                                <img
                                    src={activity.image}
                                    alt={activity.title}
                                    className="w-full h-72 sm:h-80 md:h-84 lg:h-96 xl:h-120 object-cover group-hover:scale-105 transition-transform duration-600"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute inset-2 sm:inset-3 border border-[#ba9d75] pointer-events-none"></div>

                                <div className="absolute bottom-4 w-full text-center text-white px-2">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-normal">
                                        {activity.title}
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

export default Journey;
