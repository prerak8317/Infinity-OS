import React from "react";


function ApplicationIcon({ icon, title, onClick }) {
  return (
    <div
      className="w-[60px] cursor-pointer hover:bg-blue-500/30 transition-all p-2 flex flex-col justify-center items-center"
      onClick={onClick}
    >
      <img src={icon} alt="" />
      <p className="text-white text-center text-[10px] pt-2 font-bold">
        {title}
      </p>
     
    </div>
  );
}

export default ApplicationIcon;
