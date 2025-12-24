import { useState, useRef } from "react";
import { FaRegCalendarCheck, FaUserFriends } from "react-icons/fa";

export default function Stay() {
    const [checkIn, setCheckIn] = useState("2025-11-22");
    const [checkOut, setCheckOut] = useState("2025-11-23");
    const [guests, setGuests] = useState("1 Room, 1 Adult, 0 Children");

    const checkInRef = useRef(null);
    const checkOutRef = useRef(null);

    const openDatePicker = (inputRef) => {
        if (inputRef.current) {
            inputRef.current.showPicker();
        }
    };

    return (
        <section
            className="relative min-h-[80vh] w-full bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: "url('/images/stay.jpeg')" }}
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <div

                className="relative z-10 text-center px-4 sm:px-6 md:px-12 w-full max-w-6xl mx-auto py-6 "
            >
                <span className="text-md sm:text-lg mb-2 sm:mb-4 drop-shadow-md text-[#ba9d75] font-medium">
                    BOOK YOUR STAY NOW
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-snug py-10">
                    Escape to the beautiful mountains where dreams come true.
                    <br />
                    Immerse yourself in the restorative qualities of nature, far from everyday life.
                </h3>

                <div className="bg-transparent px-4 sm:px-6 py-6 sm:py-8 w-full flex flex-col gap-4 md:flex-row md:items-center justify-between">

                    <div
                        className="flex flex-col md:items-start items-center text-left w-full relative cursor-pointer"
                        onClick={() => openDatePicker(checkInRef)}
                    >
                        <div className="flex items-center gap-2 py-2">
                            <FaRegCalendarCheck className="text-[#ba9d75]" size={20} />
                            <h2 className="font-normal text-lg sm:text-base text-white cursor-pointer">Check In</h2>
                        </div>
                        <input
                            ref={checkInRef}
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer font-normal"
                        />
                        <span className="bg-transparent text-white mt-1 text-center md:text-left px-3 py-2 w-full cursor-pointer font-normal ">
                            {checkIn}
                        </span>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-[#ba9d75]"></div>

                    <div
                        className="flex flex-col md:items-start items-center text-left w-full relative cursor-pointer"
                        onClick={() => openDatePicker(checkOutRef)}
                    >
                        <div className="flex items-center gap-2 py-2">
                            <FaRegCalendarCheck className="text-[#ba9d75]" size={20} />
                            <h2 className="font-normal text-lg sm:text-base text-white cursor-pointer">Check Out</h2>
                        </div>
                        <input
                            ref={checkOutRef}
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <span className="bg-transparent text-white mt-1 text-center md:text-left px-3 py-2 w-full cursor-pointer ">
                            {checkOut}
                        </span>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-[#ba9d75]"></div>

                    <div className="flex flex-col md:items-start items-center text-left w-full">
                        <div className="flex items-center gap-2 py-2">
                            <FaUserFriends className="text-[#ba9d75]" size={20} />
                            <h2 className="font-normal text-lg sm:text-base text-white">Guests</h2>
                        </div>
                        <select
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="bg-transparent text-white mt-1 px-3 py-2 w-full cursor-pointer"
                        >
                            <option className="bg-gray-800 text-white">
                                1 Room, 1 Adult, 0 Children
                            </option>
                            <option className="bg-gray-800 text-white">
                                1 Room, 2 Adults, 0 Children
                            </option>
                            <option className="bg-gray-800 text-white">
                                1 Room, 2 Adults, 1 Child
                            </option>
                            <option className="bg-gray-800 text-white">
                                2 Rooms, 4 Adults, 2 Children
                            </option>
                        </select>

                    </div>

                    <button
                        className="bg-[#ba9d75] hover:bg-[#ab916c] text-white font-normal px-8 py-3 w-full md:w-8xl mt-2 md:mt-0 transition-colors duration-300 cursor-pointer"
                    >
                        Check Availability
                    </button>
                </div>
            </div>
        </section>
    );
}
