import React from 'react'
import css from "./About.module.css"
import Vectorimg from "../../assets/contactvector.svg"
import Quick from "../../assets/quick.svg"
import Creative from "../../assets/creative.svg"
import Value from "../../assets/value.svg"

const About = () => {
  return (
    <div className={css.container} id='about'>
      <div className={css.div1}>
        <span> WHO WE ARE</span>
      </div>


      <div className={css.div2}>
        <span>"At Invicious Tech Consultancy, we pride ourselves on three key advantages that set us
             apart from the rest:</span>
      </div>

      <div className={css.div3}>
        <div className={css.div3left}>
            <img src={Vectorimg} alt="" />
        </div>



        <div className={css.div3right}>
            <div className={css.box}>
                <div className={css.boxleft}>
                    <img src={Quick} alt="" />
                </div>
                <div className={css.boxright}>
                    <span>Quick Delivery </span>
                    <span>We understand the importance of timely solutions. Our team's efficiency ensures swift project execution and delivery, so you can stay ahead in the fast-paced world of technology.</span>
                </div>
            </div>



            <div className={css.box}>
            <div className={css.boxleft}>
                    <img src={Creative} alt="" />
                </div>
                <div className={css.boxright}>
                    <span>Creative </span>
                    <span>Innovation is at the heart of what we do. Our imaginative approach and outside-the-box thinking guarantee tailored solutions that perfectly align with your unique business needs. </span>
                </div>
                
            </div>


            <div className={css.box}>
            <div className={css.boxleft}>
                    <img src={Value} alt="" />
                </div>
                <div className={css.boxright}>
                    <span>Value for money</span>
                    <span>We believe in providing the best bang for your buck. Our services not only deliver top-notch results but also offer cost-effective solutions, maximizing your return on investment.</span>
                </div>
            </div>
            <div className={css.div4}>
        <span>Discover a consultancy experience that combines speed, creativity, and unbeatable value, and take your business to new heights with Invicious Tech Consultancy.</span>
      </div>
        </div>
      </div>

      
      
    </div>
  )
}

export default About
