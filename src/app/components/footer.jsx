import React from 'react'

import style from './footer.module.css'
import { HiMail } from "react-icons/hi";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.contact}>
        <h3>  
          <HiMail className={style.icon}/>
          martin.a.conti2014@gmail.com
        </h3>
        <h3>
          <PiWhatsappLogoDuotone className={style.icon}/> +54 9 261 611-7708
        </h3>
      </div>
      <div className={style.social}>
        <a href='https://www.linkedin.com/in/martinandresconti/' target='_blank'>
          <IoLogoLinkedin className={style.icon}/>
        </a>
        <a href='https://github.com/MARTINANDRESCONTI' target='_blank'>
          <IoLogoGithub className={style.icon}/>
        </a>
      </div>     
    </div>
  )
}
