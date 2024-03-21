"use client"
import React from 'react'

import { useSelector } from 'react-redux';
import MovieDetail from '@/app/components/movieDetail';

export default function Movie() {
  const movie = useSelector((state)=>state.movieArray.movieDetail)
  
  return (
    <div>{movie.Title}
      <MovieDetail
        title = {movie.Title}
        year = {movie.Year} 
        actors = {movie.Actors}  
        director = {movie.Director} 
        poster = {movie.Poster} 
      />
    </div>
  )
}

