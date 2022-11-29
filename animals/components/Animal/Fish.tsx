import { Fish } from "../../models/animal.interface";

function DisplayFish(props: Fish) {
  return (
    <div className="bg-cyan-600 rounded-lg">
      <ul>
        <h1 className="text-white text-3xl">{props.name}</h1>
        <p>{props.isExtinct && "This animal is extinct."}</p>
        <p>{props.isDeadly && "This animal is deadly."}</p>
        <p>{props.isDomestic && "This animal is domestic."}</p>
        <p>{props.livesIn && `This animal lives in ${props.livesIn}`}</p>
        <p>{props.isEatable && "This animal is eatable."}</p>
        <p>{props.colorType && `This animal is ${props.colorType} color.`}</p>
      </ul>
    </div>
  );
}

export default DisplayFish;
