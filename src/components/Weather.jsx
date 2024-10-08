"use client"

import Image from "next/image";
import React from 'react';

const Weather = ({ data }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  console.log(iconUrl); // Check if the URL is correct
  console.log(data)

  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
     {/* Top */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
            <Image
            src={iconUrl}
            alt={data.weather[0].description || 'Weather Icon'}
            width={100}
            height={100}
            />
            <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>

      </div>
      {/* Bottom */}
      <div className="bg-black/75 relative p-8 rounded-lg">
        <p className="text-2xl text-center pb-6">Weather in {data.name}</p>

        {/* ----- Feels like, Humidity, and Wind Speed ------- */}
        <div className="flex justify-between text-center">

            <div>
                <p className=" font-bold text-2xl">{data.main.feels_like.toFixed(0)}&#176;</p>
                <p className="text-xl">Feels like</p>
            </div>

            <div>
                <p className=" font-bold text-2xl">{data.main.humidity.toFixed(0)}%</p>
                <p className="text-xl">huminity</p>
            </div>

            <div>
                <p className=" font-bold text-2xl">{data.wind.speed.toFixed(0)}MPH</p>
                <p className="text-xl">Winds</p>
            </div>
        </div>
        {/* ----------------------- */}
      </div>
    </div>
  );
};

export default Weather;
