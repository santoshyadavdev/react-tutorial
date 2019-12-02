import React from "react";

function logRandom() {
  console.log(Math.random());
}

export default function Button(props) {
  // const handleClick = () => setCounter(prevCounter => counter + prevCounter);
  return <button onClick={props.incrementCounter}>+</button>;
}

// export default Button;
