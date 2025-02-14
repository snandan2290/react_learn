import React, { useEffect, useRef, useState } from "react";

const UseRefHookComp = () => {
  const inputRef = useRef();
  const PrevRef = useRef("");

  const [inputText, setInputTextText] = useState("");

  const accessdom = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  const HandleInputText = () => {
    setInputTextText(inputRef.current.value);
  };

  useEffect(() => {
    PrevRef.current = inputText;
  }, [inputText]);

  const prevInputText = PrevRef.current;

  return (
    <div>
      <h1>Thi is UserefHookComp</h1>
      <form>
        <input type="text" name="text1" ref={inputRef}></input>
        <br></br>
        <button type="button" onClick={() => accessdom()}>
          Access DOM
        </button>
      </form>
      <br></br>

      <input
        type="text"
        name="text"
        ref={inputRef}
        onChange={() => HandleInputText()}
        value={inputText}
      ></input>
      <p>Current:{inputText}</p>
      <p>Previous:{prevInputText}</p>
    </div>
  );
};
export default UseRefHookComp;
