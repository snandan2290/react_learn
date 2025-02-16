import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URl = "http://localhost:8888/products";

const getProducts = createAsyncThunk("api/fetchData", async () => {
  try {
    const res = await axios.get(API_URl);
    console.log("getProducts", res.data);
    return res.data;
  } catch (error) {
    console.log("Error in fetching products", error.message);
  }
});

const getProduct = createAsyncThunk("api/fetchSingleData", async (id) => {
  try {
    const res = await axios.get(`API_URl/${id}`);
    console.log("getProducts", res.data);
    return res.data;
  } catch (error) {
    console.log("Error in fetching products", error.message);
  }
});

const deleteProduct = createAsyncThunk("api/deleteData", async (id) => {
  try {
    await axios.delete(`${API_URl}/${id}`);
    return id;
  } catch (error) {
    console.log("Error in fetching products", error.message);
  }
});

const updateProduct = createAsyncThunk(
  "api/updateData",
  async ({ id, product }) => {
    try {
      console.log("updateProduct");
      console.log("updateProduct::id::", id);
      console.log("updateProduct::product::", product);
      const res = await axios.put(`${API_URl}/${id}`, product);
      return res.data;
    } catch (error) {
      console.log("Error in fetching products", error.message);
    }
  }
);

const createProduct = createAsyncThunk("api/createData", async (data) => {
  try {
    const res = await axios.post(`${API_URl}`, data);
    console.log("createProducts", res.data);
    return res.data;
  } catch (error) {
    console.log("Error in fetching products", error.message);
  }
});

const apiSlice = createSlice({
  name: "api",
  initialState: {
    data: [],
    status: "idle", // "idle" |"loading" | "success" | "failed"
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    //All records
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    // Single record
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //Delet a record
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.data = state.data.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    // Insert a record
    builder
      .addCase(createProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.data.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    // Updtae a record
    builder
      .addCase(updateProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.data = state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export { getProducts, deleteProduct, createProduct, getProduct, updateProduct };

export default apiSlice.reducer;
