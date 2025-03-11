import React, { useState } from "react";
import { Search as SearchIcon, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/countrycontext";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recentPlace, setRecentPlace] = useState("New York");
  const [temperature, setTemperature] = useState("25°C");
  const [weather, setWeather] = useState("Sunny");
  const navigate=useNavigate();
  const {setPlace}=useContext(Context);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      setRecentPlace(searchTerm);
      setSearchTerm("");
      navigate(`/${searchTerm}`)
      setPlace(searchTerm);
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      <form onSubmit={handleSearch} className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search for a city..."
          className="w-full bg-white/30 text-white placeholder-white/70 border-b border-white/20 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all duration-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
        >
          <SearchIcon className="h-5 w-5" />
        </button>
      </form>

     
    </div>
  );
}

export default Search;
