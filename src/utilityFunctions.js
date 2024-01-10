export function getRandomColor() { return Math.floor(Math.random() * 256);} 
export function getRandomColors() {

  return [
    `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`,
    `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`,
    `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`,
  ];
}

