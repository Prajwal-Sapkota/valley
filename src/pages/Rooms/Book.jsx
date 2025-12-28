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
    <section className="relative py-12">
      <div className="max-w-6xl bg-[#55694f] mx-auto px-4 z-20 py-8">
        <div id="form" className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">

          <div className="flex flex-col">
            <span className="text-white font-medium mb-2">Check In</span>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="border border-[#ba9d75] p-2 bg-[#55694f] text-white focus:outline-none [color-scheme:dark]"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="flex flex-col">
            <span className="text-white font-normal mb-2">Check Out</span>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="border border-[#ba9d75] p-2 bg-[#55694f] text-white focus:outline-none [color-scheme:dark]"
              min={checkInDate}
            />
          </div>

          <div className="flex flex-col">
            <span className="text-white font-normal mb-2">Rooms</span>
            <div className="border border-[#ba9d75] p-2 flex justify-between items-center text-white">
              <button onClick={() => decrement(setRooms, 1)}>-</button>
              <span>{rooms}</span>
              <button onClick={() => increment(setRooms)}>+</button>
            </div>
          </div>

          <div className="flex flex-col relative" ref={dropdownRef}>
            <span className="text-white font-normal mb-2">Guests</span>
            <button
              onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
              className="border border-[#ba9d75] p-2 text-left text-white bg-[#55694f] focus:outline-none"
            >
              {adults} Adult{adults !== 1 ? "s" : ""}{children > 0 ? `, ${children} Child${children !== 1 ? "ren" : ""}` : ""}
            </button>

            {isGuestDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[#55694f] border border-[#ba9d75] rounded-lg p-4 text-white z-10">
                <div className="flex justify-between items-center mb-2">
                  <div>Adults</div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => decrement(setAdults, 1)}>-</button>
                    <span>{adults}</span>
                    <button onClick={() => increment(setAdults)}>+</button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Children</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => decrement(setChildren, 0)}>-</button>
                    <span>{children}</span>
                    <button onClick={() => increment(setChildren)}>+</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <button className="w-full bg-[#ba9d75] text-white font-normal py-3 px-6 hover:bg-[#ab916c] transition-colors cursor-pointer">
              Check Availability
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}