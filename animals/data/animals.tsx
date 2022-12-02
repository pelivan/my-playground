import { Bird, Fish, Mammal } from "../models/animal.interface";
import { FishColorType, FishWaterType } from "../models/constants";

export const mammalsData: Array<Mammal> = [
  {
    id: "m1",
    name: "Cat",
    isExtinct: false,
    isDeadly: false,
    isDomestic: true,
    hasHair: true,
    numberOfLegs: 4,
    isBarking: false,
  },
];

export const birdsData: Array<Bird> = [
  {
    id: "b1",
    name: "Owl",
    isExtinct: false,
    isDeadly: false,
    isDomestic: false,
    hasFeather: true,
    canFly: true,
  },
  {
    id: "b2",
    name: "Chicken",
    isExtinct: false,
    isDeadly: false,
    isDomestic: true,
    hasFeather: true,
    canFly: false,
  },
];

export const fishData: Array<Fish> = [
  {
    id: "f1",
    name: "Asp",
    isExtinct: false,
    isDeadly: false,
    isDomestic: false,
    livesIn: FishWaterType.SWEETWATER,
    isEatable: true,
    colorType: FishColorType.WHITE,
  },
];
// export const animalsData: Record<Species, Array<SpeciesInfo>> = {
//   mammals: [
//     {
//       name: "Cat",
//       isExtinct: false,
//       isDeadly: false,
//       isDomestic: false,
//       hasHair: false,
//       numberOfLegs: 4,
//       isBarking: false,
//     },
//   ],
//   fish: [
//     {
//       name: "Asp",
//       isExtinct: false,
//       isDeadly: false,
//       isDomestic: false,
//       livesIn: "sweetwater",
//       isEatable: true,
//       colorType: "white",
//     },
//   ],
//   birds: [
//     {
//       name: "Owl",
//       isExtinct: false,
//       isDeadly: false,
//       isDomestic: false,
//       hasFeather: true,
//       canFly: true,
//     },
//   ],
// };
