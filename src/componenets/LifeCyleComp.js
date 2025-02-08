import React, { Component } from "react";

class LifeCyleComp extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      classState: "set",
    };
  }

  //   static getDerivedStateFromProps(props) {
  //     console.log("getDerivedStateFromProps");
  //     return {
  //       classState: props.color,
  //     };
  //   }

  // componentDidMount() {
  //   console.log("componentDidMount");
  //   setTimeout(() => {
  //     this.setState({ classState: "Set to original" });
  //   }, 2000);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // return false;
    return nextState.classState !== this.state.classState;
  }

  getSnapshotBeforeUpdate(prevProps, PrevState) {
    document.getElementById(
      "d1"
    ).innerHTML = `Before updtae classState::${PrevState.classState}`;
    return null;
  }

  componentDidUpdate() {
    document.getElementById(
      "d2"
    ).innerHTML = `After update classState::${this.state.classState}`;
  }

  changeState() {
    this.setState({ classState: "Updtae tested" });
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>This is class life cycle comp</h1>
        <h2>Class State is: {this.state.classState}</h2>
        <div id="d1"></div>
        <div id="d2"></div>
        <button type="button" onClick={() => this.changeState()}>
          Change state
        </button>
      </div>
    );
  }
}

export default LifeCyleComp;
