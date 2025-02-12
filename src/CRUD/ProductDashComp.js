import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductDashComp = () => {
  const [products, setProducts] = useState([]);

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
        </strong>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
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
  );
};

export default ProductDashComp;
