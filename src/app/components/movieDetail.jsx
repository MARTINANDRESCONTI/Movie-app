import React from 'react'

import style from './movieDetail.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function MovieDetail(props) {
  return (    
    <div className={style.container}>
      <div className={style.leftContainer}>
        <h2 className={style.title}>{props.title}</h2>
        <div className={style.actorsContainer}>
            <h3>Actors</h3>
            <p>{props.actors}</p>
          </div>
          <div className={style.directorContainer}>
            <h3>Director</h3>
            <p>{props.director}</p>
          </div>
        <h3 className={style.year}>{props.year}</h3>
        <Link className={style.button} href='/searchmovie'>
          <button className={style.button}>Return to List</button>
        </Link>  
      </div>
      <div className={style.rightContainer}>
        <div className={style.img}>
          {props.poster === "N/A" ?
            <div className={style.notfound}>
              Poster not found...
            </div> :
            <Image     
              className={style.image}        
              src={props.poster} 
              height={800}
              width={700}
              alt='movie poster'  
            />
          }
        </div>
      </div>
    </div>   
  )
}
