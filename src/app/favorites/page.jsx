"use client"
import React from 'react'

import { useSelector } from 'react-redux'
import Image from 'next/image'
import style from './page.module.css'

export default function Favorites() {
  const movie = useSelector((state)=>state.movieArray.moviesFavourites)
  return (
    <div className={style.container}>
          
      {/* <div className={movie?.length < 5 ? style.container2 : style.container}> */}
        {movie.map(e =>{
          return (<div key={e.imdbID}>
            <Image             
              src={e.Poster} 
              width={300}
              height={300}
              alt='movie poster'  
            />
            <p>{e.Title}</p>          
          </div>)
        })}
        </div>          
    
  )
}
