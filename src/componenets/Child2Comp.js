import React from "react";

const Child2Comp = React.memo((props) => {
  console.log("Child2Comp");
  const { name1, eventData } = props;
  return (
    <div>
      <h1>This is Child2Comp</h1>
      <h1>Name: {name1}</h1>
      <button type="button" onClick={() => eventData()}>
        Update from Fucn child
      </button>
    </div>
  );
});

export default Child2Comp;
