import "../styles/globals.css";
import { AnimalContext } from "../providers/AnimalContext";

import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
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
  const deleteBird = (id: string) => {
    const filteredBirds = birdData.filter((bird) => bird.id !== id);
    setBirdData(filteredBirds);
    localStorage.setItem("birds", JSON.stringify(filteredBirds));
  };
  const deleteFish = (id: string) => {
    const filteredFish = fishData.filter((fish) => fish.id !== id);
    setFishData(filteredFish);
    localStorage.setItem("fish", JSON.stringify(filteredFish));
  };
  const deleteMammal = (id: string) => {
    const filteredMammal = mammalData.filter((mammal) => mammal.id !== id);
    setMammalData(filteredMammal);
    localStorage.setItem("mammal", JSON.stringify(filteredMammal));
  };

  useEffect(() => {
    if (localStorage.getItem("birds")) {
      setBirdData(JSON.parse(localStorage.getItem("birds")!));
    } else {
      localStorage.setItem("birds", JSON.stringify(birdData));
    }
    if (localStorage.getItem("fish")) {
      setFishData(JSON.parse(localStorage.getItem("fish")!));
    } else {
      localStorage.setItem("fish", JSON.stringify(fishData));
    }

    if (localStorage.getItem("mammal")) {
      setMammalData(JSON.parse(localStorage.getItem("mammal")!));
    } else {
      localStorage.setItem("mammal", JSON.stringify(mammalData));
    }
  }, []);

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
            localStorage.setItem("birds", JSON.stringify([...birdData, bird]));
          },
          addFish: (fish) => {
            setFishData([...fishData, fish]);
            localStorage.setItem("fish", JSON.stringify([...fishData, fish]));
          },
          addMammal: (mammal) => {
            setMammalData([...mammalData, mammal]);
            localStorage.setItem(
              "mammal",
              JSON.stringify([...mammalData, mammal])
            );
          },
          deleteBird,
          deleteFish,
          deleteMammal,
        }}
      >
        <Component {...pageProps} />
      </AnimalContext.Provider>
    </>
  );
}
