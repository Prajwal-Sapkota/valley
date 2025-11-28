import React, { useState, useEffect } from "react";

const Stays = () => {
    const suites = [
        { name: "Signature Suite", size: "60m²", view: "Great Mountain View", guests: 4, price: "$399", image: "/images/room4.avif" },
        { name: "Prestige Suite", size: "200m²", view: "Great Mountain View", guests: 6, price: "$599", image: "/images/room5.avif" },
        {  name: "Junior Deluxe Suite", size: "90m²", view: "Village View", guests: 4, price: "$449", image: "/images/room6.avif" },
        { name: "Grand Deluxe Suite", size: "120m²", view: "Panoramic Mountain View", guests: 5, price: "$699", image: "/images/room7.avif" }
    ];

    const [slidesToShow, setSlidesToShow] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(suites.length);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Responsive
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setSlidesToShow(1);
            else if (window.innerWidth < 1024) setSlidesToShow(2);
            else setSlidesToShow(3);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const duplicatedSuites = [...suites, ...suites, ...suites];

    const nextSlide = () => {
        setCurrentIndex(prev => prev + 1);
        setIsTransitioning(true);
    };

    const prevSlide = () => {
        setCurrentIndex(prev => prev - 1);
        setIsTransitioning(true);
    };

    useEffect(() => {
        if (currentIndex === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(suites.length);
            }, 500);
        } else if (currentIndex === suites.length * 2) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(suites.length);
            }, 500);
        }
    }, [currentIndex, suites.length]);

    // Calculate width percentage
    const slideWidth = 100 / slidesToShow;

    return (
        <div className="w-full">
            <section className="relative min-h-[96vh] w-full bg-black flex flex-col items-center justify-center text-white">
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 w-full max-w-6xl mx-auto">
                    <h5 className="text-xs sm:text-sm sm:mb-4 drop-shadow-md text-[#ba9d75] font-medium mt-15 mb-10">ENJOY YOUR STAY</h5>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug mb-4 sm:mb-10">SPEND YOUR COMFORTABLE HOLIDAY</h3>
                    <h1 className="text-lg sm:text-md md:text-lg font-semibold leading-snug mb-8 sm:mb-10">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.<br />
                        Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                    </h1>
                    <button id="explore1" className="bg-transparent text-white border border-[#ba9d75] w-64 font-semibold py-3 px-6 hover:bg-[#ab916c] transition-colors cursor-pointer mt-4 mb-12">
                        Explore Accommodation
                    </button>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative mt-10">
                    {/* Arrows */}
                    <button onClick={prevSlide} className="text-black absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-12 h-12 shadow-lg hover:bg-gray-200 z-10">
                        ‹
                    </button>
                    <button onClick={nextSlide} className="text-black absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-12 h-12 shadow-lg hover:bg-gray-200 z-10">
                        ›
                    </button>

                    {/* Slides */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * slideWidth}%)`,
                                transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
                            }}
                        >
                            {duplicatedSuites.map((suite, index) => (
                                <div key={index} className={`flex-shrink-0 px-6 `} style={{ width: `${slideWidth}%` }}>
                                    <div className="relative overflow-hidden shadow-lg cursor-pointer">
                                        {/* Image */}
                                        <img
                                            src={suite.image}
                                            alt={suite.name}
                                            className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105 opacity-50"
                                        />

                                        {/* Green overlay on hover */}
                                        <div className="absolute inset-0 hover:bg-[#4c5947]/80  ">

                                        {/* Content */}
                                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4 pointer-events-none">
                                            <h1 className="text-center text-black   bg-white px-1 py-1 w-20">
                                                {suite.price}
                                            </h1>
                                            <div className="text-left text-white mb-6">
                                                <h3 className="text-3xl ">{suite.name}</h3>
                                                <h1 className="text-sm">{suite.size} / {suite.view} / {suite.guests} Guests</h1>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center mt-6 space-x-2 mb-15">
                        {suites.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx + suites.length)}
                                className={`w-3 h-3 rounded-full ${currentIndex % suites.length === idx ? "bg-[#ba9d75]" : "bg-gray-400"}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stays;
