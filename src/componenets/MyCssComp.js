import React from "react";

import "./MyCustStyle.css";

import modStyel from "./MyCssComp.module.css";

import style from "styled-components";

class MyCssComp extends React.Component {
  inLineStyle = {
    color: "red",
    backgroundColor: "lightblue",
    padding: "10px",
    textAlign: "center",
    textTransform: "camelcase",
    border: "1px solid black",
  };

  Container = style.div`
    color: pink;
    background-color: black;
    padding: 10px;
    text-align: center;
  `;

  render() {
    return (
      <div>
        {/* Inter CSS */}
        {/* <h1
          style={{
            color: "red",
            backgroundColor: "lightblue",
            padding: "10px",
            textAlign: "left",
            textTransform: "uppercase",
          }}
        >
          CSS in React
        </h1> */}
        <h1 style={this.inLineStyle}>CSS in React</h1>
        {/* 2. External CSS style form /.css file */}
        <h1 className="custStyle">External CSS style</h1>
        {/* 3. CSS using module CSS Style */}
        <h1 className={modStyel.custStyle}>Module CSS Style</h1>

        {/* 4. Styled componenets using styled-componenets librarya */}
        <this.Container>
          This is styled-componenets using styled-componenets library
        </this.Container>
      </div>
    );
  }
}
export default MyCssComp;
