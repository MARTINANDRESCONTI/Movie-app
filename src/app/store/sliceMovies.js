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
    deleteMovieList: (state,action)=>{
      state.moviesLoaded = []
    },    
    getMovieDetail: (state,action)=>{
      state.movieDetail = action.payload
    },
    addMovieFavorite: (state,action)=>{
      state.moviesFavourites = [action.payload, ...state.moviesFavourites]
    },
    deleteMovieFavourites: (state,action)=>{
      state.moviesFavourites = state.moviesFavourites.filter( e => e.imdbID !== action.payload)
    }
  }

})

export const {
  getMovie, 
  deleteMovieList, 
  getMovieDetail, 
  addMovieFavorite , 
  deleteMovie, 
  deleteMovieFavourites
} = movieSlice.actions
export default movieSlice.reducer