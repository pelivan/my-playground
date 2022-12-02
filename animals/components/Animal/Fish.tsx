import { useContext } from "react";
import { Fish } from "../../models/animal.interface";
import { AnimalContext } from "../../providers/AnimalContext";

function DisplayFish({
  id,
  livesIn,
  isEatable,
  colorType,
  isExtinct,
  isDeadly,
  isDomestic,
  name,
}: Fish) {
  const { deleteFish } = useContext(AnimalContext);
  return (
    <div className="bg-cyan-600  rounded-lg box-content h-100 w-60 p-4 border-4 mt-10 ">
      <button
        onClick={() => {
          deleteFish(id);
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

        {isDomestic && <p className="animal-prop">This animal is domestic. </p>}

        {livesIn && (
          <p className="animal-prop">{`This animal lives in ${livesIn}`} </p>
        )}

        {isEatable && <p className="animal-prop">This animal is eatable.</p>}

        {colorType && (
          <p className="animal-prop">{`This animal is ${colorType} color.`} </p>
        )}
      </ul>
    </div>
  );
}

export default DisplayFish;
