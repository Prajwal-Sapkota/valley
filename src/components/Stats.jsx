import React, { useState, useEffect } from 'react';

const Stats = () => {
  const statsData = [
    { value: 350, suffix: '+', description: 'WILDLIFE SPECIES' },
    { value: 120, suffix: 'KM', description: 'JUNGLE TRAILS' },
    { value: 50, suffix: '+', description: 'CANOPY WALKWAYS' }
  ];


  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      const increment = Math.ceil(stat.value / 100);
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] += increment;
            if (newCounts[index] > stat.value) newCounts[index] = stat.value;
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="bg-transparent py-16 relative z-30"> 
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center ">
              
              <h2 id='count' className="text-3xl md:text-5xl font-normal text-white mb-2 drop-shadow-lg">
                {counts[index]}
                <span className=" ml-1">{stat.suffix}</span>
              </h2>
              <span className="text-sm md:text-sm text-white uppercase drop-shadow-lg font-medium tracking-wider">
                {stat.description}
              </span>
              <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-transparent via-[#bfa682] to-transparent mx-auto opacity-60"></div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;