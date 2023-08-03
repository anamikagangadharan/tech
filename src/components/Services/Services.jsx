import React from 'react'
import css from "./Services.module.css"
import S1 from "../../assets/s1.svg"
import S2 from "../../assets/s2.svg"
import S3 from "../../assets/s3.svg"
import S4 from "../../assets/s4.svg"
import S5 from "../../assets/s5.svg"
import { Link } from 'react-scroll'
import { Link  as Link2} from 'react-scroll'
import { Link  as Link3} from 'react-scroll'
import { Link  as Link4} from 'react-scroll'
import { Link  as Link5} from 'react-scroll'

const Services = () => {
  return (
    <div className={css.container} id="services">

     <div className={css.div1}>
      <div className={css.line}></div>
      <div className={css.div1middle}>
        <span>Services</span>
      </div>
      <div className={css.line}></div>
     </div>

     <div className={css.type1}>
        <div className={css.imagesection}>
            <img className={css.serviceimg} src={S1} alt="" />
        </div>
        <div className={css.contentsection}>
            <span className={css.heading}>IT consultancy</span>
            <span className={css.description}>Empowering businesses with expert IT advice and strategic solutions tailored to your objectives</span>
            <Link to="contact" spy={true} smooth={true}>   <button className={css.contactbutton}>CONTACT US</button>  </Link> 
        </div>
     </div>
     <div className={css.type2}>
        <div className={css.imagesection}>
            <img className={css.serviceimg} src={S2} alt="" />
        </div>
        <div className={css.contentsection}>
            <span className={css.heading}>Website Design & Development</span>
            <span className={css.description}>Creating captivating websites that leave a lasting impression, delivering seamless user experiences.</span>
            <Link2 to="contact" spy={true} smooth={true}>   <button className={css.contactbutton}>CONTACT US</button>  </Link2> 
        </div>
     </div>

     <div className={css.type1}>
        <div className={css.imagesection}>
            <img className={css.serviceimg} src={S3} alt="" />
        </div>
        <div className={css.contentsection}>
            <span className={css.heading}>Mobile Application Development</span>
            <span className={css.description}>Crafting intuitive mobile apps for Android and iOS, enhancing customer engagement.</span>
            <Link3 to="contact" spy={true} smooth={true}>   <button className={css.contactbutton}>CONTACT US</button>  </Link3> 
        </div>
     </div>


     <div className={css.type2}>
        <div className={css.imagesection}>
            <img className={css.serviceimg} src={S4} alt="" />
        </div>
        <div className={css.contentsection}>
            <span className={css.heading}>Software Development</span>
            <span className={css.description}>Streamlining operations and boosting productivity through customised software solutions</span>
            <Link4 to="contact" spy={true} smooth={true}>   <button className={css.contactbutton}>CONTACT US</button>  </Link4> 
        </div>
     </div>

     <div className={css.type1}>
        <div className={css.imagesection}>
            <img className={css.serviceimg} src={S5} alt="" />
        </div>
        <div className={css.contentsection}>
            <span className={css.heading}>Digital Branding Services</span>
            <span className={css.description}>Building a strong digital identity, from branding to content strategy, leaving a lasting impact.
</span>
<Link5 to="contact" spy={true} smooth={true}>   <button className={css.contactbutton}>CONTACT US</button>  </Link5> 
        </div>
     </div>







    </div>
  )
}

export default Services
