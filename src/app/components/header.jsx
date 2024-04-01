import Image from 'next/image';
import martinIcon from '../../../public/martinIcon.svg';
import style from './header.module.css'
import Link from 'next/link'


export default function Header() {  
  
  return ( 
      <header className={style.header}> 
        <div className={style.title}>
          <a className={style.icon} href='https://martin-conti-portfolio.vercel.app/' target='_blank'>
            < Image
              src={martinIcon}
              className={style.logo}
              alt="logo"
            /> 
          </a>
          <h1>Movie App</h1>      
        </div> 
        <div className={style.options}>
          <Link className={style.option} href='/'><div>Home</div></Link>
          <Link  className={style.option} href='/searchmovie'><div>Search</div></Link>  
          <Link className={style.option} href='/favorites'><div >Favorites</div> </Link>             
        </div>   
      </header>
  )
}

