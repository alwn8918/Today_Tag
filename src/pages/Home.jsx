import React from "react";
import * as H from "./Home.style";
import characterAssets from "../constants/characterAssets";
import Bubble from "../components/Bubble";

function Home({ type }) {
  const assets = characterAssets[type] || {};

  return (
    <H.Container>
      <H.Background src={assets.background} alt={`${type} background`} />
      <H.Bubble>
        <Bubble />
      </H.Bubble>
      <H.Character src={assets.character} alt={`${type} character`} />
    </H.Container>
  );
}

export default Home;
