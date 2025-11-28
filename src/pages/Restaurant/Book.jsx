import { FaUserTie } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { MdPhoneInTalk, MdRestaurant } from "react-icons/md";

export default function Book() {

    const info = [
        { id: 1, icon: FaUserTie, title: "Dress Code", value: "Smart Casual & Elegant" },
        { id: 2, icon: MdRestaurant, title: "Reservation", value: "Please call +41 22 345 66 77" },
        { id: 3, icon: IoTime, title: "Opening Hours", value: "7:00 am - 10:00 pm Daily" },
    ];

    return (
        <div className="relative w-full h-[400px] text-white">

            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/res5.avif')" }}
            />

            {/* Semi-transparent Overlay */}
            <div className="absolute inset-0 bg-black/70"></div> {/* 30% opacity black overlay */}

            {/* CONTENT */}
            <div className="relative max-w-6xl mx-auto h-full flex flex-col justify-center items-center px-10 space-y-12 ">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-30 place-items-center mt-12">

                    {info.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.id} className="flex flex-col items-center space-y-4">
                                <Icon className="text-5xl text-[#ba9d75]" />
                                <h3 className="uppercase tracking-wide text-2xl font-medium text-white">
                                    {item.title}
                                </h3>
                                <h1 className="text-white/90 text-md">{item.value}</h1>
                            </div>
                        );
                    })}

                </div>

                <button id="book" className="text-white text-xl font-extralight border-b border-[#ba9d75] hover:border-transparent transition-all duration-300 py-1">
                    Book Now
                </button>

            </div>
        </div>
    );
}
