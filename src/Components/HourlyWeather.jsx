import React, { useContext } from "react";
import { Context } from "../context/countrycontext";
import { Moon, Sun, Droplets } from "lucide-react";

function HourlyWeather() {
  const { forecastData } = useContext(Context);

  const convertTo12HourFormat = (time) => {
    const [hour, minute] = time.split(":");
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute} ${ampm}`;
  };

  return (
    <div className="container mx-auto max-w-screen-2xl ">
      <h2 className="text-center text-xl font-bold mb-4">Hourly Weather Report</h2>
      <div className="flex w-4/5 mx-auto p-2 overflow-x-auto scroll-smooth items-center space-x-2 hover:scale-110 transition-all duration-150 delay-100 ">
        {forecastData.slice(0, 10).map((item, index) => (
          <div key={index} className="flex flex-col items-center p-2 bg-white/20 rounded-lg min-w-[100px] shadow-md space-y-2 cursor-pointer hover:scale-110 transition-all duration-300">
            <p className="text2 font-bold">{convertTo12HourFormat(item.dt_txt.split(" ")[1])}</p>
            {item.sys.pod === "n" ? (
              <Moon className="text-gray-400 lg:h-12 lg:w-12 h-6 w-6" />
            ) : (
              <Sun className="text-orange-400 lg:h-12 lg:w-12 h-6 w-6" />
            )}
            <p className="hourly-temp font-bold">{Math.floor(item.main.temp)}&deg;</p>
            <p className="text2 flex">
              <Droplets className="text-blue-500 mr-1 lg:h-6 lg:w-6 h-3 w-3" />
              {item.main.humidity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyWeather;
