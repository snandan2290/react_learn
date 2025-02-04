import React, { useState } from "react";

export const FormEvalComp = () => {
  const [user, setUser] = useState({ userName: "", UserID: 1 });

  const inputHandler = (event) => {
    // console.log(event.target.type);
    // console.log(event.target.name);
    // console.log(event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const validateUsername = (userName) => {
    console.log("validateUsername", userName);
    const regex = /^[a-zA-Z0-9]{8,20}$/;
    console.log(regex.test(userName));
    return regex.test(userName);
  };

  const checkData = (event) => {
    event.preventDefault();
    if (!validateUsername(user.userName)) {
      window.alert("Invalid userName");
      return false;
    }
  };

  return (
    <div>
      <h1>Form validation Comp</h1>
      <form onSubmit={checkData}>
        <label>Enter Username</label>
        <input
          type="text"
          name="userName"
          value={user.userName}
          onChange={inputHandler}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
