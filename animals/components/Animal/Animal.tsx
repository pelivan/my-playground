import { mammalsData, birdsData, fishData } from "../../data/animals";
import DisplayBird from "./Bird";
import DisplayFish from "./Fish";
import DisplayMammal from "./Mammal";
import Form from "../AnimalForm/AnimalForm";
import { useState } from "react";

function Animal() {
  const [mammals, setMammals] = useState(mammalsData);
  const [birds, setBirds] = useState(birdsData);
  const [fish, setFish] = useState(fishData);
  const getData = (data: string[]) => {
    console.log(data);
    setBirds(data);
  };

  return (
    <div className="flex  flex-col">
      <Form onSubmit={getData} />
      <div className="flex justify-evenly flex-auto">
        <div>
          {birds.map((bird, key) => (
            <DisplayBird
              key={key}
              hasFeather={bird.hasFeather}
              canFly={bird.canFly}
              isExtinct={bird.isExtinct}
              isDeadly={bird.isDeadly}
              isDomestic={bird.isDomestic}
              name={bird.name}
            />
          ))}
        </div>
        <div>
          {fish.map((sFish, key) => (
            <DisplayFish
              key={key}
              livesIn={sFish.livesIn}
              isEatable={sFish.isEatable}
              colorType={sFish.colorType}
              isExtinct={sFish.isExtinct}
              isDeadly={sFish.isDeadly}
              isDomestic={sFish.isDomestic}
              name={sFish.name}
            />
          ))}
        </div>
        <div>
          {mammals.map((mammal, key) => (
            <DisplayMammal
              key={key}
              hasHair={mammal.hasHair}
              numberOfLegs={mammal.numberOfLegs}
              isBarking={mammal.isBarking}
              isExtinct={mammal.isExtinct}
              isDeadly={mammal.isDeadly}
              isDomestic={mammal.isDomestic}
              name={mammal.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animal;
