import { Button, Grid } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavComp = () => {
  const navigate = useNavigate();

  const handleSingout = () => {
    if (window.confirm("Are you sure to signout??")) {
      sessionStorage.clear("user");
      navigate("/");
    }
  };

  return (
    <div>
      <Link to="images" class="btn btn-primary">
        Images
      </Link>{" "}
      <Link to="parent" class="btn btn-primary">
        Parent
      </Link>{" "}
      <Link to="classcomp/:id" class="btn btn-primary">
        ClassComp
      </Link>{" "}
      <Link to="hook" class="btn btn-primary">
        Hook
      </Link>{" "}
      <Link to="crud" class="btn btn-primary">
        Crud
      </Link>{" "}
      {/* <Link to="/login" class="btn btn-danger" style={{ textAlign: "right" }}>
        Singout
      </Link> */}
      <Button
        variant="contained"
        color="error"
        style={{ float: "right" }}
        onClick={() => handleSingout()}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default NavComp;
