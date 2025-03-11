import React, { useState, useEffect, useContext } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area } from "recharts";
import { Context } from "../context/countrycontext";
import { useApi } from "../Hooks/useApi";
import { useParams } from "react-router-dom";

const WeatherGraph = () => {
  const [chartData, setChartData] = useState([]);
  const { country, setForecastData } = useContext(Context);
  const { place: paramPlace } = useParams();
  const place = paramPlace || country;
  const weatherData = useApi(
    `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=8f57d43c2ffe58344b589f66e74c8fac&units=metric`
  );

  useEffect(() => {
    if (!weatherData?.list) return;

    setForecastData(weatherData.list);
    setChartData(
      weatherData.list.map((entry) => ({
        time: new Date(entry.dt * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        temperature: (entry.main.temp * 9) / 5 + 32, 
      }))
    );
  }, [weatherData?.list, setForecastData]);

  return (
    <div className="flex justify-center items-center container mx-auto max-w-screen-2xl">
      <div className="flex w-5/6 bg-white/20 rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer p-4">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="time" stroke="black" strokeWidth={2} />
            <YAxis
              domain={["auto", "auto"]}
              label={{ value: "°F", angle: -90, position: "insideLeft" }} 
              stroke="black"
              strokeWidth={2}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="temperature"
              stroke="#92be32"
              fill="rgba(209, 196, 16, 0.5)"
              fillOpacity={0.3}
            />
            <Line type="monotone" dataKey="temperature" stroke="#b6511f" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeatherGraph;
