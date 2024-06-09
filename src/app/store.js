import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../movies/userSlice";
import { movieSlice } from "../movies/MovieSlice";






export const store = configureStore({
  reducer: {
    [movieSlice.name]: movieSlice.reducer,
    [userSlice.name]: userSlice.reducer
  }
});  










