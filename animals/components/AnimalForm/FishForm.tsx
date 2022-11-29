import React, { useState } from "react";
import { FishWaterType, FishColorType } from "../../models/constants";
import Checkbox from "../BaseComponents/Checkbox";
import Dropdown from "../BaseComponents/Dropdown";

function FishForm() {
  const [waterType, setWaterType] = useState("");
  const [colorType, setColorType] = useState("");

  const getWaterType = (data: React.SetStateAction<string>) => {
    setWaterType(data);
  };
  const getColorType = (data: React.SetStateAction<string>) => {
    setColorType(data);
  };
  return (
    <div>
      <Checkbox label={"Is this fish eatable?"} />
      <Dropdown
        dataToMap={FishWaterType}
        label={"This fish lives in: "}
        func={getWaterType}
      />
      <Dropdown
        dataToMap={FishColorType}
        label={"Color of this fish is: "}
        func={getColorType}
      />
    </div>
  );
}

export default FishForm;
