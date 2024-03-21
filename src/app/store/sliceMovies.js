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
      state.moviesLoaded = [action.payload, ...state.moviesLoaded]
    },
    
    getMovieDetail: (state,action)=>{
      state.movieDetail = action.payload
    },
    addMovieFavorite: (state,action)=>{},
    deleteMovie: (state,action)=>{}
  }

})

export const {getMovie, getMovieDetail, addMovieFavorite ,deleteMovie} = movieSlice.actions
export default movieSlice.reducer