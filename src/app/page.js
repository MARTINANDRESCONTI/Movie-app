import React from 'react'
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";


import style from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h3 >Welcome</h3>
      </div>
      <div className={style.body}>
        <h2 className={style.hi}>
          Hi! This is a movies searcher app using <TbBrandNextjs /> <FaReact />  <RiJavascriptLine /> <TbBrandRedux />.
        </h2>
        <Link className={style.option} href='/searchmovie'>
          <h3 >
            Search the movie of your choise.      
          </h3>        
        </Link>
      </div>      
    </div>
  )
}

