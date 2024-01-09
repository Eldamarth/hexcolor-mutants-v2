import React, { Component } from 'react';

class Bacterium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      colors: this.getRandomColors(),
      speed: Math.random() * 2 + 1, // Adjust the speed as needed
    };
  }

  componentDidMount() {
    this.moveInterval = setInterval(this.moveBacterium, 100); // Adjust the interval as needed
  }

  componentWillUnmount() {
    clearInterval(this.moveInterval);
  }

  getRandomColors() {
    const getRandomColor = () => Math.floor(Math.random() * 256);
    return [`rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`, `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`, `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`];
  }

  moveBacterium = () => {
    this.setState((prevState) => ({
      x: prevState.x + (Math.random() - 0.5) * prevState.speed,
      y: prevState.y + (Math.random() - 0.5) * prevState.speed,
    }));
  };

  render() {
    const bacteriumSize = 20; // Set your desired size

    return (
      <div
        style={{
          position: 'absolute',
          top: this.state.y,
          left: this.state.x,
          width: `${bacteriumSize}px`,
          height: `${bacteriumSize}px`,
          borderRadius: '50%',
          background: `conic-gradient(${this.state.colors[0]}, ${this.state.colors[1]}, ${this.state.colors[2]}, ${this.state.colors[0]})`,
        }}
      ></div>
    );
  }
}

export default Bacterium;
