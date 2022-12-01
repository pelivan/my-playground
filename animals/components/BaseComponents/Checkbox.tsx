import React, { useState } from "react";

type CheckboxProps = {
  label: string;
  getCheckBox: (value: boolean) => void;
};

function Checkbox({ label, getCheckBox }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    getCheckBox(isChecked);
  };
  return (
    <div className="mt-5">
      <label>
        <span>{" " + label + " "}</span>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          onInput={onChangeHandler}
        />
      </label>
    </div>
  );
}

export default Checkbox;
