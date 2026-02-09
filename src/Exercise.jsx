import { useState } from "react";

function Counter() {
  let [counter, setState] = useState(0);

  function counterIncrease() {
    setState((counter) => counter + 1);
  }

  function counterReset() {
    setState(0);
  }

  function counterDecrease() {
    if (counter === 0) {
      return;
    }
    setState((counter) => counter - 1);
  }

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p className={counter % 2 === 0 && "blue"}>Num = {counter}</p>
      <button onClick={counterIncrease}>Increase</button>
      <button onClick={counterDecrease}>Decrease</button>
      <button onClick={counterReset}>Reset</button>
    </div>
  );
}

export default Counter;
