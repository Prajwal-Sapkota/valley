import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Comfortable = () => {
  const facilities = [
    "Private Balcony with Nature Views",
    "Premium Bedding & Comfort",
    "High-speed Internet Access",
    "Modern Bathroom Amenities",
    "Mini Bar & Refreshments",
    "Flat Screen Television",
    "Air Conditioning Control",
    "Safety Deposit Box",
    "In-room Dining Service",
    "Daily Housekeeping",
    "Concierge Assistance",
    "Room Service 24/7",
    "Wake-up Call Service",
    "Luggage Storage",
    "Express Check-in/out"
  ];

  return (
    <div className=" bg-[#55694f] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Side - Text Content */}
          <div className="space-y-8 text-left py-24">
            <div>
              <span className=" text-md md:text-lg font-medium  text-[#ba9d75] ">
                ROOM HIGHLIGHTS & FACILITIES
              </span>

              <h3 className="  text-3xl md:text-4xl font-normal py-6">
                PREMIUM AMENITIES FOR YOUR COMFORT
              </h3>
              <p className=" leading-relaxed mb-8 text-gray-200 font-normal">
                Every room at Moonlit Resort is equipped with thoughtful amenities designed to ensure your complete comfort and convenience throughout your jungle retreat. From modern conveniences to personalized services, we prioritize your relaxation.
              </p>

              {/* More About Services Button */}
              <div className="flex justify-start">
                <button className="text-lg font-light inline-flex items-center group">
                  <button className="border-b-2 border-[#ba9d75] group-hover:border-transparent transition-all font-normal">
                    Book Your Stay
                  </button>
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                    <FaChevronRight />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Facilities List */}
          <div className=" p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 group cursor-pointer"
                >
                  <div className="text-[#ba9d75] mr-3 font-light text-lg group-hover:scale-110 transition-transform">
                    +
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors font-normal">
                    {facility}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Comfortable;