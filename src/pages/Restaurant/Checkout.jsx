import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Checkout() {

    const suites = [
        { id: 1, image: "/images/table.avif" },
        { id: 2, image: "/images/res7.avif" },
        { id: 3, image: "/images/res8.avif" },
        { id: 4, image: "/images/res9.avif" },
        { id: 5, image: "/images/res10.avif" }
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
        <section className="w-full flex flex-col items-center text-center pt-18">

            <div className="max-w-4xl ">
                <span className="text-md sm:text-lg text-[#55694f] font-medium uppercase">
                    Moonlit Resort Experiences
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-5xl font-normal text-black uppercase py-8">
                    Discover More Than Just Dining
                </h3>

                <p className="text-lg font-normal text-black mb-10">
                    At Moonlit Resort, enjoy not just exquisite dining but also jungle adventures, wellness sanctuary,<br />
                    and premium event spaces—all in a serene natural setting near Chitwan National Park.
                </p>

                <button className="bg-[#ba9d75] text-white border border-[#ba9d78] w-64 py-3 font-normal hover:bg-[#ab916c]">
                    Explore All Experiences
                </button>
            </div>

            {/* SLIDER */}
            <div className="relative w-full max-w-8xl mt-20 ">

                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 w-15 h-15 flex items-center justify-center rounded-full text-white z-20 ml-8"
                >
                    <FaChevronLeft/>
                </button>

                {/* Right Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 w-15 h-15 flex items-center justify-center rounded-full text-white z-20 mr-8"
                >
                    <FaChevronRight/>
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
                                    alt="Moonlit Resort Experience"
                                    className="w-full h-[280px] md:h-[300px] shadow object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
        </section>
    );
}