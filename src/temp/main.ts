import { calculateRelicFinalAtk, getEquippedSetTally } from "./utility.ts";
import {
  characters,
  lightCones,
  relics,
  mainStats,
  subStats,
} from "./data/constants.ts";
import { relicInstances, loadouts } from "./data/instances.ts";

// console.log(loadouts);

getEquippedSetTally(loadouts, 1);
