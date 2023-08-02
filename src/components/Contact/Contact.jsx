import React from 'react'
import css from "./Contact.module.css"

const Contact = () => {
  return (
    <div className={css.container}>
      
      <div className={css.div1}>
        <span>Contact Us</span>
      </div>

      <div className={css.div2}>
        <span>At Invicious Tech Consultancy, we're your technology partner, offering innovative solutions 
for your success in the digital world.</span>
      </div>

      <div className={css.div3}>
        <div className={css.set}>
            <div className={css.line}>
            <label htmlFor="">Full name *</label>
            <input className={css.contactinp} type="text" name="" id=""  placeholder='Enter Your Name'/>
            </div>
            <div className={css.line}>
            <label htmlFor="">Your Email *</label>
            <input className={css.contactinp} type="email" name="" id="" placeholder='Enter Your Email' />
            </div>
        </div>
        <div className={css.set}>
            <div className={css.line}>
            <label htmlFor="">Phone number *</label>
            <input className={css.contactinp} type="text" name="" id=""  placeholder='Ener Your Number'/>
            </div>
            <div className={css.line}>
            <label htmlFor="">Company *</label>
            <input className={css.contactinp} type="text" name="" id=""  placeholder='Enter Your Company name'/>
            </div>
        </div>
        <div className={css.set}>
            <div className={css.line}>
            <label for="cars">Choose a car:</label>

            <select className={css.selectinput} name="cars" id="cars">
  <option className={css.opt} value="volvo">How can we help</option>
  <option className={css.opt} value="saab">IT consultancy service</option>
  <option className={css.opt} value="mercedes">web design and development</option>
  <option className={css.opt} value="mercedes">web design and development</option>
  <option className={css.opt} value="mercedes">web design and development</option>

</select>
          
            </div>
            <div className={css.line}>
            <label htmlFor="">Country *</label>
            <input className={css.contactinp} type="text" name="" id=""  placeholder='Enter Your Company name'/>
            </div>
        </div>

        <div className={css.lastset}>
            <label htmlFor="">Message</label>
           
          <input className={css.messageinp} type="text"  placeholder='Enter some message here'/>
        </div>

      </div>


    </div>
  )
}

export default Contact

