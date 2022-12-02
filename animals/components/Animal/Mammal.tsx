import { Mammal } from "../../models/animal.interface";
import { useContext } from "react";
import { AnimalContext } from "../../providers/AnimalContext";

function DisplayMammal({
  id,
  name,
  isExtinct,
  isDeadly,
  isDomestic,
  hasHair,
  numberOfLegs,
  isBarking,
}: Mammal) {
  const { deleteMammal } = useContext(AnimalContext);
  return (
    <div className="bg-emerald-400  rounded-lg box-content h-100 w-60 p-4 border-4 mt-10 ">
      <button
        onClick={() => {
          deleteMammal(id);
        }}
        type="button"
        className="animal-button"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <ul className="text-center">
        <h1 className="animal-name">{name}</h1>
        {isExtinct && <p className="animal-prop">This animal is extinct.</p>}
        {isDeadly && <p className="animal-prop">This animal is deadly.</p>}
        {isDomestic && <p className="animal-prop">This animal is domestic.</p>}
        {hasHair && <p className="animal-prop">This animal has hair.</p>}
        {numberOfLegs && (
          <p className="animal-prop">{`This animal has ${numberOfLegs} legs.`}</p>
        )}
        {isBarking && <p className="animal-prop">This animal is barking."</p>}
      </ul>
    </div>
  );
}

export default DisplayMammal;
