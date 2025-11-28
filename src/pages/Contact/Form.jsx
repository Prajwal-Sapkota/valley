import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 mb-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Left Side - Big Image */}
                    <div className="relative lg:w-[120%] max-w-none">
                        <img
                            src="/images/contact4.avif"
                            alt="Contact Us"
                            className="w-full h-[400px] lg:h-[650px] object-cover shadow-lg"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>


                    {/* Right Side - Content and Form */}
                    <div className="flex flex-col justify-center lg:ml-20">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h5 className="text-xs sm:text-sm text-[#ba9d75] font-medium uppercase mb-4 tracking-wider">
                                CONTACT US TO GET MORE DETAILS
                            </h5>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black uppercase mb-4">
                                LET'S START A CONVERSATION
                            </h2>
                            <div className="space-y-2">
                                <h1 className="text-lg text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cumsociis natoque.
                                </h1>
                               
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form id="form1" onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#ba9d75] focus:border-[#ba9d75] transition-colors"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#ba9d75] focus:border-[#ba9d75] transition-colors"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#ba9d75] focus:border-[#ba9d75] transition-colors resize-vertical"
                                    placeholder="Your Message"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button id="discover"
                                    type="submit"
                                    className="bg-[#ba9d75] text-white px-12 py-4 font-semibold uppercase tracking-wider hover:bg-[#ab916c] transition-colors duration-300 border border-[#ba9d75] w-full sm:w-auto"
                                >
                                    Send Your Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;