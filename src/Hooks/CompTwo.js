import React, { useContext } from "react";
import { UserContext } from "./UseContextComp";

export const CompTwo = () => {
  let user = useContext(UserContext);
  return (
    <div>
      <h1>this is CompTwo</h1>
      <h2>My name is: {user}</h2>
    </div>
  );
};
