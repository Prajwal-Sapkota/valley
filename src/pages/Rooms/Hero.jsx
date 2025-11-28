import React, { useState, useRef, useEffect } from "react";
import Navigation from "../../components/Navigation";

const Hero = () => {
    const backgroundImageUrl = "/images/room1.avif";

    const [animateText, setAnimateText] = useState(false);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        setCheckInDate(tomorrow.toISOString().split("T")[0]);
        setCheckOutDate(tomorrow.toISOString().split("T")[0]);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsGuestDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        setTimeout(() => setAnimateText(true), 200);
    }, []);

    const increment = (setter) => setter(prev => prev + 1);
    const decrement = (setter, min) => setter(prev => Math.max(min, prev - 1));

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            ></div>
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Navbar */}
            <div className="relative z-50">
                <Navigation />
            </div>

            {/* TEXT CENTER */}
            <div className="relative z-30 flex flex-col items-center justify-center h-[60vh] px-4">
                <div className={`text-center transition duration-700 ease-out
                    ${animateText ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <h3 className="text-2xl md:text-4xl lg:text-6xl font-light tracking-wide text-white">
                        ROOMS & SUITES
                    </h3>

                    <h1 className="text-md md:text-lg lg:text-2xl font-light tracking-wide text-white mt-4">
                        Warmth. Care. Peace.
                    </h1>
                </div>
            </div>

            {/* ✨ BOOKING FORM */}
            <div className="relative z-30 max-w-6xl mx-auto px-4 pb-12 mb-10 -mt-10">
                <div id="form"
                    className="grid grid-cols-1 md:grid-cols-5 gap-6 bg-transparent "
                >
                    {/* Check in */}
                    <div>
                        <label className="text-white mb-1 block">Check In</label>
                        <input
                            type="date"
                            value={checkInDate}
                            onChange={e => setCheckInDate(e.target.value)}
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full border border-[#ba9d75] bg-transparent text-white p-2 outline-none
             [&::-webkit-calendar-picker-indicator]:invert-[1]
             [&::-webkit-calendar-picker-indicator]:opacity-100"                        />
                    </div>

                    {/* Check out */}
                    <div>
                        <label className="text-white mb-1 block">Check Out</label>
                        <input
                            type="date"
                            value={checkOutDate}
                            onChange={e => setCheckOutDate(e.target.value)}
                            min={checkInDate}
                            className="w-full border border-[#ba9d75] bg-transparent text-white p-2 outline-none
             [&::-webkit-calendar-picker-indicator]:invert-[1]
             [&::-webkit-calendar-picker-indicator]:opacity-100"                        />
                    </div>

                    {/* Rooms */}
                    <div>
                        <label className="text-white mb-1 block">Rooms</label>
                        <div className="flex items-center justify-between text-white border border-[#ba9d75] p-2">
                            <button onClick={() => decrement(setRooms, 1)}>-</button>
                            <span>{rooms}</span>
                            <button onClick={() => increment(setRooms)}>+</button>
                        </div>
                    </div>

                    {/* Guests Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <label className="text-white mb-1 block">Guests</label>
                        <button
                            onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
                            className="w-full border border-[#ba9d75] text-white p-2 text-left bg-transparent"
                        >
                            {adults} Adult{adults > 1 ? "s" : ""}{children ? `, ${children} Child${children > 1 ? "ren" : ""}` : ""}
                        </button>

                        {isGuestDropdownOpen && (
                            <div className="absolute w-full bg-white border border-[#ba9d75] p-4 text-black top-full mt-1">
                                <div className="flex justify-between mb-2">
                                    <span>Adults</span>
                                    <div className="flex gap-2">
                                        <button onClick={() => decrement(setAdults, 1)}>-</button>
                                        <span>{adults}</span>
                                        <button onClick={() => increment(setAdults)}>+</button>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <span>Children</span>
                                    <div className="flex gap-2">
                                        <button onClick={() => decrement(setChildren, 0)}>-</button>
                                        <span>{children}</span>
                                        <button onClick={() => increment(setChildren)}>+</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Button */}
                    <div>
                        <button
                            id="check"
                            className="w-full bg-[#ba9d75] hover:bg-[#a08360] text-white py-3 font-semibold transition cursor-pointer mt-6"
                        >
                            Check Availability
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
