import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getProduct, updateProduct } from "../features/api/ApiSlice";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import newStyled from "@emotion/styled";
import { compose } from "redux";

export const EditDataListComp = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.api.status);
  const data = useSelector((state) => state.api.data);
  const [product, setProduct] = useState({
    id: null,
    name: "",
    company: "",
    price: "",
  });
  const [prdName, setPrdname] = useState("");
  const [prdCompny, setPrdCompny] = useState("");
  const [prdPrc, setPrdPrc] = useState("");

  useEffect(() => {
    getProduct(id);
  }, [id, dispatch]);

  useEffect(() => {
    if (data) {
      console.log("data", id);
      console.log("data", data);
      const newData =
        data.length > 0 &&
        data.find((item) => parseInt(item.id) === parseInt(id));
      console.log("newData", newData);
      if (newData) {
        console.log("newdata", newData);
        // setProduct(newData);
        setPrdname(newData.name);
        setPrdPrc(newData.price);
        setPrdCompny(newData.company);
      }
    }
  }, [data, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("id", id, "name", prdName);
    const product = {
      id: id,
      name: prdName,
      price: prdPrc,
      company: prdCompny,
    };
    console.log("product", product);
    dispatch(updateProduct({ id, product }));
    nav("/maindashboard/datalist");
    setPrdname("");
    setPrdCompny("");
    setPrdPrc("");
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

export default EditDataListComp;
