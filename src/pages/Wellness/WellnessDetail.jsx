import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaClock, FaUser, FaCheck, FaArrowLeft, FaPhone, FaCalendarAlt, FaTag } from "react-icons/fa";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import wellnessData from "../../data/wellness.json";
import { MdCall } from "react-icons/md";

const WellnessDetail = () => {
    const { slug } = useParams();
    const [wellness, setWellness] = useState(null);
    const [animateText, setAnimateText] = useState(false);

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    useEffect(() => {
        const foundWellness = wellnessData.wellness.find(w => w.slug === slug);
        setWellness(foundWellness);
        const timer = setTimeout(() => setAnimateText(true), 100);

        return () => clearTimeout(timer);
    }, [slug]);

    if (!wellness) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-normal text-gray-800 mb-4">Service Not Found</h2>
                    <Link
                        to="/wellness"
                        className="text-[#ba9d75] border-b border-[#ba9d75] hover:border-transparent transition-all inline-flex items-center"
                    >
                        <FaArrowLeft className="mr-2" />
                        Back to Wellness Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION WITH NAVIGATION */}
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${wellness.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Navigation */}
                <div className="relative z-50">
                    <Navigation />
                </div>



                {/* Hero Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-center">
                    <div className={`text-center w-full mt-20 transition-transform duration-700 ease-out ${animateText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-wider py-4 text-white">
                            {wellness.title}
                        </h3>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-2">


                        {/* Description */}
                        <div className="mb-8 sm:mb-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900 py-4">Service Overview</h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                                {wellness.description}
                            </p>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                                {wellness.fullDescription}
                            </p>
                        </div>

                        {/* Benefits */}
                        <div className="mb-8 sm:mb-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900 py-4">Key Benefits</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {wellness.bestFor.map((benefit, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <FaCheck className="text-[#ba9d75] flex-shrink-0" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Gallery */}
                        {wellness.gallery && wellness.gallery.length > 0 && (
                            <div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900 py-4">Wellness Space</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {wellness.gallery.map((img, index) => (
                                        <div key={index} className="relative overflow-hidden  h-84">
                                            <img
                                                src={img}
                                                alt={`${wellness.title} ${index + 1}`}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Information Card (Replacing Booking Form) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-6 bg-white border border-gray-200  p-6 shadow-sm">
                            <h2 className="text-xl sm:text-2xl font-normal text-gray-900 mb-6 pb-4 border-b border-gray-200">
                                More Information:
                            </h2>



                            {/* Information Details */}
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <div className="flex items-center">
                                        <FaUser className="text-[#55694f] mr-3" />
                                        <h3 className="font-medium text-gray-700">Minimum Age:</h3>
                                    </div>
                                    <p className="text-gray-600 font-medium">{wellness.minimumAge} years</p>
                                </div>

                                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <div className="flex items-center">
                                        <FaClock className="text-[#55694f] mr-3" />
                                        <h3 className="font-medium text-gray-700">Duration:</h3>
                                    </div>
                                    <p className="text-gray-600 font-medium">{wellness.duration}</p>
                                </div>

                                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <div className="flex items-center">
                                        <FaTag className="text-[#55694f] mr-3" />
                                        <h3 className="font-medium text-gray-700">Type:</h3>
                                    </div>
                                    <p className="text-gray-600 font-medium">{wellness.type}</p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <FaCalendarAlt className="text-[#55694f] mr-3" />
                                        <h3 className="font-medium text-gray-700">Available:</h3>
                                    </div>
                                    <p className="text-gray-600 font-medium">{wellness.available}</p>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <a
                                href="tel:+9779804161233"
                                className="flex items-start gap-4 sm:gap-6 pt-2 group"
                            >
                                <MdCall className="text-3xl sm:text-4xl lg:text-5xl text-[#ba9d75] mt-1 flex-shrink-0" />

                                <div className="space-y-1 sm:space-y-2">
                                    <span className="text-left text-xs sm:text-sm font-normal text-[#ba9d75] uppercase tracking-wider">
                                        RESERVATION BY PHONE
                                    </span>

                                    <h1 className="text-left text-xl sm:text-2xl lg:text-3xl font-normal text-black group-hover:text-[#55694f] transition-colors duration-300 number">
                                        +977 9804161233
                                    </h1>
                                </div>
                            </a>


                            {/* Policies (Optional, can be removed if you want exact match) */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="space-y-3 text-sm text-gray-600">
                                    <div className="flex items-start">
                                        <FaCheck className="text-[#55694f] mt-1 mr-2 flex-shrink-0" />
                                        <span>Free cancellation up to 12 hours before session</span>
                                    </div>
                                    <div className="flex items-start">
                                        <FaCheck className="text-[#55694f] mt-1 mr-2 flex-shrink-0" />
                                        <span>All equipment and materials provided</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Similar Wellness Services */}
            {/* Similar Wellness Services */}
            <div className="py-8 sm:py-10 md:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 border-t border-gray-200">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900 py-8 text-center">
                        More Wellness Services
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
                        {wellnessData.wellness
                            .filter(w => w.slug !== slug)
                            .sort(() => 0.5 - Math.random())
                            .slice(0, 3)
                            .map(similarWellness => (
                                <Link
                                    key={similarWellness.id}
                                    to={`/wellness/${similarWellness.slug}`}
                                    className="group block"
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    <div className="relative overflow-hidden mb-4">
                                        <img
                                            src={similarWellness.image}
                                            alt={similarWellness.title}
                                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 group-hover:text-[#ba9d75] transition-colors">
                                        {similarWellness.title}
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

export default WellnessDetail;