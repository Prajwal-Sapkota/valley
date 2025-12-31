import React, { useState, useEffect } from "react";

export default function Images() {
  const suites = [
    { id: 1, image: "/images/res8.avif" },
    { id: 2, image: "/images/deluxe.jpeg" },
    { id: 3, image: "/images/res7.avif" },
    { id: 4, image: "/images/wellness.avif" },
    { id: 5, image: "/images/spa.avif" },
    { id: 7, image: "/images/chitwannp.jpg" },
  ];

  const [columns, setColumns] = useState(6);

  // Responsive handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setColumns(3);
      else setColumns(6);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full flex flex-col items-center text-center ">
      <div
        className="relative w-full max-w-8xl mt-10 sm:mt-16 md:mt-20 grid"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {suites.map((suite) => (
          <div key={suite.id} className="overflow-hidden">
            <img
              src={suite.image}
              alt="Moonlit Resort"
              className="w-full h-[140px] xs:h-[150px] sm:h-[160px] md:h-[200px] lg:h-[240px] xl:h-[280px] 2xl:h-[300px] shadow object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}