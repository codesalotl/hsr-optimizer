export const relicInstances = [
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
      { type: "spd", rolls: ["low", "low", "low"] },
      { type: "atkPercent", rolls: ["low", "low", "low"] },
      { type: "hp", rolls: ["low"] },
      { type: "breakEffect", rolls: ["low"] },
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
      { type: "spd", rolls: ["low", "low", "low"] },
      { type: "atkPercent", rolls: ["low", "low", "low"] },
      { type: "hp", rolls: ["low"] },
      { type: "breakEffect", rolls: ["low"] },
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
      { type: "spd", rolls: ["low", "low", "low"] },
      { type: "atkPercent", rolls: ["low", "low", "low"] },
      { type: "hp", rolls: ["low"] },
      { type: "breakEffect", rolls: ["low"] },
    ],
  },
];

export const loadouts = [
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
  {
    id: 2,
    character: 1,
    lightCone: 1,
    relicSlots: {
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
