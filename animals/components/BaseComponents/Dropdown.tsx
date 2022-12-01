import React from "react";
import { AnimalType, FishColorType } from "../../models/constants";

type DropdownProps = {
  dataToMap: Record<string, string>;
  label: string;
  func: (value: AnimalType | undefined) => void;
};

function Dropdown({ dataToMap, label, func }: DropdownProps) {
  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    func(event.target.value as AnimalType);
  };
  return (
    <div className="mt-5">
      <label htmlFor="livesIn">{label}</label>
      <select
        onChange={onChangeHandler}
        name="livesIn"
        id="livesIn"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled selected hidden>
          Please choose...
        </option>
        {Object.values(dataToMap).map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
