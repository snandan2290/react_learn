const MyEventComp = ({ msg }) => {
  const greet = (msg) => {
    window.alert(`${msg}, Welcome to React`);
  };

  const onHoverGreet = (msg) => {
    window.alert(`Hovered on button, ${msg}`);
  };

  return (
    <div>
      <h1>Event Handling</h1>
      <button type="button" onClick={() => greet(msg)}>
        call greet function
      </button>
      <h1 onMouseOver={() => onHoverGreet("Success")}>Mouse Events</h1>
    </div>
  );
};

export default MyEventComp;
