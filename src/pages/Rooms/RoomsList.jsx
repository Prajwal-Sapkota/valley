import React from "react";
import { FaBed, FaUser, FaBath, FaRulerCombined, FaChevronRight, FaCalendarAlt, FaClock } from "react-icons/fa";

const RoomsList = () => {
    const roomsData = [
        {
            id: 1,
            name: "Signature Suite",
            size: "60 m²",
            view: "Great Mountain View",
            guests: 4,
            beds: 2,
            bathrooms: 1,
            price: 399,
            image: "/images/room1.avif",
            description: "The south-facing aspect affords unimpeded views of the Alps. Measuring 42 square metres, with traditional Alpine woods, warm fireplaces, and natural-stone touches."
        },
        {
            id: 2,
            name: "Deluxe Room",
            size: "35 m²",
            view: "Village View",
            guests: 2,
            beds: 1,
            bathrooms: 1,
            price: 379,
            image: "/images/room2.avif",
            description: "Bright and cozy room with modern amenities and stunning village views."
        },
        {
            id: 3,
            name: "Double Room",
            size: "25 m²",
            view: "Partial Mountain View",
            guests: 2,
            beds: 2,
            bathrooms: 1,
            price: 299,
            image: "/images/room3.avif",
            description: "Comfortable double room perfect for couples, with essential facilities."
        },
        {
            id: 4,
            name: "Grand Deluxe Room",
            size: "50 m²",
            view: "Partial Mountain View",
            guests: 2,
            beds: 1,
            bathrooms: 1,
            price: 329,
            image: "/images/room4.avif",
            description: "Spacious deluxe room with elegant interiors and modern comforts."
        },
        {
            id: 5,
            name: "Prestige Suite",
            size: "200 m²",
            view: "Great Mountain View",
            guests: 6,
            beds: 3,
            bathrooms: 3,
            price: 3299,
            image: "/images/room5.avif",
            description: "The south-facing aspect affords unimpeded views of the Alps. Measuring 42 square metres, with traditional Alpine woods, warm fireplaces, and natural-stone touches."
        },
        {
            id: 6,
            name: "Junior Deluxe Suite",
            size: "90 m²",
            view: "Village View",
            guests: 4,
            beds: 2,
            bathrooms: 2,
            price: 599,
            image: "/images/room6.avif",
            description: "The south-facing aspect affords unimpeded views of the Alps. Measuring 42 square metres, with traditional Alpine woods, warm fireplaces, and natural-stone touches."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Intro Content */}
                <div className="max-w-5xl text-center mb-12 mx-auto">
                    <h2 className="text-md md:text-md font-semibold mb-4 text-[#ba9d75]">Comfortable Rooms & Space</h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl text-gray-700 mb-4">
                        Explore our refined accommodation options and find the perfect space for your stay.
                    </h3>
                    <h1 className="text-md text-gray-600 mb-4">
                        All rooms have a bathroom with bathtub and/or shower, cable television/radio, free WIFI and mini bar. In addition, all rooms are equipped with a Nespresso coffee machine. Most rooms are carpeted, some have parquet flooring.
                    </h1>
                    <div id="time1" className="flex justify-center items-center  font-light text-[#ba9d75] text-lg gap-15">
                        <div className="flex items-center gap-2">
                            <FaClock />
                            <strong>Check In:</strong> 3:00 PM
                        </div>

                        <span >|</span>

                        <div className="flex items-center gap-2">
                            <FaClock />
                            <strong>Check Out:</strong> 12:00 PM
                        </div>
                    </div>
                </div>

                {/* Rooms Grid */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {roomsData.map((room) => (
                        <div key={room.id} className="w-full relative">
                            {/* Room Image with hover zoom and price on top-left */}
                            <div className="relative overflow-hidden  group">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-72 lg:h-[30rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                <span className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-md ">
                                    ${room.price} / NIGHT
                                </span>
                            </div>

                            {/* Room Info */}
                            <div className="mt-4 space-y-8">
                                <h3 className="text-left text-3xl font-semibold text-gray-900">{room.name}</h3>

                                {/* Info with icons */}
                                <div className="flex flex-wrap gap-6 text-gray-600 text-lg mb-6">
                                    <div className="flex items-center gap-2">
                                        <FaRulerCombined className="text-[#ba9d75]" />
                                        <span>{room.size}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaUser className="text-[#ba9d75]" />
                                        <span>{room.guests} Guest{room.guests > 1 ? 's' : ''}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaBed className="text-[#ba9d75]" />
                                        <span>{room.beds} Bed{room.beds > 1 ? 's' : ''}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaBath className="text-[#ba9d75]" />
                                        <span>{room.bathrooms} Bathroom{room.bathrooms > 1 ? 's' : ''}</span>
                                    </div>
                                </div>

                                <h1 className="text-left text-gray-700 text-md">{room.description}</h1>

                                <div className="mt-3 flex justify-start mb-10"> {/* Changed to flex justify-start */}
                                    <button id="discover" className="text-lg text-black font-light inline-flex items-center group">
                                        <span className="border-b-2 border-[#ba9d75] group-hover:border-transparent transition-all">
                                            Discover More
                                        </span>
                                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                                            <FaChevronRight />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomsList;
