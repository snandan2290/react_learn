import React from "react";

const ChildComp = React.memo((props) => {
  console.log("Child Component");
  const { name, id, eventData } = props;
  return (
    <div>
      <h1>This is Child Component</h1>
      <h2>
        Employee Name: {name} | ID: {id}
      </h2>
      <button type="button" onClick={() => eventData()}>
        Change Data
      </button>
    </div>
  );
});

export default ChildComp;
