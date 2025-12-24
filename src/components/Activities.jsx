import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Activities = () => {
    const activities = [
        {
            id: 1,
            title: "Wellness Sanctuary",
            description: "Rejuvenate your body, mind, and soul at our renowned wellness facilities, thoughtfully designed for complete relaxation. Perfect for wellness tourism guests, retreat groups, and individual travelers seeking restoration.",
            image: "/images/wellness.avif",
            link: "#"
        },
        {
            id: 2,
            title: "Jungle Adventures",
            description: "Located close to Chitwan National Park, guests can enjoy unforgettable adventures including Elephant Ride, Jeep Safari, Canoeing, Jungle Walk, and Village Tour. Experience the wilderness up close.",
            image: "/images/jungleadventure.avif",
            link: "#"
        },
        {
            id: 3,
            title: "Cultural Experience",
            description: "Experience the rich heritage of the region with our Tharu Cultural Dance Show, hosted every alternate day exclusively for our guests. Discover local traditions and authentic Nepali warmth.",
            image: "/images/cultural.jpg",
            link: "#"
        }
    ];

    return (
        <section className="bg-white py-12 px-4">
            <div className="max-w-7xl mx-auto ">
                
                <div className="text-center ">
                    <span className="text-md md:text-lg font-medium text-[#ba9d75]  tracking-widest">
                        JUNGLE EXPERIENCES & WELLNESS
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#1b1c1b] max-w-3xl mx-auto leading-snug font-normal py-4">
                        IMMERSE YOURSELF IN MOONLIT RESORT LIFE
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-8">
                    {activities.map((activity, index) => {
                        
                        const staggerClass =
                            index % 2 === 0
                                ? "md:-translate-y-8"
                                : "md:translate-y-8";

                        return (
                            <div
                                key={activity.id}
                                className={`transition duration-300 ${staggerClass}`}
                            >
                                <div className="relative overflow-hidden h-[350px] sm:h-[450px] md:h-[600px] group">
                                    <img
                                        src={activity.image}
                                        alt={activity.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 border-2 border-[#ba9d75] pointer-events-none opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:inset-3"></div>
                                </div>

                                <div className=" text-center px-2 py-6 ">
                                    <span className="text-4xl font-normal text-[#1b1c1b] py-2">
                                        {activity.title}
                                    </span>

                                    <p className="text-[#1b1c1b] leading-relaxed font-normal py-4">
                                        {activity.description}
                                    </p>

                                    <button 
                                        href={activity.link}
                                        className="inline-flex items-center gap-2 text-[#1b1c1b] font-normal hover:text-[#ba9d75] transition-colors duration-300 cursor-pointer"
                                    >
                                        Discover Experience
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Activities;