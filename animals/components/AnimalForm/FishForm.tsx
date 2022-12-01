import React, { useEffect, useState } from "react";
import { FishWaterType, FishColorType } from "../../models/constants";
import Checkbox from "../BaseComponents/Checkbox";
import Dropdown from "../BaseComponents/Dropdown";

type FishFormProps = {
  getFishData: CallableFunction;
};

function FishForm({ getFishData }: FishFormProps) {
  const [fishData, setFishdata] = useState({
    isEatable: false,
    livesIn: FishWaterType.SALTWATER,
    colorType: FishColorType.WHITE,
  });

  useEffect(() => {
    getFishData(fishData);
  }, [fishData]);

  return (
    <div>
      <Checkbox
        label={"Is this fish eatable?"}
        getCheckBox={(isEatable) => {
          setFishdata({
            ...fishData,
            isEatable,
          });
        }}
      />
      <Dropdown
        dataToMap={FishWaterType}
        label={"This fish lives in: "}
        animalTypeHandler={(livesIn: FishWaterType) => {
          setFishdata({
            ...fishData,
            livesIn,
          });
        }}
      />
      <Dropdown
        dataToMap={FishColorType}
        label={"Color of this fish is: "}
        animalTypeHandler={(colorType: FishColorType) => {
          setFishdata({
            ...fishData,
            colorType,
          });
        }}
      />
    </div>
  );
}

export default FishForm;
