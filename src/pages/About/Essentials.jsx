import { useRef, useEffect } from "react";
import { FaTree, FaUsers, FaStar, FaHeart, FaGlobe, FaHandshake } from "react-icons/fa";

export default function Essentials() {
    const values = [
        {
            id: 1,
            title: "Authentic Nepali Warmth",
            description: "Every detail thoughtfully designed to deliver genuine local hospitality with international standards.",
            icon: FaHeart
        },
        {
            id: 2,
            title: "Nature Integration",
            description: "Harmonizing luxury with the surrounding jungle environment near Chitwan National Park.",
            icon: FaTree
        },
        {
            id: 3,
            title: "Experienced Leadership",
            description: "Managed by hospitality veterans with extensive domestic and international hotel chain experience.",
            icon: FaUsers
        },
        {
            id: 4,
            title: "Global Standards",
            description: "Combining world-class service standards with authentic local experiences under the moonlit sky.",
            icon: FaGlobe
        },
        {
            id: 5,
            title: "Thoughtful Curation",
            description: "Carefully designed experiences for leisure, weddings, corporate retreats, and wellness escapes.",
            icon: FaStar
        },
        {
            id: 6,
            title: "Professional Hospitality",
            description: "Unforgettable blend of comfort, culture, and professional service in a serene natural setting.",
            icon: FaHandshake
        },
    ];

    const imageContainerRef = useRef(null);
    const largeImageRef = useRef(null);
    const smallImageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate large image
                        if (largeImageRef.current) {
                            largeImageRef.current.classList.remove('translate-x-[-100px]', 'opacity-0');
                            largeImageRef.current.classList.add('translate-x-0', 'opacity-100');
                        }
                        // Animate small image with delay
                        setTimeout(() => {
                            if (smallImageRef.current) {
                                smallImageRef.current.classList.remove('translate-x-[-80px]', 'opacity-0');
                                smallImageRef.current.classList.add('translate-x-0', 'opacity-100');
                            }
                        }, 300);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (imageContainerRef.current) {
            observer.observe(imageContainerRef.current);
        }

        return () => {
            if (imageContainerRef.current) {
                observer.unobserve(imageContainerRef.current);
            }
        };
    }, []);

    return (
        <div className="w-full bg-white py-18 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-black">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-center">

                    {/* Left Column - Images */}
                    <div ref={imageContainerRef} className="order-2 lg:order-1">
                        {/* Mobile: Simple stacked images */}
                        <div className="lg:hidden space-y-6">
                            <div className="w-full h-[250px] sm:h-[300px] overflow-hidden">
                                <img
                                    src="/images/natureview.avif"
                                    alt="Moonlit Resort Overview"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-full h-[250px] sm:h-[300px] overflow-hidden">
                                <img
                                    src="/images/hospitality.avif"
                                    alt="Our Hospitality Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Desktop: Overlapping images with animation */}
                        <div className="hidden lg:block relative">
                            {/* Large Background Image */}
                            <div 
                                ref={largeImageRef}
                                className="relative w-2/3 h-[450px] overflow-hidden shadow-lg transition-all duration-700 ease-out translate-x-[-100px] opacity-0"
                            >
                                <img
                                    src="/images/natureview.avif"
                                    alt="Moonlit Resort Overview"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/25"></div>
                            </div>

                            {/* Small Overlapping Image */}
                            <div 
                                ref={smallImageRef}
                                className="absolute -bottom-12 -right-8 w-2/3 h-[550px] shadow-lg overflow-hidden transition-all duration-700 ease-out translate-x-[-80px] opacity-0"
                            >
                                <img
                                    src="/images/hospitality.avif"
                                    alt="Our Hospitality Team"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="order-1 lg:order-2 ">
                        <div className="flex flex-col space-y-4 sm:space-y-6">
                            <span className="text-left text-md md:text-lg font-medium text-[#55694f]">
                                OUR HOSPITALITY PHILOSOPHY
                            </span>
                            <h3 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#1b1c1b]">
                                THE MOONLIT EXPERIENCE
                            </h3>

                            <p className="text-left text-sm sm:text-base lg:text-lg text-[#1b1c1b] font-normal">
                                Managed by renowned hospitality veterans, Moonlit Resort delivers authentic Nepali warmth
                                with international service standards for immersive local experiences under the moonlit sky.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                                {values.map((value) => {
                                    const IconComponent = value.icon;
                                    return (
                                        <div key={value.id} className="flex items-start space-x-3 sm:space-x-4">
                                            <IconComponent className="text-[#55694f] mt-1" size={44} />
                                            <div >
                                                <h3 className="text-left text-base sm:text-lg lg:text-xl font-normal text-[#1b1c1b] mb-1">
                                                    {value.title}
                                                </h3>
                                                <p className="text-left text-[#1b1c1b] font-normal text-xs sm:text-sm">
                                                    {value.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}