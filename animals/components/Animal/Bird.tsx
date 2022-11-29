import { Bird } from "../../models/animal.interface";

function DisplayBird({
  name,
  isExtinct,
  isDeadly,
  isDomestic,
  hasFeather,
  canFly,
}: Bird) {
  return (
    <div className="bg-orange-400 rounded-lg">
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
