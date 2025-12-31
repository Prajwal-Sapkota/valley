import React, { useState } from "react";
import { FaArrowRight, FaUsers, FaRulerCombined, FaBed, FaBath, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const RoomsSlider = () => {
    const accommodations = [
        {
            id: 1,
            name: "Deluxe Room with Garden View",
            size: "45 m²",
            guests: "2 Guests",
            beds: "1 King Bed",
            bathroom: "1 Bathroom",
            image: "/images/deluxe.jpeg",
            link: "/rooms/deluxe-garden-view-room"
        },
        {
            id: 2,
            name: "River View Suite",
            size: "60 m²",
            guests: "4 Guests",
            beds: "2 Double Beds",
            bathroom: "1 Bathroom",
            image: "/images/riverview.jpeg",
            link: "/rooms/river-view-suite"
        },
        {
            id: 3,
            name: "Kerung Stream Villa",
            size: "85 m²",
            guests: "6 Guests",
            beds: "3 Beds",
            bathroom: "2 Bathrooms",
            image: "/images/kerung.jpeg",
            link: "/rooms/kerung-stream-villa"
        }
    ];

    const [current, setCurrent] = useState(0);
    const length = accommodations.length;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

    return (
        <div className="bg-[#f2ece4] py-8 sm:py-12 md:py-18 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4 sm:mb-6 md:mb-8">
                    <div className="text-left">
                        <span className="text-sm sm:text-md md:text-lg font-medium text-[#55694f] block">
                            DISCOVER OUR LUXURY ACCOMMODATIONS
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1b1c1b] font-normal leading-tight py-3 sm:py-4 md:py-6">
                            80 ELEGANT ROOMS & SUITES
                        </h3>
                    </div>
                    <div className="mt-4 sm:mt-6 md:mt-0">
                        <Link to="/rooms" className="inline-flex items-center gap-1 sm:gap-2 hover:text-[#55694f] text-[#1b1c1b] font-normal py-1 sm:py-2 md:py-3 px-3 sm:px-4 md:px-6 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer"
                            onClick={() => window.scrollTo(0, 0)}>
                            View All 80 Rooms
                            <FaArrowRight className="text-xs sm:text-sm md:text-base" />
                        </Link>
                    </div>
                </div>

                <div className="relative overflow-hidden py-6 ">
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-black/50 text-white p-2 md:p-3 rounded-full hover:bg-black/70 z-10 cursor-pointer"
                    >
                        <FaChevronLeft size={14} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-black/50 text-white p-2 md:p-3 rounded-full hover:bg-black/70 z-10 cursor-pointer"
                    >
                        <FaChevronRight size={14} />
                    </button>


                    <div
                        className="flex transition-transform duration-700 ease-in-out "
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {accommodations.map((room) => (
                            <Link
                                key={room.id}
                                to={room.link}
                                onClick={() => window.scrollTo(0, 0)}
                                className="min-w-full relative h-[400px] sm:h-[500px] md:h-[600px] cursor-pointer block"
                            >
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40"></div>


                                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-10 text-white text-center space-y-2 md:space-y-4 font-normal">
                                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-normal">{room.name}</h3>
                                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm sm:text-base md:text-lg mt-2 font-normal">
                                        <span className="flex items-center gap-1 md:gap-2 "><FaRulerCombined /> {room.size}</span>
                                        <span className="flex items-center gap-1 md:gap-2"><FaUsers /> {room.guests}</span>
                                        <span className="flex items-center gap-1 md:gap-2"><FaBed /> {room.beds}</span>
                                        <span className="flex items-center gap-1 md:gap-2"><FaBath /> {room.bathroom}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomsSlider;