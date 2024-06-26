"use client"
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import style from './page.module.css'
import { FaTrashAlt } from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { deleteMovieFavourites,getMovieDetail } from '../store/sliceMovies';
import { fetchApiDetail } from '../searchmovie/services/fetchApi'
import Link from 'next/link'

export default function Favorites() {
  const movie = useSelector((state)=>state.movieArray.moviesFavourites)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getMovieDetail({}))
  },[])

  function deleteMovie (id) {
    dispatch(deleteMovieFavourites(id))
  }

  async function handleFetchDetail (id) {
      dispatch(getMovieDetail({})) 
      const fetch = await fetchApiDetail(id)
      dispatch(getMovieDetail(fetch)) 
    }

  return (
    <div className={style.container}>
    {(movie.length == 0) ? <div className={style.nomovie}><p>Add a movie...</p></div>:
      <div className={style.movieContainer}>     
          {movie.map(e =>{
            return (
              <div key={e.imdbID} id={e.imdbID}  
              className={style.card}>          
                {e.Poster === "N/A" ?
                  <Link href={`/searchmovie/${e.Title}`}>
                    <div className={style.notfound} onClick={ ()=> handleFetchDetail(e.imdbID)} >
                      <h3>{e.Title}</h3>
                      <p>Poster not found...</p>
                    </div>
                  </Link>
                  : 
                  <Link href={`/searchmovie/${e.Title}`}>
                    <Image 
                      onClick={ ()=> handleFetchDetail(e.imdbID)}
                      className={style.image}            
                      src={e.Poster} 
                      width={280}
                      height={330}
                      alt='movie poster'  
                    />
                  </Link>         
                  }
                <div > 
                  <button onClick={() => deleteMovie(e.imdbID)} className={style.deleteList}><FaTrashAlt /></button> 
                </div>
              </div>
            )
          })
          }
      </div>        
    }
  </div>
  )
}
