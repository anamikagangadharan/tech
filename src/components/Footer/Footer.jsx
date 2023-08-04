import React from 'react'
import css from "./Footer.module.css"
import Logo1 from "../../assets/invicious-tech-logo.svg"
import Map from "../../assets/location0.svg"
import Message from "../../assets/message0.svg"
import Call from "../../assets/phone0.svg"
import { Link } from 'react-scroll'

const Footer=()=>{
    const mobile = window.innerWidth <= 768 ? true : false;

    return(
        <div className={css.container} id='contact'>

            <div className={css.div1}>
            {/* left section */}
                <div className={css.div1left}>
                    <img className={css.logo1} src={Logo1} alt="" />
                    <span className={css.text1}>"Transforming Technology, Empowering Success."</span>
                    <div className={css.icons}>
                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="003-twitter">
<path id="Path" d="M22 2.67863C21.1819 3.0375 20.3101 3.27538 19.4013 3.39088C20.3363 2.83263 21.0499 1.95537 21.3854 0.898C20.5136 1.41775 19.5511 1.78488 18.5254 1.98975C17.6976 1.10838 16.5179 0.5625 15.2309 0.5625C12.7339 0.5625 10.7236 2.58925 10.7236 5.07387C10.7236 5.43138 10.7539 5.77513 10.8281 6.10238C7.0785 5.9195 3.76062 4.12238 1.53175 1.38475C1.14262 2.05988 0.914375 2.83262 0.914375 3.6645C0.914375 5.2265 1.71875 6.61112 2.91775 7.41275C2.19312 7.399 1.48225 7.18863 0.88 6.85725C0.88 6.871 0.88 6.88888 0.88 6.90675C0.88 9.0985 2.44338 10.919 4.4935 11.3384C4.12638 11.4388 3.72625 11.4869 3.311 11.4869C3.02225 11.4869 2.73075 11.4704 2.45712 11.4099C3.0415 13.196 4.69975 14.5091 6.6715 14.5518C5.137 15.7521 3.18863 16.4754 1.07938 16.4754C0.7095 16.4754 0.35475 16.4589 0 16.4135C1.99787 17.7019 4.36563 18.4375 6.919 18.4375C15.2185 18.4375 19.756 11.5625 19.756 5.60325C19.756 5.40387 19.7491 5.21137 19.7395 5.02025C20.6346 4.385 21.3867 3.59163 22 2.67863Z" fill="white"/>
</g>
</svg>



<svg width="25" height="20" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M13.5869 0H13.7371C15.1243 0.00507163 22.1532 0.0557882 24.0484 0.566332C24.6213 0.722147 25.1434 1.02586 25.5624 1.44712C25.9815 1.86838 26.2828 2.39243 26.4363 2.9669C26.6068 3.60931 26.7266 4.45965 26.8076 5.33704L26.8245 5.51286L26.8616 5.9524L26.8751 6.12821C26.9848 7.67337 26.9983 9.12047 27 9.4366V9.5634C26.9983 9.89136 26.9831 11.4365 26.8616 13.0459L26.8481 13.2234L26.8329 13.3992C26.7485 14.3662 26.6237 15.3265 26.4363 16.0331C26.2833 16.6078 25.9821 17.1321 25.563 17.5534C25.1439 17.9748 24.6215 18.2783 24.0484 18.4337C22.0908 18.9611 14.6501 18.9983 13.619 19H13.3793C12.8579 19 10.7011 18.9899 8.43972 18.9121L8.15282 18.9019L8.006 18.8952L7.71742 18.8834L7.42884 18.8715C5.5556 18.7887 3.7718 18.6551 2.94993 18.432C2.37698 18.2768 1.85479 17.9735 1.43569 17.5525C1.01659 17.1314 0.715286 16.6075 0.561973 16.0331C0.374648 15.3281 0.249766 14.3662 0.165385 13.3992L0.151884 13.2217L0.138384 13.0459C0.0550963 11.9004 0.00894408 10.7525 0 9.60397L0 9.39603C0.00337521 9.03257 0.0168761 7.77649 0.108007 6.39025L0.11982 6.21612L0.124883 6.12821L0.138384 5.9524L0.175511 5.51286L0.192387 5.33704C0.273392 4.45965 0.393212 3.60762 0.56366 2.9669C0.716715 2.3922 1.0179 1.8679 1.43702 1.44657C1.85614 1.02524 2.37846 0.721679 2.95162 0.566332C3.77349 0.346561 5.55728 0.211318 7.43053 0.126791L7.71742 0.114957L8.00769 0.104814L8.15282 0.0997422L8.4414 0.0879085C10.0475 0.0361349 11.6543 0.00739251 13.2612 0.00169062H13.5869V0ZM10.8007 5.42664V13.5717L17.8161 9.50084L10.8007 5.42664Z" fill="white"/>
</svg>


<svg width="25" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M11.4969 7.83177C9.38527 7.83177 7.66201 9.48013 7.66201 11.5C7.66201 13.5199 9.38527 15.1682 11.4969 15.1682C13.6085 15.1682 15.3318 13.5199 15.3318 11.5C15.3318 9.48013 13.6085 7.83177 11.4969 7.83177ZM22.9987 11.5C22.9987 9.98097 23.0131 8.47571 22.9239 6.95943C22.8347 5.19824 22.4147 3.63519 21.0683 2.34732C19.7191 1.05669 18.0879 0.657674 16.2467 0.572367C14.6586 0.487059 13.085 0.500819 11.4998 0.500819C9.91174 0.500819 8.33808 0.487059 6.75292 0.572367C4.91171 0.657674 3.27763 1.05945 1.93125 2.34732C0.581988 3.63794 0.164838 5.19824 0.0756548 6.95943C-0.0135288 8.47846 0.000855714 9.98373 0.000855714 11.5C0.000855714 13.0163 -0.0135288 14.5243 0.0756548 16.0406C0.164838 17.8018 0.584864 19.3648 1.93125 20.6527C3.28051 21.9433 4.91171 22.3423 6.75292 22.4276C8.34096 22.5129 9.91462 22.4992 11.4998 22.4992C13.0878 22.4992 14.6615 22.5129 16.2467 22.4276C18.0879 22.3423 19.7219 21.9406 21.0683 20.6527C22.4176 19.3621 22.8347 17.8018 22.9239 16.0406C23.016 14.5243 22.9987 13.019 22.9987 11.5ZM11.4969 17.1441C8.23164 17.1441 5.59641 14.6234 5.59641 11.5C5.59641 8.37664 8.23164 5.85594 11.4969 5.85594C14.7622 5.85594 17.3974 8.37664 17.3974 11.5C17.3974 14.6234 14.7622 17.1441 11.4969 17.1441ZM17.6391 6.94292C16.8767 6.94292 16.261 6.35402 16.261 5.62478C16.261 4.89554 16.8767 4.30664 17.6391 4.30664C18.4014 4.30664 19.0171 4.89554 19.0171 5.62478C19.0173 5.79794 18.9818 5.96945 18.9127 6.12947C18.8435 6.28949 18.742 6.43489 18.614 6.55733C18.486 6.67978 18.334 6.77686 18.1667 6.84303C17.9994 6.90919 17.8201 6.94314 17.6391 6.94292Z" fill="white"/>
</svg>



                    </div>
                </div>


                {mobile? <div className={css.mobcontainer}>
                    <div className={css.mob1}>
                        <span>Contact us</span>
                    </div>



                    <div className={css.mob}>
                        <img className={css.mimg} src={Map} alt="" />
                        <span>124-H, 3rd Floor, Thendral Complex, DB Road, RS Puram,  Coimbatore - 641002</span>

                    </div>
                    <div className={css.mob}>
                        <img className={css.mimg} src={Message} alt="" />
                        <span>contact@batcave.co.in</span>
                    </div>
                    <div className={css.mob}>
                    <img className={css.mimg} src={Call} alt="" />
                        <span>+91 89765 23450</span>
                    </div>

                    <div className={css.moblist}>
                    <li><Link to="home" spy={true} smooth={true}>Home</Link></li>
                <li><Link to="about" spy={true} smooth={true}>About</Link></li>
                <li><Link to="services"  spy={true} smooth={true}>Services</Link></li>
                        <li>Terms & Conditions</li>
                        <li></li>
                    </div>



                </div> : 

             
              
                

              



               
               ( <div className={css.div1right}>
                    <div className={css.right1}>
                    <span className={css.headspan}>Quick links</span>
                    <ul className={css.flist}>
                    <li><Link to="home" spy={true} smooth={true}>Home</Link></li>
                <li><Link to="about" spy={true} smooth={true}>About</Link></li>
                <li><Link to="services"  spy={true} smooth={true}>Services</Link></li>
                        <li>Contact</li>
                        <li>Terms & Conditions</li>
                    </ul>
                    </div>

                    <div className={css.line}></div>

                    <div className={css.right2}>
                        <div className={css.right2left}>
                            <span className={css.headspan}>Phone</span>
                            <span className={css.subspan}>+91 89765 23450</span>
                        </div>
                        <div className={css.right2right}>
                            <span className={css.headspan}>Address</span>
                            <span className={css.subspan}>124-H, 3rd Floor, Thendral Complex, DB Road, RS Puram,  Coimbatore - 641002</span>
                        </div>
                    </div>

                    <div className={css.right3}> 
                    <span className={css.headspan}>Email</span>
                    <span className={css.subspan}>contact@invicioustech.co.in</span>
                    
                    </div>
                  
                </div> )}

                



            </div>


            {/* <div className={css.line2}></div> */}


            <div className={css.copyright}>
                <span>Copyright © 2023 invicious Tech Consltancy | All Rights Reserved. </span>
            </div>

        </div>
    )
}

export default Footer

