import { createContext } from "react";
import { Animal, Mammal, Fish, Bird } from "../models/animal.interface";
import { AnimalType } from "../models/constants";
import { birdsData, fishData, mammalsData } from "../data/animals";

interface AnimalContext {
  setAnimalType: (data: AnimalType | undefined) => void;
  addBird: (data: Bird) => void;
  addFish: (data: Fish) => void;
  addMammal: (data: Mammal) => void;
  deleteBird: (data: string) => void;
  deleteFish: (data: string) => void;
  deleteMammal: (data: string) => void;
  typeOfAnimal: AnimalType | undefined;
  birdData: Bird[];
  fishData: Fish[];
  mammalData: Mammal[];
}

export const AnimalContext = createContext<AnimalContext>({
  birdData: birdsData,
  fishData: fishData,
  mammalData: mammalsData,
  typeOfAnimal: AnimalType.NONE,
  addBird() {},
  addFish() {},
  addMammal() {},
  setAnimalType() {},
  deleteBird() {},
  deleteFish() {},
  deleteMammal() {},
});
