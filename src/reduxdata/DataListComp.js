import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../features/api/ApiSlice";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
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
import { useNavigate, Link } from "react-router-dom";

export const DataListComp = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.api.data);
  const status = useSelector((state) => state.api.status);
  const error = useSelector((state) => state.api.erro);

  useEffect(() => {
    console.log("useEffect", status);
    if (status === "idle") {
      dispatch(getProducts());
    }
  }, [status, dispatch]);

  const handleOpen = (poductParam) => {
    console.log("poductParam", poductParam.row);
    setOpen(true);
    setOpen(poductParam.row);
  };
  const handleClose = () => setOpen(false);

  const handleEdit = (id) => {
    console.log(`Editing row with id ${id}`);
    // Implement your edit logic here
    nav(`/maindashboard/editdatalist/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
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

  const paginationModel = { page: 0, pageSize: 5 };

  let content;

  if (status === "loading") {
    console.log("status::", status);
    content = "<di>Loading......</di>";
  } else if (status === "success") {
    console.log("statu::", status);
    console.log("data::", data);
    content = (
      <>
        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={data}
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
  }

  return (
    <div>
      <Link to="/maindashboard/adddatalist/" class="btn btn-primary">
        <AddIcon />
      </Link>{" "}
      <h>This is DataListComp</h>
      {content}
    </div>
  );
};
