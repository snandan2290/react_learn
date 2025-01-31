import React, { PureComponent } from "react";

class MyPureComp extends PureComponent {
  // The constructor is not needed and can be removed

  render() {
    console.log("MypureComp");
    const { name } = this.props;
    return (
      <div>
        <h1>This is Pure Component</h1>
        <h2>Name: {name}</h2>
      </div>
    );
  }
}

export default MyPureComp;
