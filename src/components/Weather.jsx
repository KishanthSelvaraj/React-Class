import axios from "axios";
import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const KEY = "e727b6bd42dc5eacd2810db8b1d65354";
  const fetchData = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`
    );
    console.log(res.data);
    setWeatherData(res.data);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg w-80">
        <h1 className="text-white text-2xl font-semibold mb-4">Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          className="w-full p-2 mb-4 text-white bg-transparent border-b-2 border-white outline-none focus:border-blue-400 transition-colors duration-300"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button
          onClick={fetchData}
          className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Get Weather
        </button>

       
          <div className="mt-4 text-white">
            <h2 className="text-xl font-semibold mb-2">{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}</p>
            <p>Weather: {weatherData.weather[0].description}</p>
          </div>
      
      </div>
    </div>
  );
};

export default Weather;
//https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric
