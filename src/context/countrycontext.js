import React from "react";

export const Context=React.createContext({
   country:"",
   setCountry:()=>{

   },
   stateWeathers:[],
   setStateWeather:()=>{},
   forecastData:[],
   setForecastData:()=>{},
   place:"",
   setPlace:()=>{},
   currentWeather:[],
   setCurrentWeather:()=>{},
   
});
