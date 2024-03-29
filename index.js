import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Counter from "./Counter";
import Card from './Card/Card';
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Counter />
        <Hello name={this.state.name} />
        <Card />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
