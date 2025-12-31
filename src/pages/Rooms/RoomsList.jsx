import React from "react";
import { Link } from "react-router-dom";
import { FaBed, FaUser, FaBath, FaRulerCombined, FaChevronRight, FaClock } from "react-icons/fa";
import roomsData from "../../data/rooms.json";

const RoomsList = () => {
    const { rooms } = roomsData;

    return (
        <div id="roomslist" className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                {/* Intro Content */}
                <div className="max-w-4xl text-center mb-8 sm:mb-10 md:mb-12 mx-auto">
                    <span className="text-sm sm:text-md md:text-lg font-medium text-[#55694f] uppercase">Luxury Accommodation</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-normal py-3 sm:py-4 md:py-6">
                        80 ELEGANT ROOMS & SUITES DESIGNED FOR COMFORT AND PRIVACY
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 font-normal leading-relaxed">
                        Moonlit Resort features 80 spacious rooms including Deluxe Rooms and Suites, all with private balconies, elegant interiors with natural light, high-speed Wi-Fi, modern amenities, premium bedding, and scenic views of gardens, streams, or surrounding greenery.
                    </p>
                    <span className="flex flex-col sm:flex-row justify-center items-center font-medium text-[#ba9d75] text-base sm:text-lg gap-4 sm:gap-15 py-4">
                        <div className="flex items-center gap-2">
                            <FaClock className="text-sm" />
                            Check In: 2:00 PM
                        </div>

                        <span className="hidden sm:inline">|</span>
                        <span className="sm:hidden text-gray-400">——</span>

                        <div className="flex items-center gap-2">
                            <FaClock className="text-sm" />
                            Check Out: 12:00 PM
                        </div>
                    </span>
                </div>

                {/* Rooms Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {rooms.map((room) => (
                        <div key={room.id} className="w-full relative">
                            {/* Room Image with hover zoom */}
                            <div className="relative overflow-hidden group">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-64 sm:h-84 md:h-96 lg:h-110 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                            </div>

                            {/* Room Info */}
                            <div className="mt-3 sm:mt-4 space-y-4 sm:space-y-6 md:space-y-8">
                                <h3 className="text-left text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-900">
                                    {room.name}
                                </h3>

                                {/* Info with icons */}
                                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-gray-600 text-sm sm:text-base md:text-lg">
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <FaRulerCombined className="text-[#ba9d75] text-sm sm:text-base" />
                                        <span>{room.size}</span>
                                    </div>
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <FaUser className="text-[#ba9d75] text-sm sm:text-base" />
                                        <span>{room.guests} Guest{room.guests > 1 ? 's' : ''}</span>
                                    </div>
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <FaBed className="text-[#ba9d75] text-sm sm:text-base" />
                                        <span>{room.beds} {room.beds > 1 ? 'Double Beds' : 'King Bed'}</span>
                                    </div>
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <FaBath className="text-[#ba9d75] text-sm sm:text-base" />
                                        <span>{room.bathrooms} Bathroom{room.bathrooms > 1 ? 's' : ''}</span>
                                    </div>
                                </div>

                                <p className="text-left text-gray-700 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                                    {room.description}
                                </p>

                                <div className="flex justify-start">
                                    <Link 
                                        to={`/rooms/${room.slug}`}
                                        className="text-sm sm:text-base md:text-lg text-black font-light inline-flex items-center group"
                                    >
                                        <span className="border-b-2 border-[#ba9d75] group-hover:border-transparent transition-all font-normal">
                                            View Room Details
                                        </span>
                                        <span className="ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2">
                                            <FaChevronRight className="text-sm sm:text-base" />
                                        </span>
                                    </Link>
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