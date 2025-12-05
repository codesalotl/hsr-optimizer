const characters = [
  {
    id: 1,
    name: "Firefly",
    rarity: 5,
    type: "fire",
    path: "destruction",
    levels: {
      80: {
        hp: 814,
        atk: 523,
        def: 776,
        spd: 104,
        energy: 240,
      },
    },
  },
];

const lightCones = [
  {
    id: 1,
    title: "Whereabouts Should Dreams Rest",
    rarity: 5,
    path: "destruction",
    levels: {
      80: {
        hp: 1164,
        atk: 476,
        def: 529,
      },
    },
    effects: {
      unconditional: {
        breakEffect: 0.6,
      },
      conditional: {
        inflicts: {
          title: "Routed",
          breakDmg: 0.24,
          spd: -0.2,
          stackable: false,
        },
      },
    },
  },
];

const relics = [
  {
    title: "Iron Cavalry Against the Scourge",
    type: "relic",
    effects: {
      2: {
        breakEffect: 0.16,
      },
      4: [
        {
          conditions: {
            breakEffect: 1.5,
          },
          defIgnore: 0.1,
        },
        {
          conditions: {
            breakEffect: 2.5,
          },
          defIgnore: 0.15,
        },
      ],
    },
  },
  {
    title: "Firmament Frontline: Glamoth",
    type: "planetary ornament",
    effects: {
      2: {
        unconditional: { atkPercent: 0.12 },
        conditional: [
          {
            require: { spd: { min: 135 } },
            effect: { damagePercent: 0.12 },
          },
          {
            require: { spd: { min: 160 } },
            effect: { damagePercent: 0.18 },
          },
        ],
      },
    },
  },
];

const mainStats = [
  {
    rarity: {
      5: {
        levels: {
          15: {
            spd: 25.032,
            hp: 705.6,
            atk: 352.8,
            hpPercent: 0.432,
            atkPercent: 0.432,
            defPercent: 0.54,
            breakEffect: 0.648,
            effectHitRate: 0.432,
            energyRegenerationRate: 0.194394,
            outgoingHealingBoost: 0.345606,
            physicalDmgBoost: 0.388803,
            fireDmgBoost: 0.388803,
            iceDmgBoost: 0.388803,
            windDmgBoost: 0.388803,
            lightningDmgBoost: 0.388803,
            quantumDmgBoost: 0.388803,
            imaginaryDmgBoost: 0.388803,
            critRate: 0.388803,
            critDmg: 0.388803,
          },
        },
      },
    },
  },
];

const subStats = [
  {
    stats: {
      spd: { low: 2, med: 2.3, high: 2.6 },
      hp: { low: 33.87, med: 38.103755, high: 42.33751 },
      atk: { low: 16.935, med: 19.051877, high: 21.168754 },
      def: { low: 16.935, med: 19.051877, high: 21.168754 },
      hpPercent: { low: 0.03456, med: 0.03888, high: 0.0432 },
      atkPercent: { low: 0.03456, med: 0.03888, high: 0.0432 },
      defPercent: { low: 0.0432, med: 0.0486, high: 0.054 },
      breakEffect: { low: 0.05184, med: 0.05832, high: 0.0648 },
      effectHitRate: { low: 0.03456, med: 0.03888, high: 0.0432 },
      effectRes: { low: 0.03456, med: 0.03888, high: 0.0432 },
      critRate: { low: 0.02592, med: 0.02916, high: 0.0324 },
      critDmg: { low: 0.05184, med: 0.05832, high: 0.0648 },
    },
  },
];

