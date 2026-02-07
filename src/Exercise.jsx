function Btn() {
  function clickHandler() {
    console.log("Clicked !");
  }

  return <button onClick={clickHandler}>Click</button>;
}

export default Btn;
