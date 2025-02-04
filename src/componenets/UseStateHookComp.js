import React, { useState } from "react";

const UseStateHookComp = () => {
  const [name, setName] = useState("Nadna");

  const [course, setCourse] = useState([
    { id: 1, name: "java" },
    { id: 2, name: "python" },
  ]);

  const changeName = () => {
    setName("Vidyanandan S");
  };

  return (
    <div>
      <h1>This is UseState Hook</h1>
      <h2>Name: {name} </h2>
      <button onClick={changeName} type="button">
        Change Name
      </button>
      <ul>
        {course.length > 0 ? (
          course.map((c) => <li key={c.id}>{c.name}</li>)
        ) : (
          <h1>No course found !!</h1>
        )}
      </ul>
    </div>
  );
};

export default UseStateHookComp;
