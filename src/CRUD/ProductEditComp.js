import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Box, Typography, TextField } from "@mui/material";

export const ProductEditComp = () => {
  const [product, setProduct] = useState({
    name: "",
    company: "",
    price: "",
  });
  const { id } = useParams();
  const [prdName, setPrdname] = useState("");
  const [prdCompny, setPrdCompny] = useState("");
  const [prdPrc, setPrdPrc] = useState("");
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:8888/products/${id}`);
      console.log("edit prod:::", res.data);
      setProduct({
        name: res.data.name,
        company: res.data.company,
        price: res.data.price,
      });
      setPrdname(res.data.name);
      setPrdCompny(res.data.company);
      setPrdPrc(res.data.price);
    } catch (error) {
      console.log("product fetch error::", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const updateProduct = async (product) => {
    try {
      const res = await axios.put(
        `http://localhost:8888/products/${id}`,
        product
      );
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

    updateProduct(product);
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
export default ProductEditComp;
