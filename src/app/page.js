import React from 'react'
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";


import style from './page.module.css'
import Link from 'next/link';
import "animate.css";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h3 className="animate__animated animate__fadeInDown animate__slow">Welcome</h3>
      </div>
      <div className={style.body}>
        {/* <div className="animate__animated animate__fadeIn animate__slower"> */}
        <div>  
          <p className={style.p}>
            Hi! This is a movie's searcher app using <TbBrandNextjs /> <FaReact />  <RiJavascriptLine /> <TbBrandRedux />.
          </p>
        </div>
        <br></br>
        {/* <div className="animate__animated animate__fadeInUp animate__slow"> */}
        <div> 
          <Link className={style.option} href='/searchmovie'>
            <h3 >
              Search the movie of your choise.      
            </h3>        
          </Link>
        </div>
      </div>      
    </div>
  )
}

