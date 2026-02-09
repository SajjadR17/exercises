import { useState } from "react";

function Btn() {
  let [state, setState] = useState(false);

  function clickHandler() {
    setState((state) => !state);
  }

  return (
    <>
      {state ? <p>ON</p> : <p>OFF</p>}
      <button onClick={clickHandler}>{state ? "OFF" : "ON"}</button>
    </>
  );
}

export default Btn;
