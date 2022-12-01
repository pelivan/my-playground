import "../styles/globals.css";
import { AnimalContext } from "../providers/AnimalContext";

import type { AppProps } from "next/app";
import { useState } from "react";
import { AnimalType } from "../models/constants";
import { Bird, Mammal, Fish } from "../models/animal.interface";
import { birdsData, fishData as fData, mammalsData } from "../data/animals";

export default function App({ Component, pageProps }: AppProps) {
  const [birdData, setBirdData] = useState<Bird[]>(birdsData);
  const [fishData, setFishData] = useState<Fish[]>(fData);
  const [mammalData, setMammalData] = useState<Mammal[]>(mammalsData);
  const [typeOfAnimal, setTypeOfAnimal] = useState<AnimalType | undefined>(
    AnimalType.NONE
  );
  return (
    <>
      <AnimalContext.Provider
        value={{
          typeOfAnimal,
          birdData,
          fishData,
          mammalData,

          setAnimalType: (animalType) => {
            setTypeOfAnimal(animalType);
          },
          addBird: (bird) => {
            setBirdData([...birdData, bird]);
          },
          addFish: (fish) => {
            setFishData([...fishData, fish]);
          },
          addMammal: (mammal) => {
            setMammalData([...mammalData, mammal]);
          },
        }}
      >
        <Component {...pageProps} />;
      </AnimalContext.Provider>
    </>
  );
}
