import React, { useState, useRef, useEffect } from "react";

export default function Booking() {
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
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsGuestDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const increment = (setter) => setter((prev) => prev + 1);
  const decrement = (setter, min) => setter((prev) => Math.max(min, prev - 1));

  return (
    <section className="relative -mt-2 sm:-mt-12 px-4 sm:px-6">
      <div className="max-w-6xl bg-[#55694f] mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 z-20">
        <div id="form" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 items-end">

          <div className="flex flex-col">
            <span className="text-white font-medium mb-1 sm:mb-2 text-sm sm:text-base">Check In</span>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="border border-[#ba9d75] p-2 sm:p-3 bg-[#55694f] text-white focus:outline-none [color-scheme:dark] text-sm sm:text-base"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="flex flex-col">
            <span className="text-white font-normal mb-1 sm:mb-2 text-sm sm:text-base">Check Out</span>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="border border-[#ba9d75] p-2 sm:p-3 bg-[#55694f] text-white focus:outline-none [color-scheme:dark] text-sm sm:text-base"
              min={checkInDate}
            />
          </div>

          <div className="flex flex-col">
            <span className="text-white font-normal mb-1 sm:mb-2 text-sm sm:text-base">Rooms</span>
            <div className="border border-[#ba9d75] p-2 sm:p-3 flex justify-between items-center text-white">
              <button 
                onClick={() => decrement(setRooms, 1)} 
                className="w-6 h-6 flex items-center justify-center hover:bg-[#ba9d75]/20 rounded"
              >
                -
              </button>
              <span className="text-sm sm:text-base">{rooms}</span>
              <button 
                onClick={() => increment(setRooms)} 
                className="w-6 h-6 flex items-center justify-center hover:bg-[#ba9d75]/20 rounded"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col relative" ref={dropdownRef}>
            <span className="text-white font-normal mb-1 sm:mb-2 text-sm sm:text-base">Guests</span>
            <button
              onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
              className="border border-[#ba9d75] p-2 sm:p-3 text-left text-white bg-[#55694f] focus:outline-none text-sm sm:text-base"
            >
              {adults} Adult{adults !== 1 ? "s" : ""}{children > 0 ? `, ${children} Child${children !== 1 ? "ren" : ""}` : ""}
            </button>

            {isGuestDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[#55694f] border border-[#ba9d75] rounded-lg p-4 text-white z-10 w-full">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm sm:text-base">Adults</div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => decrement(setAdults, 1)}
                      className="w-6 h-6 flex items-center justify-center hover:bg-[#ba9d75]/20 rounded text-sm sm:text-base"
                    >
                      -
                    </button>
                    <span className="text-sm sm:text-base min-w-[20px] text-center">{adults}</span>
                    <button 
                      onClick={() => increment(setAdults)}
                      className="w-6 h-6 flex items-center justify-center hover:bg-[#ba9d75]/20 rounded text-sm sm:text-base"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base">Children</span>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => decrement(setChildren, 0)}
                      className="w-6 h-6 flex items-center justify-center hover:bg-[#ba9d75]/20 rounded text-sm sm:text-base"
                    >
                      -
                    </button>
                    <span className="text-sm sm:text-base min-w-[20px] text-center">{children}</span>
                    <button 
                      onClick={() => increment(setChildren)}
                      className="w-6 h-6 flex items-center justify-center hover:bg-[#ba9d75]/20 rounded text-sm sm:text-base"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <button className="w-full bg-[#ba9d75] text-white font-normal py-3 px-4 sm:px-6 hover:bg-[#ab916c] transition-colors cursor-pointer text-sm sm:text-base">
              Check Availability
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}