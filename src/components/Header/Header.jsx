import React, { useState } from 'react'
import css from "./Header.module.css"
import Logo1 from "../../assets/invicious-tech-logo.svg"
import Bars from "../../assets/bars.svg"
import { Link } from 'react-scroll'
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false); 


 
  return (
    <div className={css.container}>
        <div className={css.left}>
            <img src={Logo1} alt="" />
         
        </div>
        {/* <div className={css.right}> */}


        {menuOpened === false && mobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
          <img className={css.bars}
            src={Bars}
            alt=""
           
          />
        </div>
      ) : (
            <ul className={css.rightlist}>
              
                   <li><Link to="home" onClick={()=>setMenuOpened(false)} spy={true} smooth={true}>Home</Link></li>
                <li><Link to="about" onClick={()=>setMenuOpened(false)} spy={true} smooth={true}>About</Link></li>
                <li><Link to="services" onClick={()=>setMenuOpened(false)} spy={true} smooth={true}>Services</Link></li>
                <li><Link to="contact" onClick={()=>setMenuOpened(false)} spy={true} smooth={true}>Contact Us</Link></li>
              
            </ul>)}
            {/* </div> */}
        
    </div>
  )
}

export default Header