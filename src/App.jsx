import { useState } from "react";
import BottomNav from "./Component/bottomNav/BottomNav";
import DragApp from "./Component/dragApp/DragApp";
import bgImg from "./images/bg.webp";

function App() {
  return (
    <>
      <div className="relative h-screen w-full">
        <img
          src={bgImg}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ pointerEvents: "none" }}
        />

        <div className="absolute top-0 left-0 w-full z-20 flex justify-center mt-8">
          <h1 className="text-white text-3xl font-bold drop-shadow-lg">
            INFINITY
          </h1>
        </div>

        <DragApp />
        <BottomNav />
      </div>
    </>
  );
}

export default App;
