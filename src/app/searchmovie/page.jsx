"use client"

import React from 'react'
import { FaSearch, FaTimes } from "react-icons/fa";

import { useState } from "react";
import fetchApi from './services/fetchApi';



export default function page() {
  
    const [movieArray, setMovieArray] = useState('')
    const [inputMovie, setInputMovie] = useState('')

    function handleChange (event) {
      return setInputMovie(event.target.value)
  } 
  
    function clearInput () {
      setInputMovie('')
  }
  
    function handleFetch (e) {
      e.preventDefault();
      fetchApi(inputMovie,setMovieArray)
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
        {movieArray}
      </div>
    </div>
  )
}



