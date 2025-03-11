import React from 'react'
import Forecast from '../Components/Forecast'
import WeatherCard from '../Components/WeatherCard'
import WeatherGraph from '../Components/WeatherGraph'
import HourlyWeather from '../Components/HourlyWeather'
import Footer from '../Components/Footer'
import NewsCard from '../Components/NewsCard'
import Navbar from '../Components/Navbar'

function WeatherDetails() {
  return (
    <>
    <Navbar/>
    <WeatherCard/>
    <WeatherGraph/>

    <HourlyWeather/>
        
        <Forecast/>
        <NewsCard/>
      
    </>
  )
}

export default WeatherDetails