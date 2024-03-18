"use client"

import React from 'react'
import { useSelector } from 'react-redux';
import fetchApi from './services/fetchApi';
import style from './page.module.css';
import SearchBar from '../components/searchBar';
import SearchedMovie from '../components/searchedMovie';
import Image from 'next/image';
import logo from "../../../public/martinIcon.svg"
import 'animate.css';

export default function page() {
  const movie = useSelector((state)=>state.movieArray.moviesLoaded)
  const response = movie[0]?.Response

  return (
    <div className={style.container}>
      <div className={style.containerheader}>
        <h3 className={style.title}>Get your Movie</h3>
        <div className={style.seachBar}>
          <SearchBar fetchApi={fetchApi}/>
        </div> 
           
        <div className={style.citysearched}>
          {/* {movie.length > 0 && response == 'True' ? 
            <SearchedMovie
              title = {movie[0].Title}
              year = {movie[0].Year} 
              actors = {movie[0].Actors}  
              director = {movie[0].Director} 
              poster = {movie[0].Poster} 
            /> 
          : <>
              {response == 'False' 
                ? <h2>movie not found...</h2>                  
                : <Image 
                  src={logo}
                  width={150}
                  height={150}
                  alt = "logo"
                  className="animate__animated animate__flip animate__infinite animate__slower" 
                />  
              }
          </>
          } */}
        </div>
      </div> 
    </div>
  )
}






