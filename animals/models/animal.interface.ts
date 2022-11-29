import { FishColorType, FishWaterType } from "./constants";

export interface Animal {
  name: string;
  isExtinct: boolean;
  isDeadly: boolean;
  isDomestic: boolean;
}

export interface Mammal extends Animal {
  hasHair: boolean;
  numberOfLegs: number;
  isBarking: boolean;
}

export interface Fish extends Animal {
  livesIn: FishWaterType;
  isEatable: boolean;
  colorType: FishColorType;
}

export interface Bird extends Animal {
  hasFeather: boolean;
  canFly: boolean;
}
