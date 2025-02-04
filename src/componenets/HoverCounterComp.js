import React, { Component } from "react";
import HOC from "./HOC";

class HoverCounterComp extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   increment = () => {
  //     this.setState((prevState) => {
  //       return { count: prevState.count + 1 };
  //     });
  //   };

  render() {
    return (
      <div>
        <h1>Hover Counter</h1>
        {/* <h2>Count: {this.state.count}</h2>
        <p onMouseOver={() => this.increment()}>Hover to increment</p> */}
        <h2>Count: {this.props.count}</h2>
        <p onMouseOver={() => this.props.incrementCount()}>
          Hover to increment
        </p>
      </div>
    );
  }
}

export default HOC(HoverCounterComp);
