import React from "react";
import Button from "./Button";
import Display from "./Display";

export default function Counter() {
  const [counter, setCounter] = React.useState(5);
  const handleClick = () => setCounter(prevCounter => counter + prevCounter);
  return (
    <div>
      <Button incrementCounter={handleClick}/>
      <Display counter={counter} />
    </div>
  );
}
