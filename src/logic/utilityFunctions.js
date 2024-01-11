// utilityFunctions.js

export function randFloat(max) {
  return (Math.random() * max).toFixed(2);
}

export function randInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
export function randHex() {
  return (randInt(17) - 1).toString(16);
}

export function randHexKey(x = 32) {
  let out = "";
  for (let i = 0; i < x; i++) {
    out += randHex();
  }
  return out;
}
export function validatePosition({ x, y, z }) {
  let aSquared = Math.abs(x) ** 2;
  let bSquared = Math.abs(y) ** 2;
  let c = 50; // max radial distance from center of microscope

  let pythangoreanCheck = Math.sqrt(aSquared + bSquared) < c;
  let zCheck = z >= 0 && z <= 5;
  return pythangoreanCheck && zCheck;
}

export function plusMinus(num) {
  return Math.round(Math.random()) > 0 ? num : 0 - num;
}

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
  return Math.round(min + randInt(diff));
}

export function getValidStartPosition() {
  let x = plusMinus(randInt(51) - 1);
  let y = plusMinus(randInt(51) - 1);
  let z = randInt(6) - 1;
  let possiblePosition = { x, y, z };
  console.log(`Possible Position:`, possiblePosition);
  return validatePosition(possiblePosition)
    ? possiblePosition
    : getValidStartPosition();
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
