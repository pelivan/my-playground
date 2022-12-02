import DisplayBird from "./Bird";
import DisplayFish from "./Fish";
import DisplayMammal from "./Mammal";
import Form from "../AnimalForm/AnimalForm";
import { useContext } from "react";
import { AnimalContext } from "../../providers/AnimalContext";
import { v4 as uuidv4 } from "uuid";
import DeleteAnimals from "../AnimalForm/DeleteAnimals";

function Animal() {
  const { birdData, fishData, mammalData } = useContext(AnimalContext);

  return (
    <div className="flex  flex-col">
      <Form />
      <DeleteAnimals />

      <div className="flex justify-evenly flex-auto ">
        <div>
          {birdData.map((bird, key) => (
            <DisplayBird
              key={key}
              hasFeather={bird.hasFeather}
              canFly={bird.canFly}
              isExtinct={bird.isExtinct}
              isDeadly={bird.isDeadly}
              isDomestic={bird.isDomestic}
              name={bird.name}
              id={bird.id}
            />
          ))}
        </div>
        <div>
          {fishData.map((sFish, key) => (
            <DisplayFish
              key={key}
              livesIn={sFish.livesIn}
              isEatable={sFish.isEatable}
              colorType={sFish.colorType}
              isExtinct={sFish.isExtinct}
              isDeadly={sFish.isDeadly}
              isDomestic={sFish.isDomestic}
              name={sFish.name}
              id={sFish.id}
            />
          ))}
        </div>
        <div>
          {mammalData.map((mammal, key) => (
            <DisplayMammal
              key={key}
              hasHair={mammal.hasHair}
              numberOfLegs={mammal.numberOfLegs}
              isBarking={mammal.isBarking}
              isExtinct={mammal.isExtinct}
              isDeadly={mammal.isDeadly}
              isDomestic={mammal.isDomestic}
              name={mammal.name}
              id={mammal.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animal;
