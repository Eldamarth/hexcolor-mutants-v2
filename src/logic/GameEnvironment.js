import { randHex, randInt, randHexKey } from "./utilityFunctions";
import { shuffle } from "lodash";
import Bacterium from "./Bacterium";

export default class GameEnvironment {
  constructor() {
    this.mutantList = {};
    this.spawnProgenitor();
    this.populationLimit = 100;
    this.population = 1;
    this.duration = 0;
  }
  get mutants() {
    return Object.values(this.mutantList);
  }

  get popCapReached() {
    return this.population >= this.populationLimit;
  }

  addBacterium(mutant) {
    this.population++;
    this.mutantList[mutant.key] = mutant;
  }

  spawnProgenitor() {
    let hex = `#${randHexKey(6)}`;
    let progenitor = new Bacterium(this, {
      parent: "Carl Sagan",
      DNA: [hex, hex, hex, hex, hex, hex],
      replicationRate: 5,
      maxAge: 30,
    });
    this.addBacterium(progenitor);
  }
  deleteBacterium(key) {
    // console.log(`deleting `, key);
    delete this.mutantList[key];
    this.population--;
  }
  triggerEvent() {
    this.duration++;
    let shuffled = shuffle(this.mutants);
    shuffled.forEach((mutant) => {
      mutant.reactToTriggerEvent();
      if (mutant.age >= mutant.maxAge && randInt(10) > 6) {
        this.deleteBacterium(mutant.key);
      }
    });
  }
}
