import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  width: 265px;
  height: auto;
  z-index: 1;
`;

export const WhiteView = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 265px;
  height: 100%;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  z-index: 2;
`;

export const InfoContainer = styled.div`
  color: var(--black, #363131);
  font-family: Paperlogy;
  z-index: 3;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Location = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
`;

export const Temperature = styled.p`
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
`;

export const BottomContainer = styled.div`
  font-size: 13px;
  font-weight: 600;
  line-height: normal;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

export const Precipitation = styled.div`
  display: flex;
  align-items: center;
`;

export const RainIcon = styled.img``;
