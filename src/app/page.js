"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import {BsSearch} from 'react-icons/bs';
import Weather from '../components/Weather.jsx';
import Spinner from "../components/Spinner.jsx";



export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
  //  console.log(city)


   const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true)
    axios.get(url).then((response) => {
      setWeather(response.data)
      // console.log(response.data)
    })
    setCity('')
    setLoading(false)
   }

   if(loading){
    return <Spinner/>
   }else{

  return (
    <div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]"/>
        <Image src='https://images.unsplash.com/photo-1561553590-267fc716698a?q=80&w=2384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        layout="fill"
        alt="Lighting background image"
        className="object-cover"/>

        <div className=" relative flex justify-between items-center max-w-[500px]  w-full m-auto pt-4 text-white z-10">
          <form onSubmit={fetchWeather}
           className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl">
            <div>
              <input
              onChange={(e) => setCity(e.target.value)}
               type="text" placeholder="Search City"
              className="bg-transparent border-none text-white focus:outline-none text-2xl"/>
            </div>
            <button onClick={fetchWeather}> <BsSearch size={30} /> </button>
          </form>
        </div>

      {/* WEATHER DATA DISPLAYED */}
      {weather.main && <Weather data={weather}/>}
      
    </div>
  );
 }
}
