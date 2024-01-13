import React from "react";
import "./Weather.scss";
import { Image } from "react-bootstrap";
import sun from "../../assets/images/wheather/sun.png";
import rain from "../../assets/images/wheather/rain.png";
import clouds from "../../assets/images/wheather/clouds.png";
import partlyClouds from "../../assets/images/wheather/partlyClouds.png";
import snow from "../../assets/images/wheather/snow.png";
import axios from "axios";

const Weather = () => {
  const [weatherStatus, setWeatherStatus] = React.useState("");
  const [temp, setTemp] = React.useState(0);

  /* Get Weather */
  React.useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=05335e4392c0cb7d24ceeb71bbc735a3"
        );

        setWeatherStatus(response.data.weather[0].main);
        const tempToFehrenhit = Math.floor(
          ((response.data.main.temp - 273.15) * 9) / 5 + 32
        );

        setTemp(tempToFehrenhit);
      } catch (error) {
        console.log(error);
      }
    };
    getWeather();
  }, []);

  /* Weather Image Condition */
  const weatherCondition = () => {
    if (weatherStatus === "Clear") {
      return sun;
    } else if (weatherStatus === "Rain") {
      return rain;
    } else if (weatherStatus === "Snow") {
      return snow;
    } else if (weatherStatus === "Clouds") {
      return clouds;
    } else if (weatherStatus === "Partly clouds") {
      return partlyClouds;
    } else {
      return;
    }
  };

  return (
    <div className="weather">
      <div className="item">
        <Image src={weatherCondition()} alt=" Img" className="weahterImage" />
      </div>
      <div className="item">
        <p>
          {weatherStatus} <br />
          {temp} ℉
        </p>
      </div>
    </div>
  );
};

export default Weather;
