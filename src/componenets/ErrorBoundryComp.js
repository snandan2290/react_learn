import React, { Component } from "react";

class ErrorBoundryComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    if (isError) {
      return <h2>Somethjing went wrong!!!</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundryComp;
