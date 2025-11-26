import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Activities = () => {
    const activities = [
        {
            id: 1,
            title: "Spa & Wellness",
            description: "In the hotel spa center we offer an exceptional well-being experience combining our expertise, high technology and breathtaking results.",
            image: "/images/spa.avif",
            link: "#"
        },
        {
            id: 2,
            title: "Summer Week",
            description: "The Swiss Alps are spectacular in summer, offering some of the best scenery in the world for hiking, biking, rafting and epic drives.",
            image: "/images/res1.avif",
            link: "#"
        },
        {
            id: 3,
            title: "5-Star Gastronomic",
            description: "Extraordinary moments and special occasions are precious. Enjoy a premium suite and dinner for two as well as spa credits with this special offer.",
            image: "/images/res2.avif",
            link: "#"
        }
    ];

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                
                <div className="text-center mb-16">
                    <h1 className="text-sm md:text-md font-bold text-[#ba9d75] mb-4 tracking-widest">
                        LOCAL ACTIVITIES & EVENTS
                    </h1>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#1b1c1b] max-w-3xl mx-auto leading-snug">
                        IMMERSE YOURSELF IN A DIVERSE MOUNTAIN RESORT LIFE
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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

                                <div className="mt-6 text-center px-2 mb-8">
                                    <h1 className="text-2xl font-bold text-[#1b1c1b] mb-4">
                                        {activity.title}
                                    </h1>

                                    <h1 className="text-[#1b1c1b] leading-relaxed mb-4">
                                        {activity.description}
                                    </h1>

                                    <button id='discover'
                                        href={activity.link}
                                        className="inline-flex items-center gap-2 text-[#1b1c1b] font-semibold hover:text-[#ba9d75] transition-colors duration-300 cursor-pointer"
                                    >
                                        Discover More
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
