import React, { useState, useEffect } from "react";

export default function Images() {
  const suites = [
    { id: 1, image: "/images/room3.avif" },
    { id: 2, image: "/images/res2.avif" },
    { id: 3, image: "/images/room6.avif" },
    { id: 4, image: "/images/res3.avif" },
    { id: 5, image: "/images/spa.avif" },
    { id: 5, image: "/images/res1.avif" },
    { id: 5, image: "/images/room5.avif" },
  ];

  const [columns, setColumns] = useState(7);

  // Responsive handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setColumns(4);
      else if (window.innerWidth < 1024) setColumns(5);
      else setColumns(7);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full flex flex-col items-center text-center">
      <div
        className="relative w-full max-w-8xl mt-20 grid"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {suites.map((suite) => (
          <div key={suite.id}>
            <img
              src={suite.image}
              alt="suite"
              className="w-full h-[280px] md:h-[300px] shadow object-cover "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
