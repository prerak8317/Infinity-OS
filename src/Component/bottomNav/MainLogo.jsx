import React from "react";
import logo from "../../images/main-logo.png";

function MainLogo() {
  return (
    <div className="flex items-center justify-center">
      <img
        src={logo}
        alt="logo"
        className="w-[50px] cursor-pointer hover:bg-gray-500/30 transition-all py-1"
      />
      <input type="text" className="rounded-full w-[300px] h-[30px] ml-2 p-4" />
    </div>
  );
}

export default MainLogo;
