import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./sliceMovies"

export const store = configureStore({
  reducer:{
    movieArray: movieReducer,
  },
})