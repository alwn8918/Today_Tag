import React, { useState } from "react";
import * as B from "./Bubble.style";
import bubble from "/public/assets/bubble.png";
import Weather from "./Weather";
import commentData from "../constants/commentData";

function getRandomComment(weather, time) {
  const list = commentData[weather]?.[time] || [];
  return list[Math.floor(Math.random() * list.length)] || "오늘도 힘내자!";
}

function getMainCommentByTime(hour) {
  if (hour >= 5 && hour < 11) return "오늘도 좋은 하루 보내 ･ᴗ･♡";
  if (hour >= 11 && hour < 18) return "오늘도 끝까지 화이팅 ･ᴗ･♡";
  return "오늘도 고생했어 ･ᴗ･♡";
}

function Bubble() {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;
  const nowHour = today.getHours();

  const [weatherInfo, setWeatherInfo] = useState({
    weatherType: "sunny",
    time: "morning",
  });

  const subComment = getRandomComment(
    weatherInfo.weatherType,
    weatherInfo.time
  );

  const mainComment = getMainCommentByTime(nowHour);

  return (
    <B.Container>
      <B.BubbleContainer>
        <B.Bubble src={bubble} alt={"bubble"} />
        <B.Date>{formattedDate}</B.Date>
        <B.WeatherContainer>
          <Weather onWeatherChange={setWeatherInfo} />
        </B.WeatherContainer>
        <B.SubComment>{subComment}</B.SubComment>
        <B.MainComment>{mainComment}</B.MainComment>
      </B.BubbleContainer>
    </B.Container>
  );
}

export default Bubble;
