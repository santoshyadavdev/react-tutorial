import React from "react";
import Button from "./Button";
import Display from "./Display";

export default function Counter() {
  const [counter, setCounter] = React.useState(5);
  const handleClick = (increment) =>
    setCounter(prevCounter => counter + increment);
  return (
    <div>
      <Button incrementCounter={handleClick} increment={1} />
      <Button incrementCounter={handleClick} increment={5} />
      <Button incrementCounter={handleClick} increment={10} />
      <Button incrementCounter={handleClick} increment={100} />
      <Display counter={counter} />
    </div>
  );
}
