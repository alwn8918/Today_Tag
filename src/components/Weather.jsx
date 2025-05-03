import React, { useEffect, useState } from "react";
import * as W from "./Weather.style";
import weatherBackgrounds from "../constants/weatherBackgrounds";
import rainIcon from "../../public/assets/icon/droplet.svg";

const getWeatherKey = (text, hour) => {
  const isMorning = hour >= 5 && hour < 11;
  const isAfternoon = hour >= 11 && hour < 18;
  const isNight = hour >= 18 || hour < 5;

  const lowerText = text.toLowerCase();

  if (lowerText.includes("rain")) return "rainy";
  if (lowerText.includes("snow")) return "snowy";
  if (lowerText.includes("cloud")) return "cloudy";
  if (lowerText.includes("clear") || lowerText.includes("sunny")) {
    if (isMorning) return "sunny_morning";
    if (isAfternoon) return "sunny_afternoon";
    if (isNight) return "sunny_night";
  }
  return "cloudy";
};

function Weather({ onWeatherChange }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      const apiKey = import.meta.env.VITE_WEATHERAPI_KEY;
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=1&aqi=no&alerts=no&lang=ko`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.error) throw new Error(data.error.message);
        setWeatherData(data);

        const weatherText = data.current.condition.text;
        const hour = new Date().getHours();
        const weatherKey = getWeatherKey(weatherText, hour);

        // 날씨 정보 전달
        if (onWeatherChange) {
          let weatherType = "sunny";
          if (weatherKey.includes("cloudy")) weatherType = "cloudy";
          else if (weatherKey.includes("rainy")) weatherType = "rainy";
          else if (weatherKey.includes("snowy")) weatherType = "snowy";

          let time = "morning";
          if (hour >= 12 && hour < 18) time = "afternoon";
          else if (hour >= 18 || hour < 6) time = "evening";

          onWeatherChange({ weatherType, time });
        }
      } catch (err) {
        console.error("❌ 날씨 불러오기 실패:", err);
        setError("날씨 정보를 가져오지 못했어요 😢");
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetchWeather(lat, lon);
        },
        (err) => {
          console.error("📍 위치 정보 에러:", err);
          setError("위치 정보를 가져올 수 없어요 😢");
        }
      );
    } else {
      setError("브라우저가 위치 정보를 지원하지 않아요 😢");
    }
  }, []);

  if (error) return <W.Message>{error}</W.Message>;
  if (!weatherData) return <W.Message>날씨를 불러오는 중이에요!</W.Message>;

  const current = weatherData.current;
  const forecast = weatherData.forecast.forecastday[0].day;
  const locationName = weatherData.location.name;

  const nowHour = new Date().getHours();
  const temp = current.temp_c.toFixed(1);
  const max = forecast.maxtemp_c.toFixed(1);
  const min = forecast.mintemp_c.toFixed(1);
  const rain = Math.round(forecast.daily_chance_of_rain);
  const weatherText = current.condition.text;

  const currentWeatherKey = getWeatherKey(weatherText, nowHour);
  const weatherImage = weatherBackgrounds[currentWeatherKey];

  return (
    <W.Container>
      <W.Image src={weatherImage} alt={currentWeatherKey} />
      <W.WhiteView />
      <W.InfoContainer>
        <W.TopContainer>
          <W.Location>{locationName}</W.Location>
        </W.TopContainer>
        <W.Temperature>{temp}°</W.Temperature>
        <W.BottomContainer>
          <div>
            최고: {max}° 최저: {min}°
          </div>
          <W.Precipitation>
            <W.RainIcon src={rainIcon} alt="Rain Icon" />
            {rain}%
          </W.Precipitation>
        </W.BottomContainer>
      </W.InfoContainer>
    </W.Container>
  );
}

export default Weather;
