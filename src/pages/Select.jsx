import React from "react";
import * as S from "./Select.style";
import background from "../../public/assets/main_background.png";
import yuja from "../../public/assets/yuja/yuja.png";
import top from "../../public/assets/top/top.png";

function Select() {
  return (
    <S.Container>
      <S.Background src={background} alt="background" />
      <S.Title>오늘의 태그</S.Title>
      <S.SubTitle>캐릭터를 선택해 주세요!</S.SubTitle>
      <S.CharacterContainer>
        <S.Character>
          <img
            src={yuja}
            alt="yuja"
            onClick={() => {
              localStorage.setItem("selectedCharacter", "yuja");
              window.location.href = "/yuja";
            }}
          />
          <p>유자</p>
        </S.Character>
        <S.Character>
          <img
            src={top}
            alt="top"
            onClick={() => {
              localStorage.setItem("selectedCharacter", "top");
              window.location.href = "/top";
            }}
          />
          <p>탑이</p>
        </S.Character>
      </S.CharacterContainer>
    </S.Container>
  );
}

export default Select;
