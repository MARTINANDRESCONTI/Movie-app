import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {}
};

export const movieSlice = createSlice({
  name: 'movieArray',
  initialState,
  reducers:{
    getMovie: (state,action)=>{
      state.moviesLoaded = [...state.moviesLoaded, action.payload]
    },
    addMovieFavorite: (state,action)=>{},
    deleteMovie: (state,action)=>{}
  }

})

export const {getMovie, addMovieFavorite ,deleteMovie} = movieSlice.actions
export default movieSlice.reducer