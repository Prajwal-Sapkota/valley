import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaTv, FaWifi, FaTree, FaCoffee, FaGlassCheers, FaShower, FaLock, FaBell, FaBroom, FaSoap, FaLeaf, FaWater, FaHotTub, FaCouch, FaConciergeBell, FaBed, FaUser, FaUsers, FaUtensils, FaChair, FaParking, FaFire, FaBath, FaEye, FaBinoculars, FaSpa, FaVolumeMute, FaWineGlassAlt, FaBook, FaHeart, FaChevronLeft, FaRulerCombined, FaCheck, FaKey } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";

import roomsData from "../../data/rooms.json";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const RoomDetail = () => {
    const { slug } = useParams();
    const [room, setRoom] = useState(null);
    const [animateText, setAnimateText] = useState(false);
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [guests, setGuests] = useState(2);

    useEffect(() => {
        const foundRoom = roomsData.rooms.find(r => r.slug === slug);
        setRoom(foundRoom);
        if (foundRoom) {
            setGuests(foundRoom.guests);
        }

        // Animation for hero text
        const timer = setTimeout(() => setAnimateText(true), 100);
        return () => clearTimeout(timer);
    }, [slug]);

    if (!room) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-normal text-gray-800 mb-4">Room Not Found</h2>
                    <p className="text-gray-600 mb-6">Please select a room from our listings.</p>
                    <Link
                        to="/rooms"
                        className="text-[#ba9d75] border-b border-[#ba9d75] hover:border-transparent transition-all inline-flex items-center"
                    >
                        <FaChevronLeft className="mr-2" />
                        Back to Rooms
                    </Link>
                </div>
            </div>
        );
    }
    const iconMap = {
        TbAirConditioning: TbAirConditioning,

        FaTv: FaTv,
        FaWifi: FaWifi,
        FaTree: FaTree,
        FaCoffee: FaCoffee,
        FaGlassCheers: FaGlassCheers,
        FaShower: FaShower,
        FaLock: FaLock,
        FaBell: FaBell,
        FaBroom: FaBroom,
        FaSoap: FaSoap,
        FaLeaf: FaLeaf,

        FaWater: FaWater,
        FaHotTub: FaHotTub,
        FaCouch: FaCouch,
        FaConciergeBell: FaConciergeBell,
        FaBed: FaBed,
        FaUser: FaUser,
        FaUsers: FaUsers,

        FaUtensils: FaUtensils,
        FaChair: FaChair,
        FaParking: FaParking,
        FaFire: FaFire,
        FaBath: FaBath,

        FaEye: FaEye,
        FaBinoculars: FaBinoculars,
        FaSpa: FaSpa,
        FaVolumeMute: FaVolumeMute,
        FaWineGlassAlt: FaWineGlassAlt,
        FaBook: FaBook,
        FaHeart: FaHeart
    };



    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION WITH NAVIGATION */}
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${room.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/60"></div>




                {/* Navbar */}
                <div className="relative z-50">
                    <Navigation />
                </div>

                {/* TEXT CENTER */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-center">
                    <div className={`text-center w-full mt-20 transition-transform duration-700 ease-out ${animateText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-wider py-4 text-white">
                            {room.name}
                        </h3>




                    </div>
                </div>
            </div>

            {/* Room Details Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-2">
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <FaRulerCombined className="text-xl text-[#ba9d75] mb-2" />
                                <p className="text-xs text-gray-600 uppercase tracking-wide">Size</p>
                                <p className="text-lg font-medium text-gray-900">{room.size}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <FaUser className="text-xl text-[#ba9d75] mb-2" />
                                <p className="text-xs text-gray-600 uppercase tracking-wide">Guests</p>
                                <p className="text-lg font-medium text-gray-900">{room.guests} Max</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <FaBed className="text-xl text-[#ba9d75] mb-2" />
                                <p className="text-xs text-gray-600 uppercase tracking-wide">Beds</p>
                                <p className="text-lg font-medium text-gray-900">{room.beds} {room.beds > 1 ? 'Beds' : 'Bed'}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <FaBath className="text-xl text-[#ba9d75] mb-2" />
                                <p className="text-xs text-gray-600 uppercase tracking-wide">Bathrooms</p>
                                <p className="text-lg font-medium text-gray-900">{room.bathrooms}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="pt-8 sm:pt-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900 mb-4">About This Room</h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">{room.longDescription}</p>
                        </div>

                        {/* Features */}
                        <div className="pt-8 sm:pt-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900 mb-4">Room Features</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {room.features?.map((feature, index) => (
                                    <li key={index} className="flex items-start text-gray-700">
                                        <FaCheck className="text-[#ba9d75] mt-1 mr-3 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-8 sm:pt-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900 mb-4">Amenities</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {room.amenities?.map((amenity, index) => {
                                    const IconComponent = iconMap[amenity.icon] || FaCheck;

                                    return (
                                        <div key={index} className="flex items-center space-x-3 p-4 ">
                                            <div className="w-10 h-10 bg-[#ba9d75]/10 rounded-full flex items-center justify-center">
                                                <IconComponent className="text-[#ba9d75] text-lg" />
                                            </div>
                                            <span className="text-gray-700">{amenity.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Booking */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-6 bg-white border border-gray-200  p-6 shadow-sm">
                            <div className="mb-6">
                                <div className=" p-4">
                                    <p className="text-sm text-[#55694f]">
                                        <span className="font-medium">Flexible Booking:</span> Free cancellation up to 48 hours before check-in
                                    </p>
                                </div>
                            </div>

                            {/* Booking Form */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                                    <input
                                        type="date"
                                        value={checkInDate}
                                        onChange={(e) => setCheckInDate(e.target.value)}
                                        className="w-full p-3 border border-gray-300 focus:ring-1 focus:ring-[#ba9d75] focus:border-[#ba9d75] outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                                    <input
                                        type="date"
                                        value={checkOutDate}
                                        onChange={(e) => setCheckOutDate(e.target.value)}
                                        className="w-full p-3 border border-gray-300 focus:ring-1 focus:ring-[#ba9d75] focus:border-[#ba9d75] outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                                    <select
                                        value={guests}
                                        onChange={(e) => setGuests(parseInt(e.target.value))}
                                        className="w-full p-3 border border-gray-300 focus:ring-1 focus:ring-[#ba9d75] focus:border-[#ba9d75] outline-none"
                                    >
                                        {Array.from({ length: room.guests }, (_, i) => i + 1).map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Book Now Button */}
                            <button className="w-full mt-8 bg-[#55694f] text-white py-4 text-base sm:text-lg font-medium hover:bg-[#45583d] transition-colors duration-300">
                                Book Now
                            </button>

                            {/* Policies */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="space-y-3 text-sm text-gray-600">
                                    <div className="flex items-start">
                                        <FaKey className="text-[#ba9d75] mt-1 mr-2 flex-shrink-0" />
                                        <span>Check-in: 2:00 PM | Check-out: 12:00 PM</span>
                                    </div>
                                    <div className="flex items-start">
                                        <FaUtensils className="text-[#ba9d75] mt-1 mr-2 flex-shrink-0" />
                                        <span>Complimentary breakfast included</span>
                                    </div>
                                    <div className="flex items-start">
                                        <FaConciergeBell className="text-[#ba9d75] mt-1 mr-2 flex-shrink-0" />
                                        <span>24-hour room service available</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Similar Rooms */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-18 ">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900 mb-6 text-center flex items-center justify-center">
                    Explore Other Rooms
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {roomsData.rooms
                        .filter(r => r.slug !== slug)
                        .slice(0, 4)
                        .map(similarRoom => (
                            <Link
                                key={similarRoom.id}
                                to={`/rooms/${similarRoom.slug}`}
                                className="group block"
                                onClick={() => window.scrollTo(0, 0)}  // ← Just add this line
                            >
                                <div className="relative overflow-hidden  mb-3">
                                    <img
                                        src={similarRoom.image}
                                        alt={similarRoom.name}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#ba9d75] transition-colors">
                                    {similarRoom.name}
                                </h3>

                            </Link>
                        ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default RoomDetail;