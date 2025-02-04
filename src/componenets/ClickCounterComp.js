import React, { Component } from "react";
import HOC from "./HOC";

class ClickCounterComp extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // incrementCount = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  render() {
    return (
      <div>
        <h1>Click Counter</h1>
        {/* <h2>Count: {this.state.count}</h2>
        <button type="button" onClick={() => this.incrementCount()}>
          Click to increment
        </button> */}
        <h2>Count: {this.props.count}</h2>
        <button type="button" onClick={() => this.props.incrementCount()}>
          Click to increment
        </button>
      </div>
    );
  }
}

export default HOC(ClickCounterComp);
