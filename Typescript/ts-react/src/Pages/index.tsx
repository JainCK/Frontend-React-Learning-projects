import React, { useState } from "react";
import axios from "axios";
import Display from "../components/Display";
import Heading from "../components/Heading";
import Search from "../components/Search";

const API_KEY = "21c36c078bcb6205808ffc8448f1a307";

const Index = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const WeatehrData = {
        temp: response.data.main.temp,
        desc: response.data.weather[0].description,
      };
      setWeather(WeatehrData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setWeather(null);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/4 p-6 bg-stone-500  border border-gray-200 rounded-lg ">
        <Heading />
        <Search onSearch={fetchWeather} />
        <Display weahter={weather} />
      </div>
    </div>
  );
};

export default Index;
