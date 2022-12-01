import { useEffect, useState } from "react";
import { AnimalType } from "../../models/constants";
import Checkbox from "../BaseComponents/Checkbox";

type BirdFormProps = {
  getBirdData: CallableFunction;
};

function BirdForm({ getBirdData }: BirdFormProps) {
  const [birdData, setBirdData] = useState({
    hasFeather: false,
    canFly: false,
  });

  useEffect(() => {
    getBirdData(birdData);
  }, [birdData]);

  return (
    <div>
      <Checkbox
        label={"Does this bird have feather?"}
        getCheckBox={(hasFeather) => {
          setBirdData({
            ...birdData,
            hasFeather,
          });
        }}
      />
      <Checkbox
        label={"Can this bird fly?"}
        getCheckBox={(canFly) => {
          setBirdData({
            ...birdData,
            canFly,
          });
        }}
      />
    </div>
  );
}

export default BirdForm;
