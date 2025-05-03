import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: var(--app-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Background = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const Title = styled.h1`
  color: var(--black, #363131);
  text-align: center;
  font-family: Paperlogy;
  font-size: 32px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.6px;

  position: absolute;
  top: 100px;

  z-index: 1;
`;

export const SubTitle = styled.h2`
  color: var(--black, #363131);
  text-align: center;
  font-family: Paperlogy;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;

  position: absolute;
  top: 150px;

  z-index: 1;
`;

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-top: 220px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 20px;
`;

export const Character = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--black, #363131);
  text-align: center;
  font-family: Paperlogy;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;

  z-index: 1;

  img {
    width: 150px;
  }
`;
