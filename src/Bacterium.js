import React, { Component } from "react";
import { getRandomColors } from "./utilityFunctions";

class Bacterium extends Component {
  constructor(props) {
    super(props);
    const xMin = window.innerWidth * 0.25; // Adjust the percentage as needed
    const xMax = window.innerWidth * 0.75; // Adjust the percentage as needed
    const yMin = window.innerHeight * 0.25; // Adjust the percentage as needed
    const yMax = window.innerHeight * 0.75; // Adjust the percentage as needed
    this.state = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      colors: getRandomColors(),
      speed: Math.random() * 2 + 1,
    };
  }

  componentDidMount() {
    this.moveInterval = setInterval(this.moveBacterium, 800); // Adjust the interval as needed
  }

  componentWillUnmount() {
    clearInterval(this.moveInterval);
  }
  getNewPosition() {
    const { x, y } = this.state;
    const xMin = window.innerWidth * 0.25; // Adjust the percentage as needed
    const xMax = window.innerWidth * 0.75; // Adjust the percentage as needed
    const yMin = window.innerHeight * 0.25; // Adjust the percentage as needed
    const yMax = window.innerHeight * 0.75; // Adjust the percentage as needed

    const newX = x + (Math.random() - 0.5) * this.state.speed;
    const newY = y + (Math.random() - 0.5) * this.state.speed;

    return [
      Math.round(Math.min(Math.max(newX, xMin), xMax)), // Random x position within bounds
      Math.round(Math.min(Math.max(newY, yMin), yMax)), // Random y position within bounds
    ];
  }

  moveBacterium = () => {
    const [x, y] = this.getNewPosition();
    this.setState((prevState) => {
      return {
        x,
        y,
        // colors: this.getRandomColors(),
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
