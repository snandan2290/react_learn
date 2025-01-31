import React, { Component } from "react";

class ConditionalRenComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: false,
    };
  }

  render() {
    // let msg = "";
    // if else statemement
    // if (this.state.isValid) {
    //   return <h1>This is TRUE</h1>;
    // } else {
    //   return <h1>This is FALSE</h1>;
    // }

    // Ternary operator
    // msg = this.state.isValid ? "this is TRUE" : "This is FALSE";
    // return <h1>{msg}</h1>;

    // Short-circuit operator
    // return this.state.isValid && <h1>This is TRUE</h1>;
    return (
      <div>
        <h1>Wlcome, {this.state.isValid || "Guest"}</h1>
      </div>
    );
  }
}

export default ConditionalRenComp;
