import { useState } from "react";

function Counter() {
  let [counter, setState] = useState(0);

  function counterIncrease() {
    setState((counter) => counter + 1);
  }

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p>Num = {counter}</p>
      <button onClick={counterIncrease}>Increase</button>
    </div>
  );
}

export default Counter;
