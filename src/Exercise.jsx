import { useState } from "react";

function Input() {
  let [input, setInput] = useState("");

  function changeHandler(e) { 
    setInput(e.target.value);
  }

  return (
    <div className="exercise">
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={input} 
        onChange={changeHandler}
      />
      <p>{input}</p>
    </div>
  );
}

export default Input;
