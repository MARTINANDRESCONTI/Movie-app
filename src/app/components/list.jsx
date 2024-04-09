import React from 'react'

import style from './list.module.css'
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';

export default function List(props) {
  return ( 
    <div className={style.container}> 
      <div className={style.textButtonContainer}>
        <Link href={`/searchmovie/${props.title}`}>
          <button className={style.buttondetail} onClick={props.getdetail}><FaSearch className={style.icondetail}/></button>      
        </Link>  
        <div className={style.text}>
          <Link href={`/searchmovie/${props.title}`} className={style.title}>
            <h2 className={style.title} onClick={props.getdetail}>{props.title}</h2>
          </Link>
          <p>{props.year}</p>       
        </div> 
      </div>
      <button className={style.button} onClick={props.addfavorite}><FaHeartCirclePlus className={style.icon}/></button>      
    </div>   
  )
}
            
