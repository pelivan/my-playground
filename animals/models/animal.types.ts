import { type } from "os";

type Animal = {
  name: string;
  isExtinct: boolean;
  isDeadly: boolean;
  isDomestic: boolean;
};

type Mammal = Animal & {
  hasHair: boolean;
  numberOfLegs: number;
  isBarking: boolean;
};

type Fish = Animal & {
  livesIn: ["saltwater", "sweetwater"];
  isEatable: boolean;
  colorType: ["blue", "white"];
};

type Bird = Animal & {
  hasFeather: boolean;
  canFly: boolean;
};
