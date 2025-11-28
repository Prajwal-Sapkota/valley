import { useState, useEffect } from "react";

export default function Checkout() {

    const suites = [
        { id: 1, image: "/images/room4.avif" },
        { id: 2, image: "/images/room5.avif" },
        { id: 3, image: "/images/room6.avif" },
        { id: 4, image: "/images/room7.avif" },
        { id: 5, image: "/images/spa.avif" }

    ];

    const [slidesToShow, setSlidesToShow] = useState(5);
    const [currentIndex, setCurrentIndex] = useState(suites.length);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Responsive handling
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setSlidesToShow(2);
            else if (window.innerWidth < 1024) setSlidesToShow(3);
            else setSlidesToShow(5);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const duplicatedSuites = [...suites, ...suites, ...suites];
    const slideWidth = 100 / slidesToShow;

    const nextSlide = () => {
        setCurrentIndex(p => p + 1);
        setIsTransitioning(true);
    };

    const prevSlide = () => {
        setCurrentIndex(p => p - 1);
        setIsTransitioning(true);
    };

    useEffect(() => {
        if (currentIndex === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(suites.length);
            }, 500);
        }
        else if (currentIndex === suites.length * 2) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(suites.length);
            }, 500);
        }
    }, [currentIndex]);

    return (
        <section className="w-full flex flex-col items-center text-center">

            <div className="max-w-4xl mt-20 mb-20">
                <h5 className="text-xs sm:text-sm text-[#ba9d75] font-medium uppercase mb-10">
                    Check out all restaurants and bars
                </h5>

                <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-black uppercase mb-10">
                    Interested in afternoon tea, bar, cigar lounge?
                </h3>

                <h1 className="text-lg font-medium text-black mb-10">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
                    Cras dapibus. Vivamus elementum semper nisi.
                </h1>

                <button id="restaurant" className="bg-[#ba9d75] text-white border border-[#ba9d78] w-64 py-3 font-semibold hover:bg-[#ab916c]">
                    View All Restaurants
                </button>
            </div>

            {/* SLIDER */}
            <div className="relative w-full max-w-8xl mt-20 ">

                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 w-15 h-15 flex items-center justify-center rounded-full text-white z-20 ml-8"
                >
                    ‹
                </button>

                {/* Right Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 w-15 h-15 flex items-center justify-center rounded-full text-white z-20 mr-8"
                >
                    ›
                </button>

                <div className="flex">
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(-${currentIndex * slideWidth}%)`,
                            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none"
                        }}
                    >
                        {duplicatedSuites.map((suite, index) => (
                            <div key={`${suite.id}-${index}`}
                                className="flex-shrink-0"
                                style={{ width: `${slideWidth}%` }}
                            >
                                <img
                                    src={suite.image}
                                    alt="suite"
                                    className="w-full h-[280px] md:h-[300px]  shadow object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {suites.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setIsTransitioning(true);
                                setCurrentIndex(i + suites.length);
                            }}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex % suites.length === i ? "bg-[#ba9d75]" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
