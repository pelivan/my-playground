import React, { useContext, useState } from "react";
import {
  AnimalType,
  FishColorType,
  FishWaterType,
} from "../../models/constants";
import {
  Bird,
  Fish,
  isBird,
  isFish,
  isMammal,
  Mammal,
} from "../../models/animal.interface";
import Checkbox from "../BaseComponents/Checkbox";
import Dropdown from "../BaseComponents/Dropdown";
import TextInput from "../BaseComponents/TextInput";
import BirdForm from "./BirdForm";
import FishForm from "./FishForm";
import MammalForm from "./MammalForm";
import { AnimalContext } from "../../providers/AnimalContext";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [open, setOpenForm] = useState(false);
  const [animalType, setAnimalType] = useState<AnimalType>();
  const openForm = () => setOpenForm(!open);
  const contextValue = useContext(AnimalContext);

  const [animalForm, setAnimalForm] = useState<Bird | Fish | Mammal>({
    id: "",
    canFly: false,
    isEatable: false,
    colorType: FishColorType.WHITE,
    hasFeather: false,
    hasHair: false,
    isBarking: false,
    isDeadly: false,
    isDomestic: false,
    isExtinct: false,
    livesIn: FishWaterType.SALTWATER,
    name: "",
  });

  const handleAnimalTypeSelect = (data: AnimalType | undefined) => {
    setAnimalType(data);
    contextValue.setAnimalType(data);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    switch (animalType) {
      case AnimalType.BIRD:
        if (isBird(animalForm)) {
          contextValue.addBird({
            id: uuidv4(),
            canFly: animalForm.canFly,
            hasFeather: animalForm.hasFeather,
            isDeadly: animalForm.isDeadly,
            isDomestic: animalForm.isDomestic,
            isExtinct: animalForm.isExtinct,
            name: animalForm.name,
          });
        }
        break;

      case AnimalType.FISH:
        if (isFish(animalForm)) {
          contextValue.addFish({
            id: uuidv4(),
            name: animalForm.name,
            isExtinct: animalForm.isExtinct,
            isDeadly: animalForm.isDeadly,
            isDomestic: animalForm.isDomestic,
            livesIn: animalForm.livesIn,
            isEatable: animalForm.isEatable,
            colorType: animalForm.colorType,
          });
        }
        break;
      case AnimalType.MAMMAL:
        if (isMammal(animalForm)) {
          contextValue.addMammal({
            id: uuidv4(),
            name: animalForm.name,
            isExtinct: animalForm.isExtinct,
            isDeadly: animalForm.isDeadly,
            isDomestic: animalForm.isDomestic,
            hasHair: animalForm.hasHair,
            numberOfLegs: animalForm.numberOfLegs,
            isBarking: animalForm.isBarking,
          });
        }
        break;
    }
  };

  return (
    <div>
      <button
        onClick={openForm}
        className="bg-green-500 hover:bg-green-700 text-white text-center py-2 px-4 rounded"
      >
        Add new animal
      </button>
      {open && (
        <form onSubmit={handleSubmit}>
          <Dropdown
            dataToMap={AnimalType}
            label={"Select species that you want to add: "}
            animalTypeHandler={handleAnimalTypeSelect}
          />
          {animalType && (
            <>
              <TextInput
                name={"Enter name of animal"}
                value={animalForm.name}
                setValue={(name) => {
                  setAnimalForm({
                    ...animalForm,
                    name,
                  });
                }}
              />
              <Checkbox
                label={"Is this animal extinct?"}
                getCheckBox={(isExtinct) => {
                  setAnimalForm({
                    ...animalForm,
                    isExtinct,
                  });
                }}
              />
              <Checkbox
                label={"Is this animal deadly?"}
                getCheckBox={(isDeadly) => {
                  setAnimalForm({
                    ...animalForm,
                    isDeadly,
                  });
                }}
              />
              <Checkbox
                label={"Is this animal domestic?"}
                getCheckBox={(isDomestic) => {
                  setAnimalForm({
                    ...animalForm,
                    isDomestic,
                  });
                }}
              />
              {animalType === AnimalType.FISH && (
                <FishForm
                  getFishData={(fishData: {
                    isEatable: boolean;
                    livesIn: FishWaterType;
                    colorType: FishColorType;
                  }) => {
                    setAnimalForm({
                      ...animalForm,
                      isEatable: fishData.isEatable,
                      livesIn: fishData.livesIn,
                      colorType: fishData.colorType,
                    });
                  }}
                />
              )}
              {animalType === AnimalType.BIRD && (
                <BirdForm
                  getBirdData={(birdData: {
                    hasFeather: boolean;
                    canFly: boolean;
                  }) => {
                    setAnimalForm({
                      ...animalForm,
                      hasFeather: birdData.hasFeather,
                      canFly: birdData.canFly,
                    });
                  }}
                />
              )}
              {animalType === AnimalType.MAMMAL && (
                <MammalForm
                  getMammalData={(mammalData: {
                    hasHair: boolean;
                    isBarking: boolean;
                    numberOfLegs: number;
                  }) => {
                    setAnimalForm({
                      ...animalForm,
                      hasHair: mammalData.hasHair,
                      isBarking: mammalData.isBarking,
                      numberOfLegs: mammalData.numberOfLegs,
                    });
                  }}
                />
              )}
            </>
          )}
          <input
            className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            value="Submit"
          />
        </form>
      )}
    </div>
  );
}

export default Form;
