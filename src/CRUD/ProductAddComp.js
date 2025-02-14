import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import axios from "axios";

const ProductAddComp = () => {
  const [prdName, setPrdname] = useState("");
  const [prdCompny, setPrdCompny] = useState("");
  const [prdPrc, setPrdPrc] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (product) => {
    try {
      const res = await axios.post("http://localhost:8888/products", product);
      console.log("res::", res);
      navigate("/maindashboard/crud");
    } catch (error) {}
  };

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

    saveProduct(product);
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
export default ProductAddComp;
