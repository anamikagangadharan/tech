import React from 'react'
import css from "./Main.module.css"
import { Link } from 'react-scroll'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Logo2 from "../../assets/banner2logo.svg"

import "swiper/css";
import "swiper/css/pagination"

const Main = () => {
  return (
    <Swiper
    // breakpoints={{
    //   800:{
    //     slidesPerView:1,
    //   },
    //   650: {
    //     slidesPerView: 1,
    //   },
    //   0: {
    //     slidesPerView: 1,
    //   },
    // }}
    modules={[Pagination]}
      //  pagination={true}
       pagination={{ clickable: true }}
       loopFillGroupWithBlank={true}
       slidesPerView={1}
       spaceBetween={0}
       slidesPerGroup={1}
       loop={true}
       
      >
        
    

   <SwiperSlide>

 
    <div className={css.container} id='home'>
      <div className={css.div1}>
        <span>INVICIOUS</span>
      </div>


      <div className={css.div2}>
        <span>"Welcome to Invicious Tech Consultancy, your gateway to seamless technology solutions and expert IT guidance. Unlock the power of innovation and achieve business excellence with our dedicated team of professionals."</span>
      </div>


      <div className={css.div3}>
      <Link to="contact" spy={true} smooth={true}>   <button className={css.contactbutton}>CONTACT US</button>  </Link> 
      </div>
    </div>   
      </SwiperSlide>

    <SwiperSlide> 
      <div className={css.container2}>
      <div className={css.div1}>
       <img className={css.logo22} src={Logo2} alt="" />
      </div>


      <div className={css.div22}>
       <span>Invicious Custom Software Solution Development
</span>
      </div>


      <div className={css.div3}>
      <Link to="contact" spy={true} smooth={true}>   <button className={css.contactbutton}>CONTACT US</button>  </Link> 
      </div>
       
      </div>
    </SwiperSlide>
    </Swiper>
  )
}

export default Main
