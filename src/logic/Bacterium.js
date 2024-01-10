import { randHex, randInt, randHexKey } from "./utilityFunctions";

export default class Bacterium {
  constructor(game, bacteriaInputObj) {
    let { DNA, parent, replicationRate, maxAge } = bacteriaInputObj;
    this.game = game;
    this.key = randHexKey();
    this.DNA = DNA;
    this.parent = parent;
    this.children = [];
    this.replicationRate = replicationRate;
    this.age = 0;
    this.maxAge = maxAge;
    this.speed = 5;
    this.location = {
      x: 0,
      y: 0,
      z: 0,
    };
  }

  setLocation(incomingLocationObj) {
    let { location } = this;
    this.location = { ...location, ...incomingLocationObj };
  }

  move({ x = 0, y = 0, z = 0 }) {
    let { location } = this;

    x += location.x;
    y += location.y;
    z += location.z;

    this.setLocation({ x, y, z });
  }

  getTranscribedDNA() {
    function transcribeDNA(hexCode) {
      let output = "" + hexCode;

      if (randInt(20) === 20) {
        let mutantDigit = randInt(6);
        let hexArr = output.split("");
        hexArr[mutantDigit] = randHex();
        output = hexArr.join("");
        // console.log(`changed to: `, output);
      }

      return output;
    }

    return this.DNA.map(transcribeDNA);
  }

  reactToTriggerEvent() {
    this.age++;
    if (this.game.popCapReached) {
    } else if (randInt(10) <= this.replicationRate) {
      this.divide();
    }
  }

  divide() {
    let replicationRate =
      randInt(10) >= 9 ? 5 + randInt(5) : this.replicationRate;
    let maxAge = randInt(10) >= 9 ? 15 + randInt(15) : this.maxAge;
    let newChild = new Bacterium(this.game, {
      parent: this,
      DNA: this.getTranscribedDNA(),
      replicationRate,
      maxAge,
    });
    this.addChild(newChild);
    this.game.addBacterium(newChild);
    return newChild;
  }
  addChild(child) {
    this.children.push(child);
  }
}
