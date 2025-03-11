import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../context/countrycontext";
import { Search, ChevronDown, CloudRain,Sun,Moon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const { setCountry,country,place } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const[theme,setTheme]=useState("light");

 

  console.log(country);
  const [isSearchDone, setIsSearchDone] = useState(false);
  

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (searchTerm.trim() !== "") {
      navigate(`/${searchTerm}`);
    }
    setSearchTerm("");
    setIsSearchDone(true);
  };

 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('#country-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 ">
      <div className="container mx-auto max-w-screen-2xl px-4  shadow-md bg-[url('./weatherbg1.jpg')]/10">
        <div className="flex justify-between items-center py-4 px-2 w-full">
          <div className="absolute top-0 -right-4 h-full flex items-center">
      
          </div>
          <div className="flex items-center lg:space-x-4 space-x-2">
            <div className="flex items-center space-x-2">
              <CloudRain className="h-6 w-6 text-red-500" />
              <a  href="/" className="navbar-heading text-black  yrsa-regular ">WeatherApp</a>
            </div>
            
        
          </div>
          
      <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        placeholder="Search for city..."
        className="w-full bg-black/50 text-white placeholder-black/70 border-b border-black/20 rounded-full py-2 lg:pl-4 pl-2 lg:pr-16 pr-10 focus:outline-none focus:ring-2 focus:ring-black/50 focus:bg-black/20 transition-all duration-200 text1"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <button
        type="submit"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
      >
        <Search className="h-4 w-4" />
      </button>
    </form>
        </div>

      </div>
    </div>
  );
}

export default Navbar;