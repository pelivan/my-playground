import { useState } from "react";

type CheckboxProps = {
  label: string;
};

function Checkbox({ label }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="mt-5">
      <label>
        <span>{" " + label + " "}</span>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
      </label>
    </div>
  );
}

export default Checkbox;
