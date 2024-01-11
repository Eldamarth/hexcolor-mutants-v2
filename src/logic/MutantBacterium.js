import {
  randHex,
  randInt,
  validatePosition,
  getValidStartPosition,
  plusMinus,
} from "./utilityFunctions";

export default class MutantBacterium {
  constructor(game, bacteriaInputObj) {
    let {
      DNA,
      parent = this,
      replicationChance,
      maxAge,
      location,
    } = bacteriaInputObj;
    this.game = game;
    this.DNA = DNA;
    this.parent = parent;
    this.children = [];
    this.replicationChance = replicationChance;
    this.age = 0;
    this.maxAge = maxAge;
    this.speed = randInt(2);
    this.location = location ? location : getValidStartPosition();
    this.angle = randInt(180);
    this.rotationMomentum = plusMinus(randInt(6) - 1);
  }

  get canReplicate() {
    return this.age > 3 && !this.game.popCapReached;
  }

  setLocation(incomingLocationObj) {
    this.location = { ...incomingLocationObj };
  }

  getRandomMove() {
    let { x, y, z } = this.location;

    let xMove = plusMinus(randInt(this.speed));
    let yMove = plusMinus(randInt(this.speed));
    let zMove = plusMinus(randInt(2) - 1);
    let factor = 0.5 + z / 10;

    x += xMove * factor;
    y += yMove * factor;
    z += zMove;
    let possiblePosition = { x, y, z };
    return validatePosition(possiblePosition)
      ? { x: xMove, y: yMove, z: zMove }
      : this.getRandomMove();
  }

  move({ x = 0, y = 0, z = 0 }) {
    let { location } = this;

    x += location.x;
    y += location.y;
    z += location.z;

    this.setLocation({ x, y, z });
  }

  getChildLocation() {
    let { location } = this;
    let { x, y, z } = this.getRandomMove();
    x += location.x;
    y += location.y;
    z += location.z;
    let childPosition = { x, y, z };
    console.log(`Child Position: `, childPosition);
    return childPosition;
  }

  getNewRotationMomentum() {
    let { rotationMomentum } = this;

    let possibleNewMomentum = rotationMomentum + plusMinus(randInt(4) - 1);

    return Math.abs(possibleNewMomentum) <= 15
      ? possibleNewMomentum
      : this.getNewRotationMomentum();
  }

  rotate() {
    this.angle += this.rotationMomentum;
    this.rotationMomentum = this.getNewRotationMomentum();
  }

  getTranscribedDNA() {
    const transcribeDNA = (hexCode) => {
      let output = "" + hexCode;

      if (randInt(20) === 20) {
        let mutantDigit = randInt(6) - 1;
        let hexArr = output.split("");
        hexArr[mutantDigit] = randHex();
        output = hexArr.join("");
        this.game.incrementMutationCount();
      }
      return output;
    };

    return this.DNA.map(transcribeDNA);
  }

  reactToTriggerEvent() {
    let validMove = this.getRandomMove();
    this.age++;
    this.move(validMove);
    this.rotate();

    if (this.canReplicate && randInt(10) <= this.replicationChance) {
      console.log(`${this.key} dividing!`);
      this.divide();
    }
  }

  divide() {
    let replicationChance = this.replicationChance;
    let maxAge = randInt(10) >= 9 ? 15 + randInt(15) : this.maxAge;
    let newChild = new MutantBacterium(this.game, {
      parent: this,
      DNA: this.getTranscribedDNA(),
      replicationChance,
      location: { ...this.location },
      maxAge,
    });

    this.addChild(newChild);

    this.game.addEntity(newChild);

    return newChild;
  }

  addChild(child) {
    this.children.push(child);
  }
}
