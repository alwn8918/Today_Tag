import React from "react";
import * as B from "./Bubble.style";
import bubble from "/public/assets/bubble.png";
import Weather from "./Weather";

function Bubble() {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return (
    <B.Container>
      <B.BubbleContainer>
        <B.Bubble src={bubble} alt={"bubble"} />
        <B.Date>{formattedDate}</B.Date>
        <B.WeatherContainer>
          <Weather />
        </B.WeatherContainer>
        <B.SubComment>
          오늘 하루 어땠어? 맑은 저녁 하늘이 위로해주는 기분이야.
        </B.SubComment>
        <B.MainComment>오늘도 고생했어 ･ᴗ･♡</B.MainComment>
      </B.BubbleContainer>
    </B.Container>
  );
}

export default Bubble;
