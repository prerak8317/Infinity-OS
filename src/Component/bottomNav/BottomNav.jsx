import React from "react";
import Weather from "./Weather";
import MainLogo from "./MainLogo";
import TimeDate from "./TimeDate";

function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-12 bg-gradient-to-r from-[#2c003e] via-[#3b0a45] to-[#1a0b2e]  flex items-center justify-between px-4 z-50">
      <div className="w-[10%]  text-white py-2">
        <Weather />
      </div>
      <MainLogo />
      <TimeDate />
    </div>
  );
}

export default BottomNav;
