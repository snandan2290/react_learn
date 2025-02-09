import React from "react";
import { Outlet } from "react-router-dom";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";

const MainDashBoardComp = () => {
  return (
    <div>
      <h1>This is maindashboard</h1>
      <div class="container">
        <div class="card border-primary mb-3">
          <div class="card-header border-primary">
            <NavComp></NavComp>
          </div>
          <div class="card-body border-primary">
            <Outlet></Outlet>
          </div>
          <div class="card-footer border-primary">
            <FooterComp></FooterComp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashBoardComp;
