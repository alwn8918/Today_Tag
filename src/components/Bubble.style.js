import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  justify-content: center;

  font-family: Paperlogy;
  color: var(--black, #363131);
  line-height: normal;
`;

export const BubbleContainer = styled.div`
  position: relative;
  width: 313px;
  height: auto;
  padding: 100px 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Bubble = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  z-index: 0;
`;

export const WeatherContainer = styled.div`
  position: absolute;
  top: 83px;
  width: 265px;
  height: auto;
  z-index: 1;
`;

export const Date = styled.p`
  position: absolute;
  top: 40px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  z-index: 1;
`;

export const SubComment = styled.p`
  position: absolute;
  top: 253px;
  font-family: "Hakgyoansim Chilpanjiugae TTF";
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  z-index: 1;
`;

export const MainComment = styled.p`
  position: absolute;
  top: 279px;
  font-family: "Hakgyoansim Chilpanjiugae TTF";
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  z-index: 1;
`;
