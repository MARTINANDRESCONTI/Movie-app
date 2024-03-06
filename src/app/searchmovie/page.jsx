"use client"

import React from 'react'
import { FaSearch, FaTimes } from "react-icons/fa";

import { useState } from "react";
import fetchApi from './services/fetchApi';
import { useSelector } from 'react-redux';

import { useDispatch } from "react-redux";
import { getMovie } from "@/app/store/sliceMovies";



export default function page() {
    const dispatch = useDispatch();
  
    // const [movieArray, setMovieArray] = useState('')
    const movie = useSelector((state)=>state.movieArray.moviesLoaded)
    const [inputMovie, setInputMovie] = useState('')

    function handleChange (event) {
      return setInputMovie(event.target.value)
  } 
  
    function clearInput () {
      setInputMovie('')
  }
  
    async function handleFetch (e) {
      e.preventDefault();
      // fetchApi(inputMovie,setMovieArray)
      const fetch = await fetchApi(inputMovie)
      dispatch(getMovie(fetch)) 
      setInputMovie('') 
    }

  return (
    <div>
      <form onSubmit={handleFetch}>
          <button>
            <FaSearch />
          </button>
          <input 
            type='text' name='City' 
            placeholder='introduce your city' 
            onChange={handleChange}
            value={inputMovie}
            autoComplete='off'
            required 
          />
          <div onClick={clearInput}><FaTimes /></div>
      </form>
      <div>
        {/* {movieArray} */}
        {movie}
      </div>
    </div>
  )
}



