import React from "react";
import { Link } from "react-router-dom";

const NavComp = () => {
  return (
    <div>
      <Link to="images" class="btn btn-primary">
        Images
      </Link>
      <Link to="parent" class="btn btn-primary">
        Parent
      </Link>
      <Link to="classcomp/:id" class="btn btn-primary">
        ClassComp
      </Link>
      <Link to="hook" class="btn btn-primary">
        Hook
      </Link>
    </div>
  );
};

export default NavComp;
