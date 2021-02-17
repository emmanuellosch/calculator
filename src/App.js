import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count value is: {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Plus (+1)
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Minus (-1)
      </button>
      <button onClick={() => setCount((prevCount) => prevCount + 10)}>
        Plus (+10)
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 10)}>
        Minus (-10)
      </button>
    </div>
  );
}

export default App;
