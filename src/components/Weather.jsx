import React from "react";
import * as W from "./Weather.style";
import weatherBackgrounds from "../constants/weatherBackgrounds";
import rainIcon from "../../public/assets/icon/droplet.svg";
import sunnyIcon from "../../public/assets/icon/sunny.svg";

function Weather() {
  const currentWeather = "sunny_night"; // This should be dynamically set based on the weather API
  const weatherImage = weatherBackgrounds[currentWeather];

  return (
    <W.Container>
      <W.Image src={weatherImage} alt={currentWeather} />
      <W.WhiteView />
      <W.InfoContainer>
        <W.TopContainer>
          <W.Location>경기도 고양시</W.Location>
          <img src={sunnyIcon} alt="Sunny Icon" />
        </W.TopContainer>
        <W.Temperature>1°</W.Temperature>
        <W.BottomContainer>
          <div>최고: 13° 최저: 1°</div>
          <W.Precipitation>
            <W.RainIcon src={rainIcon} alt="Rain Icon" />
            11%
          </W.Precipitation>
        </W.BottomContainer>
      </W.InfoContainer>
    </W.Container>
  );
}

export default Weather;
