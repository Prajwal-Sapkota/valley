import React from "react";
import { FaBed, FaUser, FaBath, FaRulerCombined, FaChevronRight, FaCalendarAlt, FaClock } from "react-icons/fa";

const RoomsList = () => {
    const roomsData = [
        {
            id: 1,
            name: "Deluxe Garden View Room",
            size: "45 m²",
            view: "Garden View",
            guests: 2,
            beds: 1,
            bathrooms: 1,
            price: 299,
            image: "/images/deluxe.jpeg",
            description: "Features private balcony with scenic garden views, elegant interiors with natural light, and premium bedding for ultimate comfort."
        },
        {
            id: 2,
            name: "River View Suite",
            size: "60 m²",
            view: "Rapti River View",
            guests: 4,
            beds: 2,
            bathrooms: 1,
            price: 399,
            image: "/images/riverview.jpeg",
            description: "Spacious suite with panoramic views of the Rapti River, featuring private balcony and luxurious amenities for family stays."
        },
        {
            id: 3,
            name: "Kerung Stream Villa",
            size: "85 m²",
            view: "Stream & Jungle View",
            guests: 6,
            beds: 3,
            bathrooms: 2,
            price: 599,
            image: "/images/kerung.jpeg",
            description: "Luxury villa adjacent to Kerung Stream with private garden, two bathrooms, and immersive jungle surroundings."
        },
        {
            id: 4,
            name: "Premium Jungle View Room",
            size: "40 m²",
            view: "Jungle Canopy View",
            guests: 2,
            beds: 1,
            bathrooms: 1,
            price: 349,
            image: "/images/roomhero.jpg",
            description: "Room with breathtaking jungle canopy views, private balcony, and modern amenities for nature enthusiasts."
        },
        {
            id: 5,
            name: "Executive Suite",
            size: "70 m²",
            view: "Panoramic Jungle & River View",
            guests: 4,
            beds: 2,
            bathrooms: 2,
            price: 499,
            image: "/images/executive.jpeg",
            description: "Executive suite combining luxury with nature, featuring dual views of jungle and river, premium furnishings."
        },
        {
            id: 6,
            name: "Presidential Villa",
            size: "120 m²",
            view: "360° Nature Views",
            guests: 8,
            beds: 4,
            bathrooms: 3,
            price: 899,
            image: "/images/villa.jpeg",
            description: "Ultimate luxury villa with expansive living spaces, multiple balconies, and uninterrupted views of surrounding greenery."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Intro Content */}
                <div className="max-w-4xl text-center mb-12 mx-auto">
                    <span className="text-md md:text-lg font-medium  text-[#55694f] uppercase">Luxury Accommodation</span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl text-black font-normal py-6">
                        80 ELEGANT ROOMS & SUITES DESIGNED FOR COMFORT AND PRIVACY
                    </h3>
                    <p className="text-md text-gray-600 mb-4 font-normal">
                        Moonlit Resort features 80 spacious rooms including Deluxe Rooms and Suites, all with private balconies, elegant interiors with natural light, high-speed Wi-Fi, modern amenities, premium bedding, and scenic views of gardens, streams, or surrounding greenery.
                    </p>
                    <span className="flex justify-center items-center  font-medium text-[#ba9d75] text-lg gap-15 py-4">
                        <div className="flex items-center gap-2">
                            <FaClock />
                            Check In: 2:00 PM
                        </div>

                        <span >|</span>

                        <div className="flex items-center gap-2">
                            <FaClock />
                           Check Out: 12:00 PM
                        </div>
                    </span>
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
                                <span className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-md font-normal">
                                    ${room.price} / NIGHT
                                </span>
                            </div>

                            {/* Room Info */}
                            <div className="mt-4 space-y-8">
                                <h3 className="text-left text-3xl font-normal text-gray-900">{room.name}</h3>

                                {/* Info with icons */}
                                <div className="flex flex-wrap gap-6 text-gray-600 text-lg ">
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
                                        <span>{room.beds} {room.beds > 1 ? 'Double Beds' : 'King Bed'}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaBath className="text-[#ba9d75]" />
                                        <span>{room.bathrooms} Bathroom{room.bathrooms > 1 ? 's' : ''}</span>
                                    </div>
                                </div>

                                <p className="text-left text-gray-700 text-md font-normal">{room.description}</p>

                                <div className="flex justify-start "> {/* Changed to flex justify-start */}
                                    <button id="discover" className="text-lg text-black font-light inline-flex items-center group">
                                        <button className="border-b-2 border-[#ba9d75] group-hover:border-transparent transition-all font-normal">
                                            View Room Details
                                        </button>
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