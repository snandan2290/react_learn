import React from "react";

class MyEventClassComp extends React.Component {
  greet = (msg) => {
    window.alert(`${msg}, Welcome to React Class Comp`);
  };

  onHoverGreet = (...msg) => {
    window.alert(`Hovered on button Classs Comp, ${msg}`);
  };

  render() {
    return (
      <div>
        <h1>Event Handling</h1>
        <button type="button" onClick={() => this.greet("Hello")}>
          call greet function
        </button>
        <h1 onMouseOver={() => this.onHoverGreet("Nandna", "Divya")}>
          Mouse Events
        </h1>
      </div>
    );
  }
}

export default MyEventClassComp;
