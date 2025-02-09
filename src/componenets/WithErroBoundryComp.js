import React, { Component } from "react";
// import ErrorBoundryComp from "./ErrorBoundryComp";

const WithErroBoundryComp = (WrapperComp) => {
  class ErrorBoundryComp extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isError: false,
      };
    }

    static getDerivedStateFromError(error) {
      console.log("getDerivedStateFromError");
      return { isError: true };
    }

    render() {
      const { isError } = this.state;
      console.log("state::", isError);
      console.log("props:::", this.props);
      if (isError) {
        return (
          <WrapperComp {...this.props}>
            <h2>Somethjing went wrong!!!</h2>;
          </WrapperComp>
        );
      }
      return <WrapperComp {...this.props}></WrapperComp>;
    }
  }

  class HOCErrorBoundaryComp extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isError: false,
      };
    }

    static getDerivedStateFromError(error) {
      console.log("getDerivedStateFromError");
      return { isError: true };
    }

    render() {
      console.log("props::22::", this.props);
      return <ErrorBoundryComp {...this.props}></ErrorBoundryComp>;
    }
  }

  return HOCErrorBoundaryComp;
};

export default WithErroBoundryComp;
