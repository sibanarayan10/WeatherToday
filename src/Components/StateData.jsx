import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../context/countrycontext';
import { Cloud, Wind, Thermometer } from 'lucide-react';

function StateData() {
  const [stateList, setStateList] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const { country, setStateWeather } = useContext(Context);

  useEffect(() => {
    async function getStateFromCountry(country) {
      try {
        const response = await fetch(`http://api.geonames.org/searchJSON?q=${country}&maxRows=1&username=Sibanarayan`);
        const data = await response.json();
        if (data?.geonames?.length > 0) {
          const geonameId = data.geonames[0].geonameId;

          const statesResponse = await fetch(`http://api.geonames.org/childrenJSON?geonameId=${geonameId}&username=Sibanarayan`);
          const statesData = await statesResponse.json();

          if (statesData?.geonames?.length > 0) {
            setStateList(statesData.geonames.map((item) => item.name));
          } else {
            console.log("No states/regions found for", country);
          }
        } else {
          console.log("Country not found");
        }
      } catch (error) {
        console.error("Error fetching data from Geonames:", error);
      }
    }
    if (country) {
      getStateFromCountry(country);
    }
  }, [country]);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const promises = stateList.map(async (item) => {
          try {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${item}&appid=8f57d43c2ffe58344b589f66e74c8fac&units=metric`
            );
            const { main, wind, weather, name, sys } = response.data;
            return { main, wind, weather, name, sys };
          } catch (error) {
            console.error(`Error fetching weather for ${item}:`, error);
            return null;
          }
        });

        const results = await Promise.all(promises);
        setWeatherData(results.filter(data => data !== null));
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (stateList.length > 0) {
      getWeatherData();
    }
  }, [stateList]);

  setStateWeather(weatherData);

  return (
    false&&<div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weatherData.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <div className="flex items-center mt-2">
                <img 
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} 
                  alt="Weather Icon" 
                  className="w-16 h-16 -ml-4"
                />
                <span className="text-3xl font-bold text-gray-800 ml-2">
                  {Math.round(item.main.temp)}°C
                </span>
              </div>
            </div>
            
            <div className="px-6 py-4">
              <div className="flex items-center justify-between text-gray-600 mb-3">
                <div className="flex items-center">
                  <Cloud className="w-4 h-4 mr-2" />
                  <span className="capitalize">{item.weather[0].description}</span>
                </div>
              </div>
              
              <div className="flex justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Thermometer className="w-4 h-4 mr-2" />
                  <span>Feels like {Math.round(item.main.feels_like)}°C</span>
                </div>
                <div className="flex items-center">
                  <Wind className="w-4 h-4 mr-2" />
                  <span>{item.wind.speed} m/s</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StateData;