import React, { createContext, useState } from "react";
import { CompOne } from "./CompOne";

export const UserContext = createContext();

const UseContextComp = () => {
  const [name, setName] = useState("Nandan");

  return (
    <div>
      <UserContext.Provider value={name}>
        <h1>This is UseContectComp</h1>
        <h2>My name is : {name}</h2>
        <br></br>
        <CompOne></CompOne>
      </UserContext.Provider>
    </div>
  );
};
export default UseContextComp;
