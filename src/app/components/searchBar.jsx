"use client"
import React from 'react'
import { FaSearch, FaTimes } from "react-icons/fa";

import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getMovie } from '../store/sliceMovies';
import style from './searchBar.module.css';
import { fetchApi } from '../searchmovie/services/fetchApi';

export default function SearchBar() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch();

    function handleChange (event) {
      return setInput(event.target.value)
  } 
  
    function clearInput () {
      setInput('')
  }
  
    async function handleFetch (e) {
      e.preventDefault();
      const fetch = await fetchApi(input)
      dispatch(getMovie(fetch)) 
      setInput('') 
    }

  return (
    <div>
      <form className={style.labinputcontainer} onSubmit={handleFetch}>
        <div className={style.icondelete} onClick={clearInput}><FaTimes /></div>
        <input 
          className={style.input} 
          type='text' name='input' 
          placeholder='introduce your movie...' 
          onChange={handleChange}
          value={input}
          autoComplete='off'
          required 
        />
        <button className={style.iconsearch}><FaSearch /></button>          
      </form>
    </div>
  )
}
