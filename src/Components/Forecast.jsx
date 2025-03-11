import React, { useEffect, useState } from 'react';
import { Sun, Moon, Droplets, Wind } from 'lucide-react';
import { Context } from '../context/countrycontext';
import { useContext } from 'react';
import axios from 'axios';

function ForecastDay({ main, weather, sys, dt_txt }) {
  const date = new Date(dt_txt);
  const day = date.toLocaleDateString('en-US', { weekday: 'short' });
  const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  
  const isNight = sys.pod === "n";
  
  return (
    <div className=' min-w-[500px] w-full py-4 px-2 border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200'>
      <div className="flex items-center justify-between cursor-pointer">
        <div className="flex items-center lg:space-x-6 ">
          <div className="">
            <h2 className='font-semibold text-gray-800 text2'>{day}</h2>
            <p className='text-gray-500 text2'>{formattedDate}</p>
          </div>
          
          <div className="flex items-center ">
            {isNight 
              ? <Moon className='lg:h-8 lg:w-8 h-5 w-5 text-indigo-400 mr-3' /> 
              : <Sun className='lg:h-8 lg:w-8 h-5 w-5 text-yellow-500 mr-3' />
            }
            <div>
              <div className="flex items-baseline">
                <span className='heading font-bold text-gray-800'>{Math.round(main.temp)}°</span>
                <span className='text2 text-gray-500 ml-2'>{Math.round(main.feels_like)}°</span>
              </div>
              <p className='text2 text-gray-600'>Feels like</p>
            </div>
          </div>
        </div>
        
        <div className="min-w-[100px] mx-6  text1">
          <p className='font-medium text-gray-800 capitalize'>{weather[0].description}</p>
          <p className=' text-gray-500'>
            {isNight ? 'Night' : 'Day'}: {weather[0].main}
          </p>
        </div>
        
        <div className="flex items-center justify-end space-x-6 w-1/3 ">
          <div className="flex items-center">
            <Droplets className='lg:h-5 lg:w-5 w-3 h-3 text-blue-500 mr-2' />
            <div>
              <p className='font-medium text-gray-800 text2'>{main.humidity}%</p>
              <p className='text1 text-gray-500'>Humidity</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Wind className='lg:h-5 lg:w-5 w-3 h-3 text-teal-500 mr-2' />
            <div>
              <p className='font-medium text-gray-800 text2'>{main.pressure}</p>
              <p className='text1 text-gray-500'>Pressure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Forecast() {
  const { country, stateWeather, setForecastData, forecastData: contextForecastData } = useContext(Context);
  const [localForecastData, setLocalForecastData] = useState([]);
  
  useEffect(() => {
    const fetchForecastData = async () => {
      if (stateWeather.length > 0) {
        try {
          const cityName = stateWeather[0].name;
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=8f57d43c2ffe58344b589f66e74c8fac&units=metric`
          );
          
          if (response.data && response.data.list) {
            setLocalForecastData(response.data.list);
            setForecastData(response.data.list);
          }
        } catch (error) {
          console.error("Error fetching forecast data:", error);
        }
      }
    };
    
    fetchForecastData();
  }, [stateWeather, setForecastData]);
  
  const displayData = contextForecastData.length > 0 ? contextForecastData : localForecastData;
  
  const uniqueDays = [];
  const seenDates = new Set();
  
  const dailyForecasts = displayData.filter(item => {
    if (!item || !item.dt_txt) return false;
    
    const date = item.dt_txt.split(" ")[0];
    if (!seenDates.has(date)) {
      seenDates.add(date);
      uniqueDays.push(item);
      return true;
    }
    return false;
  });

  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-8  w-full flex justify-center ">
      <div className="bg-white/40 rounded-lg shadow-sm border border-gray-100 w-5/6 hover:scale-110 transtion-all duration-150 ">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">5-Day Weather Forecast</h2>
          <p className="text-gray-500 text-sm">Daily weather predictions for the upcoming days</p>
        </div>
        
        <div className="divide-y divide-gray-100  scroll-smooth overflow-x-auto ">
          {dailyForecasts.length > 0 ? (
            dailyForecasts.map((item, index) => (
              <ForecastDay 
                key={index} 
                main={item.main} 
                weather={item.weather} 
                sys={item.sys} 
                dt_txt={item.dt_txt}
              />
            ))
          ) : (
            <div className="p-6 text-center text-gray-500">
              Loading forecast data...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Forecast;