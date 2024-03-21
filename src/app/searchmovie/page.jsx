"use client"

import React from 'react'
import { useSelector } from 'react-redux';
import { fetchApi } from './services/fetchApi';
import { fetchApiDetail } from './services/fetchApi';
import { useDispatch } from 'react-redux';
import { getMovieDetail } from '../store/sliceMovies';
import style from './page.module.css';
import SearchBar from '../components/searchBar';
import Image from 'next/image';
import logo from "../../../public/martinIcon.svg"
import 'animate.css';
import List from '../components/list';

export default function page() {
  const movie = useSelector((state)=>state.movieArray.moviesLoaded[0])
  const dispatch = useDispatch();

  async function handleFetchDetail (id) {
      const fetch = await fetchApiDetail(id)
      dispatch(getMovieDetail(fetch)) 
      // setInput('') 
    }


  return (
    <div className={style.container}>
      <div className={style.containerheader}>
        <h3 className={style.title}>Get your Movie</h3>
        <div className={style.seachBar}>
          <SearchBar fetchApi={fetchApi}/>
        </div> 
      </div>              
      <div className={style.searched}> 
        {movie && movie.Response == 'True' ? 
        <ul className={style.ul}>
          {movie.Search.map(m =><li key = {m.imdbID}>
            <List
              id = {m.imdbID}
              getdetail={() => handleFetchDetail(m.imdbID)} 
              title = {m.Title}
              year = {m.Year}
              addfavorite={() => addfavorite(m.imdbID)}   
            /> 
          </li>
          )}
        </ul>         
        : <>
          {movie?.Response === 'False' 
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
        } 
      </div>
    </div>
  )
}
      






