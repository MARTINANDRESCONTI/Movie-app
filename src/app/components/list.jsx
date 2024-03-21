import React from 'react'

import style from './list.module.css'
import { MdPlaylistAddCheck } from "react-icons/md";
import { TbDetails } from "react-icons/tb";
import Link from 'next/link';

export default function List(props) {
  return ( 
    <div className={style.container}> 
      <div className={style.textButtonContainer}>
        <Link href={`/searchmovie/${props.title}`}>
          <button className={style.buttondetail} onClick={props.getdetail}><TbDetails className={style.icondetail}/></button>      
        </Link>  
        <div className={style.text}>
          <h2 className={style.title}>{props.title}</h2>
          <p>{props.year}</p>       
        </div> 
      </div>
      <button className={style.button} onClick={props.addfavorite}><MdPlaylistAddCheck className={style.icon}/> Fav</button>      
    </div>   
  )
}
            
