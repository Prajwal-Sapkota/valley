import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Comfortable = () => {
  const facilities = [
    "High Quality Bed",
    "Air Conditioning",
    "Flat Screen TV",
    "Mini Bar",
    "Bathroom with Shower",
    "Refrigerator",
    "Spa Flip Flops",
    "Dining Table",
    "Bathrobes",
    "Laundry",
    "Espresso Machine",
    "Safety Deposit Box",
    "Free WiFi",
    "24-Hour Security",
    "Furnished Balcony"
  ];

  return (
    <div className=" bg-[#1a1a1a] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div>
              <h5 className="text-left text-md md:text-md font-light mb-6 text-[#ba9d75] mt-10">
                COMFORTABLE STAY EXPERIENCE
              </h5>

              <h3 className=" text-left text-3xl md:text-4xl font-light mb-4">
                MOST POPULAR FACILITIES
              </h3>

              <h1 className="text-left leading-relaxed mb-8 text-gray-200">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </h1>

              {/* More About Services Button */}
              <div className="flex justify-start">
                <button  className="text-lg font-light inline-flex items-center group">
                  <span id="services2" className="border-b-2 border-[#ba9d75] group-hover:border-transparent transition-all">
                    More About Services
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
                  className="flex items-center p-3"
                >
                  <div className="text-[#ba9d75] mr-3 font-light text-lg group-hover:scale-110 transition-transform">
                    +
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors">
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
