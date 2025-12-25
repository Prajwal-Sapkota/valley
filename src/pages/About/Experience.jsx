import { useRef, useEffect } from "react";

export default function Experience() {
    const rightImageRef = useRef(null);
    const leftImageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate right image first
                        if (rightImageRef.current) {
                            rightImageRef.current.classList.remove('translate-x-[100px]', 'opacity-0');
                            rightImageRef.current.classList.add('translate-x-0', 'opacity-100');
                        }
                        // Animate left image with delay
                        setTimeout(() => {
                            if (leftImageRef.current) {
                                leftImageRef.current.classList.remove('translate-x-[80px]', 'opacity-0');
                                leftImageRef.current.classList.add('translate-x-0', 'opacity-100');
                            }
                        }, 300);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const imageContainer = rightImageRef.current?.parentElement?.parentElement;
        if (imageContainer) {
            observer.observe(imageContainer);
        }

        return () => {
            if (imageContainer) {
                observer.unobserve(imageContainer);
            }
        };
    }, []);

    return (
        <div className="w-full bg-white py-12 ">
            <div className="max-w-[1400px] mx-auto px-8 text-black">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 ">

                    <div className="flex flex-col space-y-4 ">
                        <span className="text-left text-md md:text-lg font-medium text-[#55694f]">
                            SEEKING A TRULY PEACEFUL EXPERIENCE
                        </span>
                        <h3 className=" text-left text-4xl md:text-5xl font-normal text-[#1b1c1b] py-4">
                            UNWIND UNDER THE MOONLIT JUNGLE SKY
                        </h3>
                        <p className=" text-xl md:text-xl font-normal text-[#1b1c1b] text-justify leading-relaxed">
                            Nestled in a peaceful and serene natural setting near Chitwan National Park, Moonlit Resort offers an unforgettable blend of nature, comfort, culture, and professional hospitality. Managed by well-known hospitality veterans with international chain experience, we combine global service standards with authentic Nepali warmth for thoughtfully curated experiences under the moonlit sky, perfect for leisure travel, destination weddings, corporate retreats, and wellness escapes.
                        </p>
                        <button className="bg-transparent text-black border border-[#ba9d75] w-54 font-normal py-3 px-6  hover:bg-[#ab916c] hover:text-white transition-colors cursor-pointer">
                            Discover Experiences
                        </button>
                    </div>

                    <div className="flex flex-col">
                        <div className="grid grid-cols-2 gap-6">
                            {/* Right side image */}
                            <div 
                                ref={rightImageRef}
                                className="group cursor-pointer transition-all duration-700 ease-out translate-x-[100px] opacity-0"
                            >
                                <div className="relative overflow-hidden h-[500px]">
                                    <img
                                        src="/images/riverside.avif"
                                        alt="Rapti River Experience"
                                        className="w-full h-full object-cover transition-transform duration-500 "
                                    />
                                </div>
                            </div>

                            {/* Left side image */}
                            <div 
                                ref={leftImageRef}
                                className="group cursor-pointer transition-all duration-700 ease-out translate-x-[80px] opacity-0"
                            >
                                <div className="relative overflow-hidden h-[440px] mt-8">
                                    <img
                                        src="/images/about2.jpeg"
                                        alt="Kerung Stream Setting"
                                        className="w-full h-full object-cover transition-transform duration-500 "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}