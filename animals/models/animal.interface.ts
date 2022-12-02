import { FishColorType, FishWaterType } from "./constants";

export interface Animal {
  id: string;
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

export function isBird(animal: Animal): animal is Bird {
  return (animal as Bird).canFly !== undefined;
}

export function isFish(animal: Animal): animal is Fish {
  return (animal as Fish).livesIn !== undefined;
}

export function isMammal(animal: Animal): animal is Mammal {
  return (animal as Mammal).isBarking !== undefined;
}