const relicInstances = [
  {
    id: 1,
    set: "Iron Cavalry Agaist the Scourge",
    slot: "head",
    initialSubstats: 4,
    level: 15,
    mainStat: {
      type: "breakEffect",
    },
    subStats: [
      { type: "spd", rolls: ["low", "low"] },
      { type: "atkPercent", rolls: ["low", "low"] },
      { type: "hp", rolls: ["low", "low"] },
      { type: "breakEffect", rolls: ["low", "low"] },
    ],
  },
  {
    id: 2,
    set: "Iron Cavalry Agaist the Scourge",
    slot: "body",
    initialSubstats: 3,
    level: 15,
    mainStat: {
      type: "breakEffect",
    },
    subStats: [
      { type: "spd", rolls: ["low", "low", "low"] },
      { type: "atkPercent", rolls: ["low", "low"] },
      { type: "hp", rolls: ["low", "low"] },
      { type: "breakEffect", rolls: ["low", "low"] },
    ],
  },
  {
    id: 3,
    set: "Iron Cavalry Agaist the Scourge",
    slot: "hand",
    initialSubstats: 3,
    level: 15,
    mainStat: {
      type: "breakEffect",
    },
    subStats: [
      { type: "spd", rolls: ["low", "low", "low"] },
      { type: "atkPercent", rolls: ["low", "low", "low"] },
      { type: "hp", rolls: ["low"] },
      { type: "breakEffect", rolls: ["low"] },
    ],
  },
  {
    id: 4,
    set: "Iron Cavalry Agaist the Scourge",
    slot: "feet",
    initialSubstats: 3,
    level: 15,
    mainStat: {
      type: "breakEffect",
    },
    subStats: [
      { type: "spd", rolls: [] },
      { type: "atkPercent", rolls: [] },
      { type: "hp", rolls: [] },
      { type: "breakEffect", rolls: [] },
    ],
  },
  {
    id: 5,
    set: "Firmament Frontline: Glamoth",
    slot: "planarSphere",
    initialSubstats: 3,
    level: 15,
    mainStat: {
      type: "breakEffect",
    },
    subStats: [
      { type: "spd", rolls: [] },
      { type: "atkPercent", rolls: [] },
      { type: "hp", rolls: [] },
      { type: "breakEffect", rolls: [] },
    ],
  },
  {
    id: 6,
    set: "Firmament Frontline: Glamoth",
    slot: "linkRope",
    initialSubstats: 3,
    level: 15,
    mainStat: {
      type: "breakEffect",
    },
    subStats: [
      { type: "spd", rolls: [] },
      { type: "atkPercent", rolls: [] },
      { type: "hp", rolls: [] },
      { type: "breakEffect", rolls: [] },
    ],
  },
];

let loadouts = [
  {
    id: 1,
    character: 1,
    lightCone: 1,
    relicsSlots: {
      cavernRelics: {
        head: 1,
        hands: 2,
        body: 3,
        feet: 4,
      },
      planarOrnaments: {
        planarSphere: 5,
        linkRope: 6,
      },
    },
  },
];

// validtion to see if rolls are valid for the initial substat value
function validateRolls(relicInstances) {
  const relic = relicInstances[2];
  const data = relic.subStats;
  const initialSubstats = relic.initialSubstats;
  const level = relic.level;

  let numRolls = 0;
  for (const item in data) {
    const rolls = data[item].rolls;
    numRolls += rolls.length;
  }

  if (initialSubstats === 3) {
    if (level === 15) {
      if (numRolls < 8) {
        return "too little rolls";
      } else if (numRolls > 8) {
        return "too much rolls";
      }
      return "perfect";
    }
  } else if (initialSubstats === 4) {
    if (level === 15) {
      if (numRolls < 9) {
        return "too little rolls";
      } else if (numRolls > 9) {
        return "too much rolls";
      }
      return "perfect";
    }
  } else {
    return "invalid initial substats";
  }
}

// console.log(validateRolls(relicInstances));

function summarizeLoadout(data) {
  // console.log(data.relics);

  let setEffects = {};

  for (let key in data.relics) {
    console.log(key);
    console.log(data.relics[key].set);

    if (!(data.relics[key].set in setEffects)) {
      setEffects[data.relics[key].set] = 1;
    } else {
      setEffects[data.relics[key].set] = setEffects[data.relics[key].set] + 1;
    }

    // console.log(data.relics[key].set in setEffects);
  }

  console.log(setEffects);

  for (const set in relics) {
    console.log("set", relics[set]);
  }
}

summarizeLoadout(loadout[0]);
