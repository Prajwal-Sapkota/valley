import React, { useState } from 'react';
import { FaGlobe, FaChevronDown, FaBars, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import DropDine from './Dropdown/DropDine';
import DropStay from './Dropdown/DropStay';
import DropPlay from './Dropdown/DropPlay';
import DropHome from './Dropdown/DropHome';

const Navigation = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { label: 'HOME', hasDropdown: true },
        { label: 'STAY', hasDropdown: true },
        { label: 'DINE', hasDropdown: true },
        { label: 'PLAY', hasDropdown: true },
        { label: 'RELAX', hasDropdown: false },
    ];

    const mobileNavItems = [
        { label: 'Home', hasDropdown: false },
        { label: 'Stay', hasDropdown: false },
        { label: 'Dine', hasDropdown: true },
        { label: 'Play', hasDropdown: true },
        { label: 'Relax', hasDropdown: true },
        { label: 'Pages', hasDropdown: true },
        { label: 'Our Blog', hasDropdown: false },
    ];

    return (
        <div className="bg-transparent w-full">
            <div className="hidden lg:block bg-transparent border-b border-white/20 py-5 w-full">
                <div className="flex justify-between text-sm text-white px-8 ml-24">
                    <span>CHABAHIL, KATHMANDU, NEPAL</span>
                    <div className="flex space-x-6 mr-24">
                        <span>TEL: +977-9800000000</span>
                        <span>FAX: +41 22 345 6</span>
                        <span>bookig@cozystay.com</span>
                    </div>
                </div>
            </div>

            <nav className="bg-transparent w-full relative">
                <div className="w-full px-4 lg:px-12">
                    <div className="flex items-center justify-between h-16 lg:h-20 w-full">

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden text-white p-2 z-50 cursor-pointer"
                        >
                            {mobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>

                        <div className="hidden lg:flex items-center space-x-3 ml-17 mt-4">
                            {navItems.map((item) => (
                                <div
                                    key={item.label}
                                    className="relative z-50 group"
                                >
                                    <button
                                        className="flex items-center text-white px-3 py-2 text-sm font-medium relative transition-colors cursor-pointer"
                                        onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                                    >
                                        {item.label}
                                        {item.hasDropdown && (
                                            <FaChevronDown className="ml-1 h-3 w-3" />
                                        )}
                                        <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="absolute left-1/2 transform -translate-x-1/2 text-center z-40 mt-4">
                            <h1 className="text-xl lg:text-4xl font-extralight  text-white tracking-widest">
                                COZYSTAY
                            </h1>
                            <div className="flex justify-center mt-1 space-x-1">
                                {[...Array(5)].map((_, index) => (
                                    <AiFillStar key={index} className="text-[#ba9d75] w-3 h-4" />
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center space-x-4 z-50 mt-4 mr-20">
                            <div className="relative group">
                                <button
                                    className="flex items-center text-white px-3 py-2 text-sm font-medium relative cursor-pointer"
                                    onMouseEnter={() => setActiveDropdown('PAGES')}
                                >
                                    PAGES
                                    <FaChevronDown className="ml-1 h-3 w-3" />
                                    <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                                </button>

                                {activeDropdown === 'PAGES' && (
                                    <div
                                        className="absolute right-0 mt-2 w-32 bg-black text-white py-1 z-50 text-left"
                                        onMouseEnter={() => setActiveDropdown('PAGES')}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <a href='/about' className="block px-4 py-2 text-sm hover:text-[#b99d75]">About</a>
                                        <a href='/services' className="block px-4 py-2 text-sm hover:text-[#b99d75]">Services</a>
                                        <a className="block px-4 py-2 text-sm hover:text-[#b99d75]">Rooms & Suites</a>
                                        <a className="block px-4 py-2 text-sm hover:text-[#b99d75]">Restaurant</a>
                                        <a className="block px-4 py-2 text-sm hover:text-[#b99d75]">Local Activities</a>
                                        <a className="block px-4 py-2 text-sm hover:text-[#b99d75]">Wellness</a>
                                        <a className="block px-4 py-2 text-sm hover:text-[#b99d75]">Contact</a>
                                        <a className="block px-4 py-2 text-sm hover:text-[#b99d75]">Our Blog</a>
                                    </div>
                                )}
                            </div>

                            <button className="flex items-center text-white px-3 py-2 text-sm font-medium group relative cursor-pointer">
                                <FaGlobe className="h-4 w-4 mr-1" />
                                EN
                                <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                            </button>

                            <button id="reserve" className="bg-transparent border border-white text-white px-6 py-2 text-sm hover:bg-white hover:text-black transition-all group relative cursor-pointer">
                                Reserve Now
                                <span className="absolute left-0 -bottom-1 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                            </button>
                        </div>

                        <div className="lg:hidden flex items-center space-x-3 z-50">
                            <button className="flex items-center text-white px-2 py-1 text-sm cursor-pointer">
                                <FaGlobe className="h-4 w-4 mr-1" />
                                EN/FR
                            </button>

                        </div>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden fixed inset-0 z-40">
                        <div
                            className="absolute inset-0 bg-black/50"
                            onClick={() => setMobileMenuOpen(false)}
                        ></div>

                        <div className="absolute left-0 top-0 h-full w-full bg-[#52614e] shadow-xl overflow-y-auto">

                            <div className="bg-[#52614e] text-white p-6">
                                <h1 className="text-2xl font-bold">COZYSTAY</h1>
                                <div className="flex justify-center mt-1 space-x-1">
                                    {[...Array(5)].map((_, index) => (
                                        <AiFillStar key={index} className="text-[#ba9d75] w-3 h-3 mb-8 " />
                                    ))}
                                </div>
                                <div className="border-b">
                                </div>
                            </div>

                            <div className="p-4 space-y-1">
                                {mobileNavItems.map((item) => (
                                    <div key={item.label} className=" border-white/20 last:border-b-0">
                                        <button
                                            className="flex items-center justify-between w-full text-white py-4 px-2 text-left hover:bg-white/10 rounded-lg transition-colors"
                                            onClick={() => item.hasDropdown && setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                                        >
                                            <span className="font-medium">{item.label}</span>
                                            {item.hasDropdown && (
                                                <FaChevronDown className={`h-3 w-3 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                                            )}
                                        </button>

                                        {item.hasDropdown && activeDropdown === item.label && (
                                            <div className="ml-4 space-y-2 pb-3 mobile-nav-items">
                                                {item.label === 'Dine' && (
                                                    <>
                                                        <a className="block py-2 text-white/80 text-sm hover:text-white cursor-pointer ">Fine Dining Restaurant</a>
                                                        <a className="block py-2 text-white/80 text-sm hover:text-white cursor-pointer">Bar & Lounge</a>
                                                        <a className="block py-2 text-white/80 text-sm hover:text-white cursor-pointer">Room Service</a>
                                                        <a className="block py-2 text-white/80 text-sm hover:text-white cursor-pointer">Coffee Shop</a>
                                                    </>
                                                )}
                                                {item.label === 'Play' && (
                                                    <>
                                                        <a className="block py-2 text-white/80 text-sm hover:text-white cursor-pointer">Swimming Pool</a>
                                                        <a className="block py-2 text-white/80 text-sm hover:text-white cursor-pointer">Tennis Court</a>
                                                        <a className="block py-2 text-white/80 text-sm hover:text-white cursor-pointer">Fitness Center</a>
                                                        <a className="block py-2 text-white/80 text-sm hover:text-white cursor-pointer">Entertainment</a>
                                                    </>
                                                )}
                                                {item.label === 'Relax' && (
                                                    <>
                                                        <a className="block py-2 text-white/80 text-sm hover:text-white cursor-pointer">Spa & Wellness</a>
                                                        <a className="block py-2 text-white/80 text-sm hover:text-white cursor-pointer">Yoga & Meditation</a>
                                                        <a className="block py-2 text-white/80 text-sm hover:text-white cursor-pointer">Massage Therapy</a>
                                                    </>
                                                )}
                                                {item.label === 'Pages' && (
                                                    <>
                                                        <a className="block py-2 text-white/80 text-sm hover:text-white cursor-pointer">About Us</a>
                                                        <a className="block py-2 text-white/80 text-sm hover:text-white cursor-pointer">Gallery</a>
                                                        <a className="block py-2 text-white/80 text-sm hover:text-white cursor-pointer">Contact</a>
                                                        <a className="block py-2 text-white/80 text-sm hover:text-white cursor-pointer">FAQ</a>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 border-t border-white/20">
                                <div className="mb-6">
                                    <h3 className="font-semibold text-white mb-3">CozyStay Mountain Hotel</h3>
                                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                                        Rue de Lausanne 1098,<br />
                                        1202 Genève,<br />
                                        Switzerland
                                    </p>
                                    <button className="flex items-center text-white font-medium text-sm hover:text-white/80 transition-colors cursor-pointer">
                                        <FaMapMarkerAlt className="h-4 w-4 mr-2" />
                                        VIEW ON MAP
                                    </button>
                                </div>

                                <div className="mb-6">
                                    <p className="text-white/80 text-sm">+41 22 345 67 88</p>
                                    <p className="text-white/80 text-sm">info@cozyslay.com</p>
                                </div>

                                <div className="pt-4 border-t border-white/20">
                                    <p className="text-white/60 text-xs">
                                        © Copyright CozyStay WordPress Theme for Hotel Booking.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeDropdown && ['HOME', 'STAY', 'DINE', 'PLAY'].includes(activeDropdown) && (
                    <div
                        className="absolute top-full left-0 w-full hidden lg:block"
                        style={{ pointerEvents: 'none' }}
                    >
                        <div
                            style={{ pointerEvents: 'auto' }}
                            onMouseEnter={() => setActiveDropdown(activeDropdown)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            {activeDropdown === 'HOME' && <DropHome />}
                            {activeDropdown === 'STAY' && <DropStay />}
                            {activeDropdown === 'DINE' && <DropDine />}
                            {activeDropdown === 'PLAY' && <DropPlay />}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navigation;