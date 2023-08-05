import React, { useState } from 'react'
import css from "./Header.module.css"
import Logo1 from "../../assets/consultancy-logo.svg"
import Bars from "../../assets/bars.svg"
import Close from "../../assets/close.png"
import { Link } from 'react-scroll'
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false); 

  const [color,setColor]=useState(false)

  const changeColor=()=>{
    if(window.scrollY>=100){
      setColor(true)
    } else{
      setColor(false)
    }
  }
 window.addEventListener('scroll',changeColor)

 
  return (
    <div className={color? css.bgblack: css.container}>
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
            <ul className={css.rightlist} onClick={()=>setMenuOpened(false)}>
              
              {mobile?  <img className={css.close} src={Close} alt="" /> :""   }      
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