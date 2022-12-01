import { useEffect, useState } from "react";
import Checkbox from "../BaseComponents/Checkbox";
import TextInput from "../BaseComponents/TextInput";

type MammalFormProps = {
  getMammalData: CallableFunction;
};

function MammalForm({ getMammalData }: MammalFormProps) {
  const [mammalData, setMammalData] = useState({
    hasHair: false,
    isBarking: false,
    numberOfLegs: "0",
  });

  useEffect(() => {
    getMammalData(mammalData);
  }, [mammalData]);

  return (
    <div>
      <Checkbox
        label={"Does this mammal have hair?"}
        getCheckBox={(hasHair) => {
          setMammalData({
            ...mammalData,
            hasHair,
          });
        }}
      />
      <Checkbox
        label={"Does this mammal bark?"}
        getCheckBox={(isBarking) => {
          setMammalData({
            ...mammalData,
            isBarking,
          });
        }}
      />
      <TextInput
        name={"Enter number of legs"}
        value={mammalData.numberOfLegs}
        setValue={(numberOfLegs) => {
          setMammalData({
            ...mammalData,
            numberOfLegs,
          });
        }}
      />
    </div>
  );
}

export default MammalForm;
