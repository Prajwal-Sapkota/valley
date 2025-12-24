import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaCcVisa, FaCcMastercard, FaPaypal, FaPinterest } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { SiStripe } from "react-icons/si";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Subscribed:", email);
        setEmail("");
    };

    return (
        <footer className="bg-[#121212] text-white py-12">
            <div className="max-w-8xl px-24">

                <div className="grid gap-24 md:grid-cols-3 mb-20">

                    {/* LEFT */}
                    <div className="text-left">
                        <h3 className="text-2xl md:text-3xl font-normal text-white mb-6">Moonlit Resort Pvt. Ltd.</h3>
                        <p className="text-gray-300 text-md leading-relaxed font-normal">
                            A luxury jungle resort near Chitwan National Park, offering authentic Nepali warmth with international hospitality standards.
                        </p>

                        <div className="flex items-center space-x-4 mt-4 text-3xl text-white">
                            <FaPaypal className="cursor-pointer" />
                            <FaCcMastercard className="cursor-pointer" />
                            <FaCcVisa className="cursor-pointer" />
                            <SiStripe className="cursor-pointer" />
                        </div>
                    </div>

                    {/* CENTER */}
                    <div className="text-left">
                        <h3 className="text-xl font-normal text-white mb-3">
                            Reach Out
                        </h3>

                        <ul className="text-gray-300 space-y-2 text-sm font-normal py-2">
                            <li>
                                <a
                                    href="mailto:moonlitresort8@gmail.com"
                                    className="cursor-pointer hover:text-white transition"
                                >
                                    Email: moonlitresort8@gmail.com
                                </a>
                            </li>

                            <li>
                                <a
                                    href="tel:+9779804161233"
                                    className="cursor-pointer hover:text-white transition"
                                >
                                    Tel: +977 9804161233
                                </a>
                            </li>

                            <li >
                                Address: Jagatpur, Dhrubaghat, Bharatpur -23, Chitwan
                            </li>
                        </ul>


                        <button

                            className="py-4 text-white relative inline-block  transition group cursor-pointer font-medium"
                        >
                            GET DIRECTIONS
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#D4B68F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                        </button>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col items-start">
                        <div className="w-full max-w-2xl md:text-left">

                            <h3 className="text-lg font-normal text-white mb-3">
                                Sign Up for Newsletter
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex w-full border-b border-gray-700">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 px-3 py-2 bg-transparent focus:outline-none"
                                        required
                                    />

                                    <button

                                        className="bg-transparent text-white hover:text-yellow-100 px-4 transition flex items-center gap-2 cursor-pointer font-normal"
                                    >
                                        Subscribe
                                        <GrSend className="text-2xl" />
                                    </button>
                                </div>

                                <a className="flex items-center space-x-2 text-sm text-gray-300 font-normal">
                                    <input
                                        type="checkbox"
                                        checked={agree}
                                        onChange={(e) => setAgree(e.target.checked)}
                                        className="w-4 h-4 cursor-pointer"
                                    />
                                    <span className="cursor-pointer font-normal">I agree to the Privacy Policy</span>
                                </a>
                            </form>

                            {/* SOCIAL ICONS */}
                            <div className="mt-8 flex space-x-4">
                                <span className="text-md font-normal text-white mb-3">Stay Connected:</span>

                                <a href="#" className="w-5 h-5 flex items-center justify-center hover:text-[#D4B68F] transition cursor-pointer">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="w-5 h-5 flex items-center justify-center hover:text-[#D4B68F] transition cursor-pointer">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="w-5 h-5 flex items-center justify-center hover:text-[#D4B68F] transition cursor-pointer">
                                    <FaPinterest />
                                </a>
                                <a href="#" className="w-5 h-5 flex items-center justify-center hover:text-[#D4B68F] transition cursor-pointer">
                                    <FaLinkedinIn />
                                </a>
                                <a href="#" className="w-5 h-5 flex items-center justify-center hover:text-[#D4B68F] transition cursor-pointer">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM */}
                <div id="bottom" className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">

                    <div className="flex gap-10 text-sm text-gray-300 mb-4 md:mb-0">
                        <a href="#" className="hover:text-[#D4B68F] transition cursor-pointer">PRIVACY</a>
                        <a href="#" className="hover:text-[#D4B68F] transition cursor-pointer">TERMS</a>
                        <a href="#" className="hover:text-[#D4B68F] transition cursor-pointer">POLICY</a>
                    </div>

                    <p className="text-gray-400 text-sm text-center">
                        © 2025 Moonlit Resort . All rights reserved. Crafted by S.A I.T Solution Nepal
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
