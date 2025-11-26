import React, { useState } from "react";
import { FaArrowRight, FaUsers, FaRulerCombined, FaBed, FaBath, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RoomsSlider = () => {
    const accommodations = [
        {
            id: 1,
            name: "Signature Suite",
            price: "$399",
            size: "60 m²",
            guests: "4 Guests",
            beds: "2 Beds",
            bathroom: "1 Bathroom",
            image: "/images/room1.avif",
            link: "#"
        },
        {
            id: 2,
            name: "Deluxe Room",
            price: "$299",
            size: "45 m²",
            guests: "2 Guests",
            beds: "1 Bed",
            bathroom: "1 Bathroom",
            image: "/images/room2.avif",
            link: "#"
        },
        {
            id: 3,
            name: "Mountain Villa",
            price: "$599",
            size: "85 m²",
            guests: "6 Guests",
            beds: "3 Beds",
            bathroom: "2 Bathrooms",
            image: "/images/room3.avif",
            link: "#"
        }
    ];

    const [current, setCurrent] = useState(0);
    const length = accommodations.length;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

    return (
        <div className="bg-[#f2ece4] py-12 px-4">
            <div className="max-w-7xl mx-auto ">
                <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                    <div className="mb-4 md:mb-0">
                        <h5 className=" text-left text-sm md:text-md font-bold text-[#ba9d75] mb-6">
                            DISCOVER OUR ACCOMMODATIONS
                        </h5>
                        <h3 className=" text-left text-3xl md:text-4xl lg:text-5xl text-[#1b1c1b] mb-4">
                            ROOMS. SUITES. VILLAS
                        </h3>
                    </div>
                    <div>
                        <button id="explore" className="inline-flex items-center gap-2 hover:text-[#ba9d75] text-[#1b1c1b] font-medium py-2 px-4 md:py-3 md:px-6 transition-colors duration-300 text-2xl sm:text-lg md:text-3xl mt-12 cursor-pointer">
                            Explore All Accommodations
                            <FaArrowRight size={14} />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden shadow-lg mb-8">
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
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {accommodations.map((room) => (
                            <div key={room.id} className="min-w-full relative h-[400px] sm:h-[500px] md:h-[600px]">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-full object-cover"
                                />
                                <div id="rate" className="absolute inset-0 bg-black/40"></div>
                                <div  className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#67593f] text-white font-light py-1 px-3 md:py-2 md:px-4 border border-[#ba9d75] text-sm md:text-base">
                                    FROM {room.price}
                                </div>

                                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-10 text-white text-center space-y-2 md:space-y-4">
                                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold">{room.name}</h3>
                                    <div id="info" className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm sm:text-base md:text-lg mt-2">
                                        <div className="flex items-center gap-1 md:gap-2"><FaRulerCombined /> {room.size}</div>
                                        <div className="flex items-center gap-1 md:gap-2"><FaUsers /> {room.guests}</div>
                                        <div className="flex items-center gap-1 md:gap-2"><FaBed /> {room.beds}</div>
                                        <div className="flex items-center gap-1 md:gap-2"><FaBath /> {room.bathroom}</div>
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
