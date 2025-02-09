// import logo from "./logo.svg";
import "./App.css";
// import ErrorBoundryComp from "./componenets/ErrorBoundryComp";
// import LifeCyleComp from "./componenets/LifeCyleComp";
import UserUnMountComp from "./componenets/UserUnMountComp";
// import WithErroBoundryComp from "./componenets/WithErroBoundryComp";
// import { FormEvalComp } from "./componenets/FormEvalComp";
// /import UseStateHookComp from "./componenets/UseStateHookComp";
// import ClickCounterComp from "./componenets/ClickCounterComp";
// import HoverCounterComp from "./componenets/HoverCounterComp";
// import ConditionalRenComp from "./componenets/ConditionalRenComp";
// import ParentComp from "./componenets/ParentComp";
// import RenderListComp from "./componenets/RenderListComp";
// import ImageToggleComp from "./componenets/ImageToggleComp";
// import CounterComp from "./componenets/CounterComp";
// import InfoComp from "./componenets/InfoComp";
// import MyCssComp from "./componenets/MyCssComp";
// import MyUImagesComp from "./componenets/MyImagesComp";
// import FunctionComp from "./componenets/FunctionComp";
// import ClassComp from "./componenets/ClassComp";
// import MyEventComp from "./componenets/MyEventComp";
// import MyEventClassComp from "./componenets/MyeventClassComp";
// import MyStateComp from "./componenets/MyStateComp";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header> */}
      {/* <FunctionComp empName="John" empId="101" />
      <ClassComp empName="John" empId="101" />
      <MyEventComp msg="Hello"></MyEventComp>
      <MyEventClassComp msg="Hello ClassComp"></MyEventClassComp> */}
      {/* <MyStateComp /> */}
      {/* <InfoComp empName="John" empId="101" /> */}
      {/* <CounterComp /> */}
      {/* <MyCssComp /> */}
      {/* <MyUImagesComp /> */}
      {/* <ImageToggleComp /> */}
      {/* <ConditionalRenComp />
       */}
      {/* <ParentComp /> */}
      {/* <RenderListComp></RenderListComp> */}
      {/* <ClickCounterComp /> */}
      {/* <HoverCounterComp /> */}
      {/* <UseStateHookComp /> */}
      {/* <FormEvalComp /> */}
      {/* <LifeCyleComp color="green"></LifeCyleComp> */}
      {/* Commenting after applying HOC for ErrorBoundary */}
      {/* <ErrorBoundryComp>
        <UserUnMountComp user="Nandan" />
      </ErrorBoundryComp>
      <ErrorBoundryComp>
        <UserUnMountComp user="Krishna" />
      </ErrorBoundryComp>
      <ErrorBoundryComp>
        <UserUnMountComp user="Divya" />
      </ErrorBoundryComp> */}

      <UserUnMountComp user="Nandan" />
      <UserUnMountComp user="Divya" />
      <UserUnMountComp user="Krishna" />
    </div>
  );
}

export default App;
