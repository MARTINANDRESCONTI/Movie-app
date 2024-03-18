import React from 'react'

import style from './searchedMovie.module.css'
import Image from 'next/image'
import Link from 'next/link'
import 'animate.css';


export default function SearchedCard(props) {
  return (
    <div className='animate__animated animate__fadeIn'>
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
          <Link className={style.button} href={`/searchmovie/${props.title}`}>
            <button className={style.button}>See details</button>
          </Link>  
        </div>
        <div className={style.rightContainer}>
          <div className={style.img}>
            {props.poster === "N/A" ?
              'there is not any poster of the movie...' :
              <Image             
                src={props.poster} 
                width={300}
                height={300}
                alt='movie poster'  
              />
            }
          </div>
        </div>
      </div>
    </div>
  )
}
