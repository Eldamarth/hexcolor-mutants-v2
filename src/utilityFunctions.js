// utilityFunctions.js

export function getRandomColor() {
  return Math.floor(Math.random() * 256);
}
export function getRandomColors() {
  return [
    `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`,
    `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`,
    `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`,
  ];
}

export function getRandomIntInRange(min, max) {
  console.log(
    `getRandomIntInRange has been called with min:`,
    min,
    `and max:`,
    max
  );
  let diff = max - min;
  return Math.floor(min + Math.random() * diff);
}

export function getStartingPosition(window) {
  const xMin = window.innerHeight * 0.25; // Adjust the percentage as needed
  const xMax = window.innerHeight * 0.75; // Adjust the percentage as needed
  const yMin = window.innerHeight * 0.25; // Adjust the percentage as needed
  const yMax = window.innerHeight * 0.75; // Adjust the percentage as needed
  const x = getRandomIntInRange(xMin, xMax);
  const y = getRandomIntInRange(yMin, yMax);

  const xDist = x - window.innerHeight / 2;
  const yDist = y - window.innerHeight / 2;
  const distance = Math.sqrt(xDist * xDist + yDist * yDist);

  console.log(`util - dist:`, distance, `and max: `, window.innerHeight * 0.45);
  if (distance < window.innerHeight * 0.45) {
    return [x, y];
  } else {
    console.log(`🔴`);
    return getStartingPosition(window);
  }
}

export function plusMinus(num) {
  return Math.round(Math.random()) > 0 ? num : 0 - num;
}
