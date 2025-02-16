import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { createProduct } from "../features/api/ApiSlice";

export const AddDataListComp = () => {
  const [prdName, setPrdname] = useState("");
  const [prdCompny, setPrdCompny] = useState("");
  const [prdPrc, setPrdPrc] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.api.data);
  const status = useSelector((state) => state.api.status);
  const error = useSelector((state) => state.api.erro);

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      name: prdName,
      price: prdPrc,
      company: prdCompny,
    };
    console.log(product);
    setPrdname("");
    setPrdCompny("");
    setPrdPrc("");

    // saveProduct(product);
    dispatch(createProduct(product));
    navigate("/maindashboard/datalist");
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Submit Product
        </Typography>
        <TextField
          label="Name"
          value={prdName}
          onChange={(e) => setPrdname(e.target.value)}
          required
        />
        <TextField
          label="Price"
          value={prdPrc}
          onChange={(e) => setPrdPrc(e.target.value)}
          required
        />
        <TextField
          label="Company"
          value={prdCompny}
          onChange={(e) => setPrdCompny(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
};
