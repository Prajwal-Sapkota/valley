import React, { useState } from "react";
import { FaArrowRight, FaUsers, FaRulerCombined, FaBed, FaBath, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RoomsSlider = () => {
    const accommodations = [
        {
            id: 1,
            name: "Deluxe Room with Garden View",
            price: "$299",
            size: "45 m²",
            guests: "2 Guests",
            beds: "1 King Bed",
            bathroom: "1 Bathroom",
            image: "/images/deluxe.jpeg",
            link: "#"
        },
        {
            id: 2,
            name: "River View Suite",
            price: "$399",
            size: "60 m²",
            guests: "4 Guests",
            beds: "2 Double Beds",
            bathroom: "1 Bathroom",
            image: "/images/riverview.jpeg",
            link: "#"
        },
        {
            id: 3,
            name: "Kerung Stream Villa",
            price: "$599",
            size: "85 m²",
            guests: "6 Guests",
            beds: "3 Beds",
            bathroom: "2 Bathrooms",
            image: "/images/kerung.jpeg",
            link: "#"
        }
    ];

    const [current, setCurrent] = useState(0);
    const length = accommodations.length;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

    return (
        <div className="bg-[#f2ece4] py-18 px-4">
            <div className="max-w-7xl mx-auto ">
                <div className="flex flex-col md:flex-row justify-between items-start ">
                    <div className="text-left ">
                        <span className="text-md md:text-lg font-medium text-[#55694f] block ">
                            DISCOVER OUR LUXURY ACCOMMODATIONS
                        </span>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1b1c1b] font-normal leading-tight py-6">
                            80 ELEGANT ROOMS & SUITES
                        </h3>
                    </div>
                    <div className="mt-12 ">
                        <button className="inline-flex items-center gap-2 hover:text-[#55694f] text-[#1b1c1b] font-normal py-2 px-4 md:py-3 md:px-6 transition-colors duration-300 text-base sm:text-lg md:text-xl lg:text-3xl cursor-pointer">
                            View All 80 Rooms
                            <FaArrowRight size={14} className="md:size-4" />
                        </button>
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
                            <div key={room.id} className="min-w-full relative h-[400px] sm:h-[500px] md:h-[600px]">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40"></div>
                                <span className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#67593f] text-white font-normal py-1 px-3 md:py-2 md:px-4 border border-[#ba9d75] text-sm md:text-base">
                                    FROM {room.price}/NIGHT
                                </span>

                                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-10 text-white text-center space-y-2 md:space-y-4 font-normal">
                                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-normal">{room.name}</h3>
                                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm sm:text-base md:text-lg mt-2 font-normal">
                                        <span className="flex items-center gap-1 md:gap-2 "><FaRulerCombined /> {room.size}</span>
                                        <span className="flex items-center gap-1 md:gap-2"><FaUsers /> {room.guests}</span>
                                        <span className="flex items-center gap-1 md:gap-2"><FaBed /> {room.beds}</span>
                                        <span className="flex items-center gap-1 md:gap-2"><FaBath /> {room.bathroom}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomsSlider;