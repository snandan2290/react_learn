import React from "react";

class MyStateComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to React State in Class component",
    };
  }

  changeMessage(msg) {
    window.alert("Message Changed");
    this.setState({
      message: msg,
    });
    window.alert(`${this.state.message}`);
  }

  render() {
    return (
      <div>
        <h1>State in Class Component is {this.state.message}</h1>
        <button type="button" onClick={() => this.changeMessage("New Message")}>
          Click to change
        </button>
      </div>
    );
  }
}

export default MyStateComp;
