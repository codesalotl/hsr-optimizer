export const characters = [
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

export const lightCones = [
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

export const relics = [
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

export const mainStats = [
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

export const subStats = [
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
