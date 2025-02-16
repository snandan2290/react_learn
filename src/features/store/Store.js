import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../api/ApiSlice";

const store = configureStore({
  reducer: {
    api: apiSlice,
  },
});

export default store;
