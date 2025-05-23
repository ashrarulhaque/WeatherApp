const API_Key = import.meta.env.VITE_Weather_API_Key;

const getWeatherData = async (city) => {
  try {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const weatherData = await response.json();
    let weatherInfo = {
      name: weatherData.name,
      main: weatherData.main,
      description: weatherData.weather[0].description,
      windSpeed: weatherData.wind.speed,
    };
    return weatherInfo;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};

export default getWeatherData;
