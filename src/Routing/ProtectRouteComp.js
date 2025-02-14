import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectRouteComp = ({ component: Component, ...rest }) => {
  const nav = useNavigate();
  console.log("Component", Component);

  useEffect(() => {
    if (!sessionStorage.getItem("user")) {
      nav("/");
    }
  });

  return (
    <div>
      <Component></Component>
    </div>
  );
};

export default ProtectRouteComp;
