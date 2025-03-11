import React, { useState, useEffect, useContext } from 'react';
import { 
  Moon, 
  ChevronDown, 
  ChevronUp, 
  Wind, 
  Compass,
  Droplets,
  Gauge,
  Eye,
  Sunrise,
  Sunset
} from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Context } from '../context/countrycontext';
import { useApi } from '../Hooks/useApi';

function WeatherCard() {
  const [expanded, setExpanded] = useState(false);
  const { country, setPlace, setCurrentWeather, currentWeather } = useContext(Context);
  const { place: paramPlace } = useParams(); 
  const place = paramPlace || country; 
  const todayWeather = useApi(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=8f57d43c2ffe58344b589f66e74c8fac&units=metric`);
  
  useEffect(() => {
    if (todayWeather) {
      console.log("New weather data:", todayWeather);
      setCurrentWeather((prev) => {
        const updatedWeather = [...prev, todayWeather];
        console.log("Updated state:", updatedWeather);
        return updatedWeather;
      });
    }
  }, [todayWeather]);
 
  useEffect(() => {
    if (paramPlace) {
      setPlace(paramPlace);
    }
  }, [paramPlace, setPlace]);
  
  return (
    todayWeather && (
      <div className="container max-w-screen-2xl mx-auto flex justify-center  ">
        <div className="bg-white/20 rounded-lg shadow-sm border border-gray-200 overflow-hidden w-5/6 hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white/10">
            <h1 className="text1 font-medium text-gray-800 uppercase tracking-wide">Current Weather</h1>
            <h2 className="text2 font-semibold text-gray-800">
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
            </h2>
          </div>
  
          <div className="p-6 flex flex-col md:flex-row lg:gap-8 gap-4">
            <div className="flex-1">
              <div className="flex items-start lg:gap-4 gap-2">
                <Moon className="text-gray-700 w-16 h-16" strokeWidth={1.5} />
                <div>
                  <div className="flex items-start">
                    <span className="heading text-gray-900">{todayWeather.main.temp}</span>
                    <span className="text-2xl text-gray-800 mt-1">&deg;</span>
                  </div>
                  <p className="text-gray-800 mt-1 text1">{`Feels Like ${todayWeather.main.feels_like}`}</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text2 font-semibold text-gray-800">CLEAR</h3>
                <button 
                  onClick={() => setExpanded(!expanded)}
                  className="mt-2 text1 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {expanded ? 'Show Less' : 'More Details'}
                  {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </div>
  
            <div className="flex-1 text1">
              <div className="lg:space-y-4 space-y-2">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Wind size={18} className="text-blue-500" />
                    <span className="text-gray-800">Wind</span>
                  </div>
                  <span className="font-medium text-gray-800">{`SSE ${todayWeather.wind.speed} mph`}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2">
                    <Compass size={18} className="text-blue-500" />
                    <span className="text-gray-800">Wind Gusts</span>
                  </div>
                  <span className="font-medium text-gray-800">14 mph</span>
                </div>
              </div>
            </div>
          </div>
  
          {/* Expanded Section */}
          {expanded && (
            <div className="bg-white/10 p-6 border-t border-gray-100 text1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Droplets size={18} className="text-blue-500" />
                    <span className="text-gray-800">Humidity</span>
                  </div>
                  <span className="font-medium text-gray-800">{todayWeather.main.humidity}%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Gauge size={18} className="text-blue-500" />
                    <span className="text-gray-800">Pressure</span>
                  </div>
                  <span className="font-medium text-gray-800">{todayWeather.main.pressure} hPa</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye size={18} className="text-blue-500" />
                    <span className="text-gray-800">Visibility</span>
                  </div>
                  <span className="font-medium text-gray-800">{todayWeather.visibility} km</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sunrise size={18} className="text-orange-500" />
                    <span className="text-gray-800">Sunrise</span>
                  </div>
                  <span className="font-medium text-gray-800">{new Date(todayWeather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sunset size={18} className="text-purple-500" />
                    <span className="text-gray-800">Sunset</span>
                  </div>
                  <span className="font-medium text-gray-800">{new Date(todayWeather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
}

export default WeatherCard;
