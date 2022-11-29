import { useState } from "react";
import Checkbox from "../BaseComponents/Checkbox";
import TextInput from "../BaseComponents/TextInput";

function MammalForm() {
  const [numberOfLegs, setNumberofLegs] = useState("");

  return (
    <div>
      <Checkbox label={"Does this mammal have hair?"} />
      <Checkbox label={"Does this mammal bark?"} />
      <TextInput
        name={"Enter number of legs"}
        value={numberOfLegs}
        setValue={setNumberofLegs}
      />
    </div>
  );
}

export default MammalForm;
