import React, { useState } from 'react';
import CardContainer from './CardContainer';
import Navbar from './Components/Navbar';
import WeatherGraph from './Components/WeatherGraph';
import { useApi } from './Hooks/useApi';
import Card from './Components/Card';
import SuperCard from './Components/SuperCard';
import WeatherDetails from './pages/WeatherDetails';
import WeatherCard from './Components/WeatherCard';
import StateData from './Components/StateData';
import {Context} from './context/countrycontext';
import Forecast from './Components/Forecast';
import Footer from './Components/Footer';
import HourlyWeather from './Components/HourlyWeather';
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  const [country, setCountry] = useState("China");
  const[stateWeathers,setStateWeather]=useState([]);
  const[forecastData,setForecastData]=useState([]);
  const[place,setPlace]=useState("");
  const[ currentWeather,
  setCurrentWeather]=useState([]);


  return (
    <>
    <Context.Provider value={{country,setCountry,stateWeathers,setStateWeather,forecastData,setForecastData,place,setPlace,currentWeather,setCurrentWeather}}>
       <BrowserRouter>

<Routes>
        <Route path='/:place' element={<Landing/>}/>

        <Route path='/' element={<Landing/>}/>
        </Routes>
       
        
  
    </BrowserRouter>
      
      </Context.Provider>
    </>
  );
}

export default App;
