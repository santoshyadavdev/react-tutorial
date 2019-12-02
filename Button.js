import React from "react";

function logRandom() {
  console.log(Math.random());
}

export default function Button(props) {
  const handleClick = () => props.incrementCounter(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}

// export default Button;
