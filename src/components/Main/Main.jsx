import React from 'react'
import css from "./Main.module.css"

const Main = () => {
  return (
    <div className={css.container} id='home'>
      <div className={css.div1}>
        <span>INVICIOUS</span>
      </div>


      <div className={css.div2}>
        <span>"Welcome to Invicious Tech Consultancy, your gateway to seamless technology solutions and expert IT guidance. Unlock the power of innovation and achieve business excellence with our dedicated team of professionals."</span>
      </div>


      <div className={css.div3}>
        <button className={css.contactbutton}>CONTACT US</button>
      </div>
    </div>
  )
}

export default Main
