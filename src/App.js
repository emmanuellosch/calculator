import { useState } from "react";
import "./App.css";
import Number from "./Number";
import Button from "./Button";

function App() {
  const [counter, setCounter] = useState(0);

  function calculate(number) {
    number === 0 ? setCounter(0) : setCounter(counter + number);
  }

  return (
    <div className="App">
      <h1>Calculator</h1>

      <Number counterValue={counter} />
      <Button
        text="-random"
        mathFunction={() => calculate(-Math.ceil(Math.random() * 100))}
      />
      <Button text="-1" mathFunction={() => calculate(-1)} />
      <Button text="-10" mathFunction={() => calculate(-10)} />
      <Button text="+1" mathFunction={() => calculate(1)} />
      <Button text="+10" mathFunction={() => calculate(10)} />
      <Button
        text="+random"
        mathFunction={() => calculate(Math.ceil(Math.random() * 100))}
      />
      <br />
      <Button
        className="button--reset"
        text="Reset"
        mathFunction={() => calculate(0)}
      />
    </div>
  );
}

export default App;
