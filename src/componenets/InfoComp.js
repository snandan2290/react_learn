import React from "react";

class InfoComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // window.alert("Incremented");
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { empName, empId } = this.props;
    return (
      <div>
        <h1>Info Component</h1>
        <h2>Employee name: {empName}</h2>
        <h2>Employee name: {empId}</h2>
        <div className="counter">
          <h3>Let's Count</h3>
          <h2>{this.state.count}</h2>
          <button type="button" onClick={() => this.increment()}>
            +
          </button>
          <button type="button" onClick={() => this.reset()}>
            reset
          </button>
          <button type="button" onClick={() => this.decrement()}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default InfoComp;
