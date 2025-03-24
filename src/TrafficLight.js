import { useState } from "react";
import "./TrafficLight.css";

function TrafficLight() {
  const [colors, setColors] = useState(["red", "yellow", "green"]);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const toggleColor = (index) => {
    setCurrentColorIndex(index);
  };

  const addPurple = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  };

  const cycleColors = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % 3); // Only toggles between 0, 1, 2 (red, yellow, green)
  };

  return (
    <div className="traffic-light">
      {colors.map((color, index) => (
        <div
          key={color}
          className={`light ${color} ${
            currentColorIndex === index ? "selected" : ""
          }`}
          onClick={() => toggleColor(index)}
        ></div>
      ))}

      <button onClick={cycleColors}>Toggle Color</button>
      <button onClick={addPurple}>Add Purple</button>
    </div>
  );
}

export default TrafficLight;
