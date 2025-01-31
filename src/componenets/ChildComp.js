import React, { useState, useCallback } from "react";
import Child2Comp from "./Child2Comp";

const ChildComp = React.memo((props) => {
  console.log("Child Component");
  const { name, id, eventData } = props;

  const [name1, SetName1] = useState(name);

  const handleClick = useCallback(() => {
    SetName1("Vidyanandna Sampath Krishna");
  }, []);

  return (
    <div>
      <h1>This is Child Component</h1>
      <h2>
        Employee Name: {name} | {name1} | ID: {id}
      </h2>
      <button type="button" onClick={() => eventData()}>
        Change Data
      </button>
      <Child2Comp name1={name} eventData={handleClick}></Child2Comp>
    </div>
  );
});

export default ChildComp;
