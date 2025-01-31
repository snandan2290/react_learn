import React, { PureComponent } from "react";
import ChildComp from "./ChildComp";
import MyPureComp from "./MyPureComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      empName: "Nandan",
      empID: "INDE0125",
    };
  }

  changData = () => {
    this.setState({
      empName: "Vidyanandna S",
    });
  };

  render() {
    console.log("Parent Comp");
    const { empName, empID } = this.state;
    return (
      <div>
        <h1>This is Parenr Comp</h1>
        <h2>
          Employee Name: <strong>{empName}</strong>
        </h2>
        <h2>
          Employee Name: <strong>{empID}</strong>
        </h2>
        <button type="button" onClick={() => this.changData()}>
          Update Employee
        </button>
        <ChildComp
          name={empName}
          id={empID}
          eventData={this.changData}
        ></ChildComp>

        <MyPureComp name={empName} />
      </div>
    );
  }
}

export default ParentComp;
