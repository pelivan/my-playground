import React from "react";
import { AnimalType } from "../../models/constants";

type DropdownProps = {
  dataToMap: Record<string, string>;
  label: string;
  animalTypeHandler: CallableFunction;
};

function Dropdown({ dataToMap, label, animalTypeHandler }: DropdownProps) {
  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    animalTypeHandler(event.target.value as AnimalType);
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
        {Object.values(dataToMap).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
