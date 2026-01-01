import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Events = () => {
    const events = [
        {
            id: 1,
            title: "Spa & Jacuzzi",
            image: "/images/jacuzzi.avif",
            description: "Luxury spa treatments, steam & sauna, jacuzzi, and ice bath therapy for complete relaxation and rejuvenation.",
            link: "#"
        },
        {
            id: 2,
            title: "Swimming Pool",
            image: "/images/pool.avif",
            description: "Scenic outdoor pool with pool bar serving refreshing cocktails, mocktails, and light bites in open-air setting.",
            link: "#"
        },
        {
            id: 3,
            title: "Conference & Events",
            image: "/images/conference1.jpeg",
            description: "4,800 sq. ft. hall for conferences, MICE events, destination weddings, and social celebrations with expert planning.",
            link: "/events"
        }
    ];


    return (
        <section className="bg-white py-8 sm:py-12 md:py-18 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">

                <div className="text-center">
                    <span className="text-sm sm:text-md md:text-lg font-medium text-[#55694f] tracking-wider">
                        PREMIUM EVENTS & CELEBRATIONS
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1b1c1b] max-w-3xl mx-auto leading-snug font-normal py-4 sm:py-6">
                        ELEGANT VENUES FOR UNFORGETTABLE MOMENTS
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 py-4 sm:py-6">
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            className={`relative overflow-hidden group ${index % 2 === 0 ? 'sm:-translate-y-2 md:-translate-y-4' : 'sm:translate-y-2 md:translate-y-4'} transition-transform duration-500`}
                        >
                            <div className="relative overflow-hidden h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px] xl:h-[540px] group">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                                <div className="absolute inset-1 sm:inset-2 md:inset-3 border border-[#ba9d75] pointer-events-none"></div>
                            </div>

                            <div className="text-center px-2 sm:px-4 pt-4 sm:pt-6">
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-[#1b1c1b] py-3 sm:py-4 md:py-6 lg:py-8">
                                        {event.title}
                                    </span>
                                </div>

                                <p className="text-[#1b1c1b] leading-relaxed font-normal text-sm sm:text-base">
                                    {event.description}
                                </p>

                                <Link
                                    to={event.link}
                                     onClick={() => window.scrollTo(0, 0)}
                                    className="inline-flex items-center gap-1 sm:gap-2 text-[#1b1c1b] font-normal hover:text-[#55694f] transition-colors duration-300 cursor-pointer mt-3 sm:mt-4 text-sm sm:text-base"
                                >
                                    Plan Your Event
                                    <FaArrowRight className="text-xs sm:text-sm" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;