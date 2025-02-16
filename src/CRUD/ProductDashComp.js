import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import AddIcon from "@mui/icons-material/Add";

// Model pop-up window
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Link, useNavigate } from "react-router-dom";

const ProductDashComp = () => {
  const [products, setProducts] = useState([]);

  const nav = useNavigate();

  // Model pop-up window
  const [open, setOpen] = React.useState(false);
  const handleOpen = (poductParam) => {
    console.log("poductParam", poductParam.row);
    setOpen(true);
    setOpen(poductParam.row);
  };
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  // Model pop-up window

  const getProducts = async () => {
    try {
      const prodRes = await axios.get("http://localhost:8888/products");
      console.log("prodRes", prodRes.data);
      setProducts(prodRes.data);
    } catch (error) {
      console.log("Product fetch error:", error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleEdit = (id) => {
    console.log(`Editing row with id ${id}`);
    // Implement your edit logic here
    nav(`/maindashboard/productedit/${id}`);
  };

  const handleDelete = async (id) => {
    window.alert("id::", id);
    console.log("id::", id);
    // setProducts(products.filter((row) => row.id !== id));
    try {
      await axios.delete(`http://localhost:8888/products/${id}`);
      window.alert(`Pruduct[${id}] deleted sucessfully!!`);
      getProducts();
    } catch (error) {
      console.log("Product delete error:", error.message);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "price", headerName: "Price", width: 130 },
    {
      field: "company",
      headerName: "Company",
      width: 130,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <strong>
          <IconButton
            onClick={() => handleEdit(params.id)}
            color="primary"
            aria-label="edit"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => handleDelete(params.id)}
            color="secondary"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={() => handleOpen(params)}
            color="secondary"
            aria-label="delete"
          >
            <PreviewIcon />
          </IconButton>
        </strong>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <>
      <Link to="/maindashboard/productAdd" class="btn btn-primary">
        <AddIcon />
      </Link>{" "}
      <br></br>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
      {/* // Modal pop-up window */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {open.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {open.company} | {open.price}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ProductDashComp;
