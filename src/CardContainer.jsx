import React, { useContext } from "react";
import Card from "./Components/Card";
import {Context} from "./context/countrycontext";

function CardContainer() {
   const {country,stateWeathers} =useContext(Context);
   console.log(stateWeathers);
    
  return (
    <div className="mx-auto container max-w-[1000px] w-screen flex justify-center items-center mt-12 ">
      <div className="flex items-center scroll-smooth overflow-x-auto p-4 space-x-4 w-5/6">
        {stateWeathers.map((item,index)=>{
            return <Card windspeed={item.wind.speed} humidity={item.main.humidity} sunrise={item.sys.sunrise} sunset={item.sys.sunset} temp={item.main.temp} name={item.name} direction={item.wind.deg} index={index}/>
        })}
        

      
         </div>
    </div>
  );
}

export default CardContainer;
