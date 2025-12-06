import { relics } from "./data/constants.ts";
import { relicInstances } from "./data/instances.ts";

export function calculateRelicFinalAtk(): number {
  return 0;
}

// // validtion to see if rolls are valid for the initial substat value
// export function validateRolls(relicInstances) {
//   const relic = relicInstances[2];
//   const data = relic.subStats;
//   const initialSubstats = relic.initialSubstats;
//   const level = relic.level;

//   let numRolls = 0;
//   for (const item in data) {
//     const rolls = data[item].rolls;
//     numRolls += rolls.length;
//   }

//   if (initialSubstats === 3) {
//     if (level === 15) {
//       if (numRolls < 8) {
//         return "too little rolls";
//       } else if (numRolls > 8) {
//         return "too much rolls";
//       }
//       return "perfect";
//     }
//   } else if (initialSubstats === 4) {
//     if (level === 15) {
//       if (numRolls < 9) {
//         return "too little rolls";
//       } else if (numRolls > 9) {
//         return "too much rolls";
//       }
//       return "perfect";
//     }
//   } else {
//     return "invalid initial substats";
//   }
// }

export function getEquippedSetTally(data, id) {
  // console.log("data", data);
  // console.log("id", id);
  // console.log("relics", relics);
  // console.log("relicInstances", relicInstances);

  const loadout = data.find((item) => {
    return item.id === id;
  });
  const equippedRelics = loadout.relicsSlots;

  // console.log(loadout);
  // console.log(equippedRelics);

  // loop over relics
  // tally relic sets
  // store in object
  // return object

  for (const key in equippedRelics) {
    // console.log(equippedRelics[key]);

    let output = {};

    for (const item in equippedRelics[key]) {
      // console.log(equippedRelics[key][item])
      // console.log(relicInstances)

      // find relic instance for current relic id
      // match id
      const relicItem = relicInstances.find(relic => relic.id === equippedRelics[key][item]);
      console.log("relicItem", relicItem);

      const {set, ...rest} = relicItem
      console.log(set)

      console.log("set" in output)
      if (!("set" in output)) {
        output["set"] = set
      } else {
        console.log();
      };

      // aggregate:
      //   - flat stats
      //   - percent stats
      //   - set bonuses
    }

    console.log("output", output)
    return output;
  }


  // console.log(data.relics);
  // let setEffects = {};
  // for (let key in data.relics) {
  //   console.log(key);
  //   console.log(data.relics[key].set);
  //   if (!(data.relics[key].set in setEffects)) {
  //     setEffects[data.relics[key].set] = 1;
  //   } else {
  //     setEffects[data.relics[key].set] = setEffects[data.relics[key].set] + 1;
  //   }
  //   // console.log(data.relics[key].set in setEffects);
  // }
  // console.log(setEffects);
  // for (const set in relics) {
  //   console.log("set", relics[set]);
  // }
}
