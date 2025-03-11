import React from 'react';
import { ChevronRight, Sun, Facebook, Twitter } from 'lucide-react';
import { useContext } from 'react';
import { Context } from '../context/countrycontext';


const Footer = () => {
  const{country,place}=useContext(Context);
  return (
    <footer className="max-w-[1000px] container mx-auto bg-slate-300 mt-12">
      <div className="w-full bg-gray-50 py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text1 text-gray-600">
            <span>World</span>
            <ChevronRight size={16} />
           
            
            <span>{country||place}</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 text1 text-gray-600">
            <span className="font-medium">Weather Near {country||place}:</span>
            <span>{country||place}</span>
           
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className='text1'>
            <h3 className="text-gray-500 font-medium mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Proven Superior Accuracy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">About AccuWeather</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Digital Advertising</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Press</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>

          <div className='text1'>
            <h3 className="text-gray-500 font-medium mb-4">PRODUCTS & SERVICES</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-blue-600">For Business</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">For Partners</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">For Advertising</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">AccuWeather APIs</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">AccuWeather Connect</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">RealFeel® and RealFeel Shade™</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Personal Weather Stations</a></li>
            </ul>
          </div>

          <div className='text1'>
            <h3 className="text-gray-500 font-medium mb-4">APPS & DOWNLOADS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-blue-600">iPhone App</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Android App</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">See all Apps & Downloads</a></li>
            </ul>
            
            <h3 className="text-gray-500 font-medium mt-8 mb-4">SUBSCRIPTION SERVICES</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-blue-600">AccuWeather Premium</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">AccuWeather Professional</a></li>
            </ul>
          </div>

          <div className='text1'>
            <h3 className="text-gray-500 font-medium mb-4">MORE</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-blue-600">AccuWeather Ready</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Business</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Health</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Hurricane</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Leisure and Recreation</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Severe Weather</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Space and Astronomy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Sports</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Travel</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Weather News</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <a href="#" className="p-2 bg-orange-500 rounded-full text-white hover:bg-orange-600">
            <Sun size={20} />
          </a>
          <a href="#" className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700">
            <Facebook size={20} />
          </a>
          <a href="#" className="p-2 bg-blue-400 rounded-full text-white hover:bg-blue-500">
            <Twitter size={20} />
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text1 text-gray-500 text-center">
            © 2025 AccuWeather, Inc. "AccuWeather" and sun design are registered trademarks of AccuWeather, Inc. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4 text1 text-gray-500">
            <a href="#" className="hover:text-blue-600">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-600">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;