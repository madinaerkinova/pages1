import React, { useEffect, useState } from "react";

const CustomCounter = ({ end, duration }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 100);

    const mainTimer = setInterval(() => {
      start += increment;
      setCurrentCount(Math.min(Math.floor(start), end));

      if (start >= end * 0.8) {
        clearInterval(mainTimer);
        setTimeout(() => {
          const slowIncrementTimer = setInterval(() => {
            start += increment * 0.2;
            setCurrentCount(Math.min(Math.floor(start), end));
            if (start >= end) {
              clearInterval(slowIncrementTimer);
            }
          }, 100);
        }, 100);
      }

      if (start >= end) {
        clearInterval(mainTimer);
      }
    }, 100);

    return () => clearInterval(mainTimer);
  }, [end, duration]);

  return (
    <div className="custom-counter mb-1 text-[120px] font-bold leading-[96px] text-[#1b5bf7]">
      {currentCount}+
    </div>
  );
};

export default CustomCounter;
