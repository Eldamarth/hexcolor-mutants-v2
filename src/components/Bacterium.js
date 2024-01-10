// Bacterium.js
import React, { Component } from "react";
import {
  getRandomColors,
  getRandomIntInRange,
  getStartingPosition,
  plusMinus,
} from "../logic/utilityFunctions";

class Bacterium extends Component {
  constructor(props) {
    super(props);
    const [x, y] = getStartingPosition(window);
    console.log(`starting at: `, x, y);
    console.log(`window.innerWidth:`, window.innerWidth);
    console.log(`window.innerHeight:`, window.innerHeight);
    this.state = {
      x,
      y,
      colors: getRandomColors(),
      speed: Math.random() * 5 + 1,
    };
  }

  componentDidMount() {
    this.moveInterval = setInterval(this.moveBacterium, 3000); // Adjust the interval as needed
  }

  componentWillUnmount() {
    clearInterval(this.moveInterval);
  }

  getNewPosition() {
    const { x, y } = this.state;
    const xMin = window.innerHeight * 0.25; // Adjust the percentage as needed
    const xMax = window.innerHeight * 0.75; // Adjust the percentage as needed
    const yMin = window.innerHeight * 0.25; // Adjust the percentage as needed
    const yMax = window.innerHeight * 0.75; // Adjust the percentage as needed

    const newX = x + plusMinus(Math.random() * this.state.speed);
    const newY = y + plusMinus(Math.random() * this.state.speed);

    // Calculate the distance from the center of the circular area
    const xDist = newX - window.innerHeight / 2;
    const yDist = newY - window.innerHeight / 2;
    const distance = Math.sqrt(xDist * xDist + yDist * yDist);
    console.log(`newX`, newX);
    console.log(`newY`, newY);

    console.log(`dist:`, distance, `max:`, window.innerHeight * 0.45);

    // If the distance is within the radius of the circular area, use the new position
    if (distance < window.innerHeight * 0.45) {
      return [
        Math.round(Math.min(Math.max(newX, xMin), xMax)),
        Math.round(Math.min(Math.max(newY, yMin), yMax)),
      ];
    } else {
      // If outside the circular area, recalculate the position
      console.log(`🔴`);

      return this.getNewPosition();
    }
  }

  moveBacterium = () => {
    const [x, y] = this.getNewPosition();
    this.setState((prevState) => {
      return {
        x,
        y,
      };
    });
  };

  render() {
    const bacteriumSize = 30; // Set your desired size

    return (
      <div
        className="bacterium"
        style={{
          transform: `translate(${this.state.x}px, ${this.state.y}px)`,
          width: `${bacteriumSize}px`,
          height: `${bacteriumSize}px`,
          background: `conic-gradient(${this.state.colors[0]}, ${this.state.colors[1]}, ${this.state.colors[2]}, ${this.state.colors[0]})`,
        }}
      ></div>
    );
  }
}

export default Bacterium;
