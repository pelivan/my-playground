import { useContext } from "react";
import { Bird } from "../../models/animal.interface";
import { AnimalContext } from "../../providers/AnimalContext";

function DisplayBird({
  name,
  isExtinct,
  isDeadly,
  isDomestic,
  hasFeather,
  canFly,
}: Bird) {
  const { deleteBird } = useContext(AnimalContext);

  return (
    <div className="bg-orange-400 rounded-lg box-content h-100 w-100 p-4 border-4 mt-10">
      <button
        onClick={() => {
          deleteBird(name);
        }}
        type="button"
        className="bg-white rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
      <ul>
        <h1 className="text-white text-3xl">{name}</h1>
        <p>{canFly && "This animal can fly."}</p>
        <p>{isExtinct && "This animal is extinct."}</p>
        <p>{isDeadly && "This animal is deadly."}</p>
        <p>{isDomestic && "This animal is domestic."}</p>
        <p>{hasFeather && "This animal has feather."}</p>
      </ul>
    </div>
  );
}

export default DisplayBird;
