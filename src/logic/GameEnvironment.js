import { randHex, randInt, randHexKey } from "./utilityFunctions";
import { shuffle } from "lodash";
import MutantBacterium from "./MutantBacterium";

export default class GameEnvironment {
  constructor() {
    this.entityList = {};
    this.spawnProgenitor();
    this.populationLimit = 100;
    this.population = 1;
    this.duration = 0;
  }

  get entities() {
    return Object.values(this.entityList);
  }

  get popCapReached() {
    return this.population >= this.populationLimit;
  }

  addEntity(entity) {
    this.population++;
    this.entityList[entity.key] = entity;
  }

  deleteEntity(key) {
    // console.log(`deleting `, key);
    delete this.entityList[key];
    this.population--;
  }

  spawnProgenitor() {
    // Spawns the first-generation entity
    let hex = `#${randHexKey(6)}`;
    let progenitor = new MutantBacterium(this, {
      parent: "Carl Sagan",
      DNA: [hex, hex, hex, hex, hex, hex],
      replicationRate: 5,
      maxAge: 30,
    });
    this.addEntity(progenitor);
  }

  incrementDuration() {
    this.duration++;
  }

  triggerEvent() {
    let shuffled = shuffle(this.entities);
    shuffled.forEach((entity) => {
      entity.reactToTriggerEvent();
      if (entity.age >= entity.maxAge && randInt(10) > 6) {
        this.deleteEntity(entity.key);
      }
    });
  }

  tick() {
    console.log(`TICK (game)`);
    this.incrementDuration();
    this.triggerEvent();
  }
}
