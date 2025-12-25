import React from 'react';
import { FaArrowRight, FaUsers, FaCalendarAlt, FaGlassCheers } from 'react-icons/fa';

const Events = () => {
    const events = [
        {
            id: 1,
            title: "Spa & Jacuzzi",
            image: "/images/jacuzzi.avif",
            description: "Luxury spa treatments, steam & sauna, jacuzzi, and ice bath therapy for complete relaxation and rejuvenation."
        },
        {
            id: 2,
            title: "Swimming Pool",
            image: "/images/pool.avif",
            description: "Scenic outdoor pool with pool bar serving refreshing cocktails, mocktails, and light bites in open-air setting."
        },
        {
            id: 3,
            title: "Conference & Events",
            image: "/images/conference1.jpeg",
            description: "4,800 sq. ft. hall for conferences, MICE events, destination weddings, and social celebrations with expert planning."
        }
    ];
    return (
        <section className="bg-white py-18 px-4">
            <div className="max-w-7xl mx-auto ">

                <div className="text-center ">
                    <span className="text-md md:text-lg font-medium text-[#55694f]  tracking-widest">
                        PREMIUM EVENTS & CELEBRATIONS
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#1b1c1b] max-w-3xl mx-auto leading-snug fony-normal py-6">
                        ELEGANT VENUES FOR UNFORGETTABLE MOMENTS
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-6">
                    {events.map((event, index) => {



                        return (
                            <div
                                key={event.id}
                                className={`relative overflow-hidden group ${index % 2 === 0 ? "-translate-y-2 sm:-translate-y-4" : "translate-y-2 sm:translate-y-4"} transition-transform duration-500`}
                            >
                                <div className="relative overflow-hidden h-[350px] sm:h-[450px] md:h-[600px] group">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                                    />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                                    <div className="absolute inset-2 sm:inset-3 border border-[#ba9d75] pointer-events-none"></div>                                </div>

                                <div className=" text-center px-2 ">
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="text-4xl font-normal text-[#1b1c1b] py-8">
                                            {event.title}
                                        </span>
                                    </div>

                                    <p className="text-[#1b1c1b] leading-relaxed font-normal ">
                                        {event.description}
                                    </p>

                                    <div className="">
                                        <span className="inline-block  text-[#55694f] text-sm font-medium px-3 py-2 ">
                                            {event.capacity}
                                        </span>
                                    </div>

                                    <button
                                        className="inline-flex items-center gap-2 text-[#1b1c1b] font-normal hover:text-[#55694f] transition-colors duration-300 cursor-pointer"
                                    >
                                        Plan Your Event
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

export default Events;