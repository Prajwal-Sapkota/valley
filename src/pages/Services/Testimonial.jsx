import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { GiCoffeeCup, GiHotMeal } from 'react-icons/gi';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            text: "The hotel is well located. Rooms are very clean. Great services. Very kind people from front desk and delicious breakfast. And I really love the spa!",
            rating: 5,
            author: "Sophie Laurier",
            source: "TRIPADVISOR"
        },
        {
            id: 2,
            text: "Absolutely stunning location with breathtaking mountain views. The staff went above and beyond to make our anniversary special. The spa treatments were exceptional and the dining experience was unforgettable.",
            rating: 4,
            author: "Michael Chen",
            source: "BOOKING.COM"
        },
        {
            id: 3,
            text: "Perfect family vacation spot! The kids loved the activities and we appreciated the peaceful atmosphere. The rooms were spacious and the service was impeccable. We can't wait to return next year.",
            rating: 5,
            author: "The Rodriguez Family",
            source: "GOOGLE REVIEWS"
        }
    ];

    const [current, setCurrent] = useState(0);

    // Auto-loop testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Render stars
    const renderStars = (rating) => (
        Array.from({ length: 5 }, (_, i) => (
            <FaStar
                key={i}
                className={`${i < rating ? 'text-[#ba9d75]' : 'text-gray-300'} inline-block mx-1`}
                size={20}
            />
        ))
    );

    const goToTestimonial = (index) => {
        setCurrent(index);
    };

    return (
        <section
            className="relative flex items-center justify-center bg-cover bg-center "
            style={{
                minHeight: '700px',
                backgroundImage: 'url("/images/chitwannp.jpg")',
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Container */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center relative">
                    {/* Testimonials */}
                    <div className="min-h-[400px] flex items-center justify-center">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`absolute transition-all duration-500 ease-in-out max-w-4xl mx-auto ${index === current
                                        ? 'opacity-100 '
                                        : 'opacity-0  pointer-events-none'
                                    }`}
                            >

                                <div id='icon' className="flex justify-center items-center h-full">
                                    <GiHotMeal className="text-[#ba9d75]" size={64} />
                                </div>

                                {/* Testimonial Text */}
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal text-white leading-relaxed py-4 px-4">
                                    "{testimonial.text}"
                                </h2>

                                <div id='stars' className=" flex justify-center">
                                    {renderStars(testimonial.rating)}
                                </div>

                                {/* Author Info */}
                                <div className="text-white py-4 ">
                                    <h3 className="text-xl font-normal">
                                        {testimonial.author}
                                    </h3>
                                    <span className="text-sm text-gray-300 uppercase tracking-widest font-normal">
                                        {testimonial.source}
                                    </span>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center space-x-3 mt-16">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current
                                        ? 'bg-[#ba9d75] scale-125'
                                        : 'bg-white bg-opacity-50 hover:bg-opacity-70'
                                    }`}
                                aria-label={`View testimonial from ${testimonials[index].author}`}
                            />
                        ))}
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Testimonial;