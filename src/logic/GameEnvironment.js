import { randHex, randInt, randHexKey } from "./utilityFunctions";
import { shuffle, uniqueId } from "lodash";
import MutantBacterium from "./MutantBacterium";

export default class GameEnvironment {
  constructor() {
    this.entityList = {};
    this.spawnProgenitor();
    this.populationLimit = 50;
    this.population = 1;
    this.duration = 0;
    this.mutationCount = 0;
  }

  get entities() {
    return Object.values(this.entityList);
  }

  get popCapReached() {
    return this.population >= this.populationLimit;
  }

  addEntity(entity) {
    this.population++;
    entity.key = uniqueId(`entity-`);
    this.entityList[entity.key] = entity;
  }

  deleteEntity(key) {
    delete this.entityList[key];
    this.population--;
  }

  spawnProgenitor() {
    // Spawns the first-generation entity
    let hex = `#${randHexKey(6)}`;
    let progenitor = new MutantBacterium(this, {
      parent: "Carl Sagan",
      DNA: [hex, hex, hex, hex, hex, hex],
      replicationChance: 2,
      maxAge: 30,
      location: { x: 0, y: 0, z: 3 },
    });
    this.addEntity(progenitor);
  }

  incrementDuration() {
    this.duration++;
  }

  incrementMutationCount() {
    this.mutationCount++;
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
