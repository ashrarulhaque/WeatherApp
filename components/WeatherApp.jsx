import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import Searchcard from "./SearchCard.jsx";
import getWeatherData from "../utils/WeatherData.js";
import getWeatherImage from "../utils/WeatherImage.js";
import getRandomColor from '../utils/getRandomColor';

export default function WeatherApp() {
  const [cityInput, setCityInput] = useState("");
  const [weatherData, setWeatherData] = useState(defaultWeatherData);
  const [videoSrc, setVideoSrc] = useState("/src/assets/autumn.webm");
  const [onClickStyle, setOnClickStyle] = useState({backgroundColor: '#ffffff'});

  useEffect(() => {
    // Fetch weather for default city (Kolkata) when component mounts
    getWeatherData("Kolkata").then((weatherInfo) => {
      const newSrc = getWeatherImage(weatherInfo.description);
      setWeatherData(weatherInfo);
      setVideoSrc(newSrc);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityInput) {
      getWeatherData(cityInput).then((weatherInfo) => {
        const newSrc = getWeatherImage(weatherInfo.description);
        setWeatherData(weatherInfo);
        setVideoSrc(newSrc);
        setCityInput("");
      });
    };
    setOnClickStyle({backgroundColor: getRandomColor()});
  };

  const handleChange = (e) => {
    setCityInput(e.target.value);
  };

  return (
    <>
      <Searchcard
        inputChange={handleChange}
        inputSubmit={handleSubmit}
        cityInput={cityInput}
        setCityInput={setCityInput}
      />
      <Card weatherInfo={weatherData} videoSrc={videoSrc} key={videoSrc} onClickStyle={onClickStyle}/>
    </>
  );
}

let defaultWeatherData = {
  name: "Kolkata",
  main: {
    temp: 35,
    feels_like: 42,
    humidity: 80,
    pressure: 1000,
    temp_min: 32,
    temp_max: 38,
  },
  description: "Sunny",
  windSpeed: 10,
};
