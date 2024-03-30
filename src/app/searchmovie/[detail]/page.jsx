"use client"
import React from 'react'

import { useSelector } from 'react-redux';
import MovieDetail from '@/app/components/movieDetail';
import style from './page.module.css';

export default function Movie() {
  const movie = useSelector((state)=>state.movieArray.movieDetail)
  
  return (
    <div className={style.container}>
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

