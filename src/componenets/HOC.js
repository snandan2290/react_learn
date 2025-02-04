import React, { Component } from "react";

const HOC = (WrapperComp) => {
  class HocComp extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    render() {
      return (
        <WrapperComp
          {...this.props}
          count={this.state.count}
          incrementCount={this.incrementCount}
        ></WrapperComp>
      );
    }
  }

  return HocComp;
};

export default HOC;
