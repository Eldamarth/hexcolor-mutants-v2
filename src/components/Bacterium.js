// Bacterium.js
import React, { Component, useState } from "react";
import BacteriumNode from "./BacteriumNode";
import {
  getRandomColors,
  getRandomIntInRange,
  getStartingPosition,
  plusMinus,
} from "../logic/utilityFunctions";

function Bacterium({ entity }) {
  let { x, y, z } = entity.location;
  let styles = {
    transform: `translate(${x + 50}vh, ${y + 50}vh) scale(${
      1 + z * 0.2
    }) rotate(${entity.angle}deg)`,
    opacity: 0.8 + z / 20,
    zIndex: `${z}`,
  };

  return (
    <div id={entity.key} className="bacterium" style={styles}>
      <div className="bacterium-body"></div>
      {entity.DNA.map((hexColorCode, index) => (
        <BacteriumNode
          hexColorCode={hexColorCode}
          index={index}
          key={`${entity.key}-node-${index}`}
        />
      ))}
    </div>
  );
}

export default Bacterium;
