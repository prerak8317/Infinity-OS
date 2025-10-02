import { useEffect, useState } from "react";
import Img404 from "./imagesWeather/clear.png";

function Weather() {
  const [weatherData, setWeatherData] = useState(false);

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData({
        temp: data.main.temp,
        feel: data.weather[0].main,
      });
    } catch (error) {}
  };
  useEffect(() => {
    search("Delhi");
  }, []);
  return (
    <div className="flex w-full">
      <div className="flex items-center justify-between w-full cursor-pointer hover:bg-gray-500/30 transition-all px-3 py-2">
        <div className="flex items-center">
          <img src={Img404} alt="" className="w-[25%]" />
          <div className="ml-2">
            <p className="text-[12px]">{weatherData.temp}</p>
            <p className="text-[12px]">{weatherData.feel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
