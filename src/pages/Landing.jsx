import React, { useContext, useState, useEffect } from "react";

import WeatherGraph from "../Components/WeatherGraph";
import WeatherCard from "../Components/WeatherCard";

import Search from "../Components/Search";
import NewsCard from "../Components/NewsCard";
import HourlyWeather from "../Components/HourlyWeather";
import Forecast from "../Components/Forecast";
import { Context } from "../context/countrycontext";

function Landing() {
  const { place } = useContext(Context);

  const backgroundImages = [
    "weather2bg.jpg",
    "weatherbg.jpg",
    "weather1.jpg",
    "weather2.jpg",
    "weather4.jpg",

  ];

  const [bg, setBg] = useState(backgroundImages[1]);

  useEffect(() => {
    const changeBackground = () => {
      const randomBgIndex = Math.floor(Math.random() * backgroundImages.length);
      setBg(backgroundImages[randomBgIndex]);
    };

    const interval = setInterval(changeBackground, 7000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div
      className={`container mx-auto max-w-screen-2xl shadow-inner bg-cover bg-center h-screen max-h-[1000px] flex items-center transition-all duration-1000`}
      style={{ backgroundImage: `url('./${bg}')` }}
    >
      <div className="flex lg:flex-row flex-col items-center scroll-smooth overflow-y-auto max-h-[800px] h-screen w-screen justify-center">
        <Search />
        {place && (
          <div
            className={`lg:w-3/5 w-full flex flex-col space-y-6 scroll-smooth overflow-y-auto max-h-[800px] h-screen 
            ${place ? "translate-x-0 opacity-100" : "translate-x-50 opacity-0"} 
            transition-all ease-in-out duration-300 delay-150 py-6`}
          >
            <WeatherCard />
            <WeatherGraph />
            <HourlyWeather />
            <Forecast />
            <NewsCard />
          </div>
        )}
      </div>
    </div>
  );
}

export default Landing;
