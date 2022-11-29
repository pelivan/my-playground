import Animal from "./Animal";
import { Mammal } from "../../models/animal.interface";

function DisplayMammal(props: Mammal) {
  return (
    <div className="bg-emerald-400 rounded-lg">
      <ul>
        <h1 className="text-white text-3xl">{props.name}</h1>
        <p>{props.isExtinct && "This animal is extinct."}</p>
        <p>{props.isDeadly && "This animal is deadly."}</p>
        <p>{props.isDomestic && "This animal is domestic."}</p>
        <p>{props.hasHair && "This animal has hair."}</p>
        <p>
          {props.numberOfLegs && `This animal has ${props.numberOfLegs} legs.`}
        </p>
        <p>{props.isBarking && "This animal is barking."}</p>
      </ul>
    </div>
  );
}

export default DisplayMammal;
