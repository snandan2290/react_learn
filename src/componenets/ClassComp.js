import React from "react";

class ClassComp extends React.Component {
  render() {
    const { empName, empId } = this.props;
    return (
      <div>
        <h1>Class Component</h1>
        <h2>Employee name: {empName}</h2>
        <h2>Employee name: {empId}</h2>
      </div>
    );
  }
}

export default ClassComp;
