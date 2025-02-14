import React from "react";
import { Outlet, Link } from "react-router-dom";

const ReactHookComp = () => {
  return (
    <div>
      <div class="container">
        <div class="card border-primary mb-3">
          <div class="card-header border-primary">
            <Link to="state" class="btn btn-primary">
              State
            </Link>{" "}
            <Link to="effect" class="btn btn-primary">
              Effect
            </Link>{" "}
            <Link to="ref" class="btn btn-primary">
              Ref
            </Link>
          </div>
          <div class="card-body border-primary">
            <Outlet></Outlet>
          </div>
          <div class="card-footer border-primary"></div>
        </div>
      </div>
    </div>
  );
};

export default ReactHookComp;
