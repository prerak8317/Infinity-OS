import React, { useState, useEffect } from "react";
import { FaWifi } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";

function TimeDate() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white flex justify-center items-center ">
      <div className="flex gap-3 cursor-pointer hover:bg-gray-500/30 transition-all px-3 py-2">
        <FaWifi size={20} />
        <FaVolumeUp size={20} />
        <CiBatteryFull size={20} />
      </div>
      <div className="flex flex-col items-end cursor-pointer hover:bg-gray-500/30 transition-all px-4 py-2">
        <p className="text-[12px]">{time.toLocaleTimeString()}</p>
        <p className="text-[12px]">{time.toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default TimeDate;
