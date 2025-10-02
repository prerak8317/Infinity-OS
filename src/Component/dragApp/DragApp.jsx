import React, { useState } from "react";
import { Rnd } from "react-rnd";
import calculater from "../../images/calculator.webp";
import toDo from "../../images/to-do-list.png";
import Watch from "../../images/stop-watch.png";
import ApplicationIcon from "../ApplicationIcon.jsx";
import maxi from "./maximize.png";
import mini from "./minimize-sign.png";
function DragApp() {
  const [active, setActiveApp] = useState(null);
  const [maximize, setMaximize] = useState(false);

  return (
    <>
      <div className="relative z-20 p-3 ml-5 w-fit">
        <div className="w-full h-full ">
          <ApplicationIcon
            icon={Watch}
            title="Stop Watch"
            onClick={() =>
              setActiveApp("https://stop-watch-eight-gules.vercel.app/")
            }
          />
        </div>
        <div className="w-full h-full ">
          <ApplicationIcon
            icon={calculater}
            title="Calculator"
            onClick={() =>
              setActiveApp("https://calculator-ruddy-eight-55.vercel.app/")
            }
          />
        </div>
        <div className="w-full h-full">
          <ApplicationIcon
            icon={toDo}
            title="To-Do List"
            onClick={() =>
              setActiveApp("https://to-do-list-rosy-five-11.vercel.app/")
            }
          />
        </div>
      </div>
      {active && (
        <Rnd
          default={{
            x: 100,
            y: 100,
            width: 800,
            height: 500,
          }}
          size={{
            width: maximize ? "100vw" : 800,
            height: maximize ? "100vh" : 500,
          }}
          position={{
            x: maximize ? 0 : 100,
            y: maximize ? 0 : 100,
          }}
          disableDragging={maximize}
          bounds="window"
          minWidth={300}
          minHeight={200}
          style={{
            zIndex: active ? 9999 : 1,
            position: "absolute",
            border: "1px solid #ccc",
            background: "#1a1a2e",
            color: "#fff",
          }}
        >
          <div className=" w-full h-full bg-white rounded-xl shadow-lg border border-gray-400 z-30 flex flex-col">
            {/* Header */}
            <div className="window-header flex justify-between items-center bg-gray-200 px-3 py-2 cursor-move">
              <span className="font-bold text-gray-700">App Window</span>
              <div className="flex items-center justify-center gap-2 ">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md "
                  onClick={() => setActiveApp(null)}
                >
                  <img src={mini} alt="" className="w-3 h-6" />
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-2.5 rounded-md "
                  onClick={() => setMaximize((prev) => !prev)}
                >
                  <img src={maxi} alt="" className="w-3 " />
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                  onClick={() => setActiveApp(null)}
                >
                  X
                </button>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <iframe
                src={active}
                className="w-full h-full border-0"
                title="App Frame"
              />
            </div>
          </div>
        </Rnd>
      )}
    </>
  );
}

export default DragApp;
