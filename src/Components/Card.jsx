import React from 'react';
import { 
  Wind, 
  Compass, 
  Sunset, 
  Sunrise, 
  Droplets,
  Sun,
  CloudSun,
  Thermometer,
  MapPin,
  Eye,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Card(props) {
  const navigate=useNavigate()
  return (
    <div className="min-w-[280px] lg:min-w-[320px] bg-white rounded-lg shadow-md lg:p-6 p-4">
      <div className="flex justify-between items-start lg:mb-6 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={18} className="text-gray-600" />
            <h2 className="text-gray-700 font-medium text1">{props.name}</h2>
          </div>
          <div className="flex items-center gap-3">
            <Thermometer  className="text-gray-600 lg:h-6 lg:w-6 h-4 w-4" />
            <span className="heading font-bold text-gray-800">{Math.floor(props.temp)}°C</span>
          </div>
        </div>
        
        <div className="text-right">
          <CloudSun  className="text-gray-600 mb-2 ml-auto lg:h-7 lg:w-7 h-5 w-5" />
          <div className="space-y-2">
            <div className="flex items-center gap-2 justify-end">
              <Wind  className="text-gray-600 lg:h-5 lg:w-5 h-3 w-3" />
              <span className="text3 text-gray-600">SE {props.windspeed} mph</span>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <Compass className="text-gray-600 lg:h-5 lg:w-5 h-3 w-3" />
              <span className="text3 text-gray-600">{props.direction} </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text3 mb-6 flex items-center gap-2">
        <Sun size={16} className="text-gray-600" />
        Generally clear. Hazy. High 31°C. Winds SE and variable.
      </p>

      <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4 text3">
        <div className="flex items-center gap-3">
          <Droplets size={18} className="text-blue-500" />
          <div>
            <p className=" text-gray-500">Humidity</p>
            <p className="text-gray-700">{props.humidity}%</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Sun size={18} className="text-orange-500" />
          <div>
            <p className=" text-gray-500">UV Index</p>
            <p className="text-gray-700">9 of 11</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Sunrise size={18} className="text-amber-500" />
          <div>
            <p className=" text-gray-500">Sunrise</p>
            <p className="text-gray-700">
              {new Date(props.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Sunset size={18} className="text-purple-500" />
          <div>
            <p className=" text-gray-500">Sunset</p>
            <p className="text-gray-700">
              {new Date(props.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>
      </div>

      <button className="mt-4 text3 text-gray-600 hover:text-gray-800 ml-auto flex items-center gap-1 hover:underline hover:scale-110 transition-all duration-150 cursor-pointer" onClick={()=>navigate(`./${props.name}`)}>
        See detailed forecast
        <ArrowRight  className='lg:h-4 lg:w-4 h-2 w-2' />
      </button>
    </div>
  );
}
export default Card