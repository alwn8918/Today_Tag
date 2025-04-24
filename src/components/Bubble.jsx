import React from "react";
import * as B from "./Bubble.style";
import bubble from "/public/assets/bubble.png";
import Weather from "./Weather";

function Bubble() {
  return (
    <B.Container>
      <B.BubbleContainer>
        <B.Bubble src={bubble} alt={"bubble"} />
        <B.Date>2024년 3월 20일</B.Date>
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
