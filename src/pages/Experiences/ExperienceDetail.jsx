import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaClock, FaUsers, FaCalendarAlt, FaMountain, FaCheck, FaArrowLeft } from "react-icons/fa";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import experiencesData from "../../data/experiences.json";

const ExperienceDetail = () => {
    const { slug } = useParams();
    const [experience, setExperience] = useState(null);
    const [animateText, setAnimateText] = useState(false);

    const [selectedDate, setSelectedDate] = useState("");
    const [participants, setParticipants] = useState(2);

    useEffect(() => {
        const foundExperience = experiencesData.experiences.find(e => e.slug === slug);
        setExperience(foundExperience);

        const timer = setTimeout(() => setAnimateText(true), 100);

        return () => clearTimeout(timer);
    }, [slug]);

    if (!experience) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-normal text-gray-800 mb-4">Experience Not Found</h2>
                    <p className="text-gray-600 mb-6">Please select an experience from our offerings.</p>
                    <Link
                        to="/experiences"
                        className="text-[#ba9d75] border-b border-[#ba9d75] hover:border-transparent transition-all inline-flex items-center"
                    >
                        <FaArrowLeft className="mr-2" />
                        Back to Experiences
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION WITH NAVIGATION */}
            <div className="relative w-full h-screen overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${experience.image})` }}
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
                            {experience.title}
                        </h3>




                    </div>
                </div>
            </div>


            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-2">
                        {/* Quick Info */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <FaClock className="text-xl text-[#ba9d75] mb-2" />
                                <p className="text-xs text-gray-600 uppercase tracking-wide">Duration</p>
                                <p className="text-lg font-medium text-gray-900">{experience.duration}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <FaUsers className="text-xl text-[#ba9d75] mb-2" />
                                <p className="text-xs text-gray-600 uppercase tracking-wide">Group Size</p>
                                <p className="text-lg font-medium text-gray-900">{experience.groupSize}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <FaCalendarAlt className="text-xl text-[#ba9d75] mb-2" />
                                <p className="text-xs text-gray-600 uppercase tracking-wide">Best Time</p>
                                <p className="text-lg font-medium text-gray-900">{experience.bestTime}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <FaMountain className="text-xl text-[#ba9d75] mb-2" />
                                <p className="text-xs text-gray-600 uppercase tracking-wide">Difficulty</p>
                                <p className="text-lg font-medium text-gray-900">{experience.difficulty}</p>
                            </div>
                        </div>

                        {/* Full Description */}
                        <div className="pt-8 sm:pt-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900 mb-4">Experience Details</h2>

                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-2 text-justify ">
                                {experience.description}
                            </p>

                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                                {experience.fullDescription}
                            </p>
                        </div>

                        {/* Included */}
                        <div className="pt-8 sm:pt-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900 mb-4">What's Included</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {experience.included?.map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <FaCheck className="text-[#ba9d75] flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>

                    {/* Right Column - Booking */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-6 bg-white border border-gray-200  p-6 shadow-sm">
                            {/* Price */}
                            <div className="mb-6">

                                <p className="text-center pt-3 text-xs">
                                    Confirmation will be received at time of booking
                                </p>
                            </div>

                            {/* Booking Form */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="w-full p-3 border border-gray-300 focus:ring-1 focus:ring-[#ba9d75] focus:border-[#ba9d75] outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Participants</label>
                                    <select
                                        value={participants}
                                        onChange={(e) => setParticipants(parseInt(e.target.value))}
                                        className="w-full p-3 border border-gray-300 focus:ring-1 focus:ring-[#ba9d75] focus:border-[#ba9d75] outline-none"
                                    >
                                        <option value="1">1 Person</option>
                                        <option value="2">2 Persons</option>
                                        <option value="3">3 Persons</option>
                                        <option value="4">4 Persons</option>
                                        <option value="5">5 Persons</option>
                                        <option value="6">6+ Persons</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                                    <select className="w-full p-3 border border-gray-300  focus:ring-1 focus:ring-[#ba9d75] focus:border-[#ba9d75] outline-none">
                                        <option>Morning (6:00 AM)</option>
                                        <option>Late Morning (9:00 AM)</option>
                                        <option>Afternoon (2:00 PM)</option>
                                        <option>Sunset (4:00 PM)</option>
                                        <option>Evening (7:00 PM)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Book Now Button */}
                            <button className="w-full mt-8 bg-[#55694f] text-white py-4  text-base sm:text-lg font-medium hover:bg-[#45583d] transition-colors duration-300">
                                Book This Experience
                            </button>

                            {/* Policies */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="space-y-3 text-sm text-gray-600">
                                    <div className="flex items-start">
                                        <FaCheck className="text-[#ba9d75] mt-1 mr-2 flex-shrink-0" />
                                        <span>Free cancellation up to 24 hours before experience</span>
                                    </div>
                                    <div className="flex items-start">
                                        <FaCheck className="text-[#ba9d75] mt-1 mr-2 flex-shrink-0" />
                                        <span>Professional guides & safety equipment included</span>
                                    </div>
                                    <div className="flex items-start">
                                        <FaCheck className="text-[#ba9d75] mt-1 mr-2 flex-shrink-0" />
                                        <span>Hotel pickup and drop-off included</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Gallery */}
            {experience.gallery && experience.gallery.length > 0 && (
                <div className="py-4 sm:py-6 md:py-8 ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900 mb-8 text-center">
                            Photo Gallery
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {experience.gallery.map((img, index) => (
                                <div key={index} className="relative overflow-hidden  h-72 sm:h-84 md:h-120">
                                    <img
                                        src={img}
                                        alt={`${experience.title} ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Similar Experiences */}
            <div className="py-8 sm:py-10 md:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6  border-t border-gray-200">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900 py-8 text-center">
                        More Experiences
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
                        {experiencesData.experiences
                            .filter(e => e.slug !== slug)
                            .sort(() => 0.5 - Math.random()) 
                            .slice(0, 3) 
                            .map(similarExp => (
                                <Link
                                    key={similarExp.id}
                                    to={`/experiences/${similarExp.slug}`}
                                    className="group block"
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    <div className="relative overflow-hidden mb-4">
                                        <img
                                            src={similarExp.image}
                                            alt={similarExp.title}
                                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 group-hover:text-[#ba9d75] transition-colors">
                                        {similarExp.title}
                                    </h3>
                                    
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ExperienceDetail;