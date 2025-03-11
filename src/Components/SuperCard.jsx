import React from 'react'
import './Navbar.css'
import ReactAnimatedWeather from 'react-animated-weather';
import {Moon,Search} from 'lucide-react'
import Card from './Card';

const defaults = {
    icon: 'CLEAR_DAY',
    color: 'white',
    size: 62,
    animate: true
  };
const details=[
    {name:'Temperature',value:25},
    {name:'Humidity',value:60},
    {name:'Wind',value:10},
    {name:'Pressure',value:1013},

]

function SuperCard() {
  return (
    <div className='flex  container max-w-screen-2xl mx-auto items-center justify-center  h-screen w-screen bg-gray-50'>
        <div className="flex sm:flex-row flex-col lg:w-[66vw] w-4/6 drop-shadow-lg rounded-lg border">
        <div className="left flex flex-col    lg:w-3/5  bg-cover bg-no-repeat px-2 relative">
            <div className='flex justify-center items-end flex-col space-y-2'>
            <h1 className='heading  text-white'>conaught place</h1>
            <h1 className='heading text-white'>IN</h1>
            </div>
            
            <div className="flex items-center justify-between p-2 mt-16">
                <div className="flex justify-start items-center">
                    <h1 className='text-white heading'>4.5</h1>
                    <p className='text-parameter'>something is here</p>
                </div>
            <div className="text-7xl text-white ">32&#8451;</div>

            </div>
            <div className="absolute h-1/4 border bottom-2 left-2 flex items-center scroll-smooth overflow-x-auto  w-full ">
                <p>this is a thing</p>
                <p>this is a thing</p>

                <p>this is a thing</p>

                <p>this is a thing</p>

                <p>this is a thing</p>
                <p>this is a thing</p>


                <p>this is a thing</p>

                <p>this is a thing</p>

                <p>this is a thing</p>


                <p>this is a thing</p>

                <p>this is a thing</p>

                <p>this is a thing</p>




            </div>
        </div>
        <div className="right sm:w-2/5 w-full flex flex-col space-y-2 border bg-[#242329]  items-center">
            <div className="flex sm:flex-col flex-row w-4/5">
            <div className="flex flex-col  items-center justify-center  sm:border-b border-none sm:border-white space-y-2 w-full">
            <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
                <h1 className='lg:text-6xl text-4xl font-normal text-white border-b border-none sm:border-white border-gray-100  w-full text-center py-4 '> Haze</h1>
            </div>
            <div className="flex flex-col w-full" >
            <div className="flex justify-center items-center w-full">
                <input type="text" placeholder='search for city' className='border-b border-white text-white py-2 w-5/6 text-supercard focus:outline-none'/>
              <Search height="32" className='text-white'/>
            </div>
            <div className="flex items-center justify-center w-full mt-6">
                <h1 className='text-parameter'>Odisha,IN</h1>
            </div>
            <div className="flex flex-col w-full items-center space-y-2 mt-6">
{details.map((item,index)=>{
    return(
        <div key={index} className="flex justify-between w-full items-center space-x-2
        border-t border-gray-100 py-2">
            <h1 className='text-parameter'>{item.name}</h1>
            <h1 className='text-parameter'>{item.value}</h1>
            </div>
    )
})}

            </div>
            </div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default SuperCard