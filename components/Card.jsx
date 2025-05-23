import { useEffect, useRef } from 'react';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";


export default function Card({ weatherInfo, videoSrc, onClickStyle }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [videoSrc]);

  let cityIcon = () => {
    const temp = weatherInfo.main.temp;

    if (temp >= 30) {
      return <i className="fi fi-rr-summer"></i>;
    } else if (temp < 30 && temp >= 20) {
      return <i className="fi fi-rr-sun"></i>;
    } else if (temp < 20 && temp > 10) {
      return <i class="fi fi-rr-snowflake"></i>;
    } else if (temp <= 10) {
      return <i className="fi fi-rs-temperature-frigid"></i>;
    }
  };
  return (
    <>
      <Box className="weatherContainer">
        <Box className="weatherImg">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "13rem", height: "13rem", borderRadius: "50%" }}
          >
            <source
              src={videoSrc}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Box className='infobox'>
          <div className='weatherinfo-name'><h1 >{weatherInfo.name} {cityIcon()}</h1></div>
          <Paper elevation={3} className="weatherdetails" sx={onClickStyle}>
            <Box className="weatherInfo">
              <div>
                <h3>Now</h3>
                <h2>{weatherInfo.main.temp}°C</h2>
              </div>
              <div>
                <h3>Min</h3>
                <h2>{weatherInfo.main.temp_min}°C</h2>
              </div>
              <div>
                <h3>Max</h3>
                <h2>{weatherInfo.main.temp_max}°C</h2>
              </div>
              <div>
                <h3>Feels like</h3>
                <h2>{weatherInfo.main.feels_like}°C</h2>
              </div>
            </Box>
          </Paper>
        </Box>
        <Box className='infobox'>
          <div className='weatherinfo-desc'><h3>{weatherInfo.description.toUpperCase()}</h3></div>
          <Paper elevation={3} className="weatherdetails" sx={onClickStyle}>
            <Box className="weatherInfo">
              <div>
                <h3>Humidity</h3>
                <h4>{weatherInfo.main.humidity} %</h4>
              </div>
              <div>
                <h3>Pressure</h3>
                <h4>{weatherInfo.main.pressure} hPa</h4>
              </div>
              <div>
                <h3>WindSpeed</h3>
                <h4>{weatherInfo.windSpeed} m/s</h4>
              </div>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
