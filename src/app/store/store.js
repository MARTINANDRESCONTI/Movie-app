import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./sliceMovies"

export const store = configureStore({
  reducer:{
    movieArray: movieSlice.reducer,
  },
})