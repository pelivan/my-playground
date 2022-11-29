import React, { useState } from "react";
import { AnimalType } from "../../models/constants";
import Checkbox from "../BaseComponents/Checkbox";
import Dropdown from "../BaseComponents/Dropdown";
import TextInput from "../BaseComponents/TextInput";
import BirdForm from "./BirdForm";
import FishForm from "./FishForm";
import MammalForm from "./MammalForm";

function Form() {
  const [open, setOpenForm] = useState(false);
  const [animalName, setAnimalName] = useState<string | undefined>();
  const [animalType, setAnimalType] = useState<AnimalType | undefined>();
  const openForm = () => setOpenForm(!open);

  const getSpecies = (data: React.SetStateAction<AnimalType | undefined>) => {
    setAnimalType(data);
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
        <form>
          <Dropdown
            dataToMap={AnimalType}
            label={"Select species that you want to add: "}
            func={getSpecies}
          />
          <TextInput
            name={"Enter name of animal"}
            value={animalName}
            setValue={setAnimalName}
          />
          <Checkbox label={"Is this animal extinct?"} />
          <Checkbox label={"Is this animal deadly?"} />
          <Checkbox label={"Is this animal domestic?"} />
          {animalType === "fish" && <FishForm />}
          {animalType === "bird" && <BirdForm />}
          {animalType === "mammal" && <MammalForm />}
        </form>
      )}
    </div>
  );
}

export default Form;
