import React from 'react'
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";

import style from './page.module.css'

export default function Home() {
  return (
    <div className={style.container}>
      <div>
        <h3 className={style.title}>Welcome</h3>
      </div>
      <div className={style.body}>
        <p className={style.p}>
          Hi! This is a movie's searcher app using <TbBrandNextjs /> <FaReact />  <RiJavascriptLine /> <TbBrandRedux />.
        </p>
        <br></br>
        <h3>
          Search the movie of your choise.      
        </h3>
      </div>      
    </div>
  )
}

