import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: var(--app-height);
  display: flex;
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

export const Garland = styled.img`
  position: absolute;
  top: 0;
  width: 360px;
  height: auto;
  object-fit: cover;
  z-index: 1;
`;

export const Bubble = styled.div`
  position: absolute;
  bottom: 250px;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1;
`;

export const Character = styled.img`
  position: absolute;
  bottom: 10px;
  z-index: 1;
  width: 240px;
  height: auto;
`;
