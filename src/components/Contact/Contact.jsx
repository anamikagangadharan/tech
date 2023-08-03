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

      <form className={css.div3}>
        <div className={css.set}>
            <div className={css.line}>
            <label htmlFor="">Full name *</label>
            <input className={css.contactinp}  required type="text" name="" id=""  placeholder='Enter Your Name'/>
            </div>
            <div className={css.line}>
            <label htmlFor="">Your Email *</label>
            <input className={css.contactinp}  required  type="email" name="" id="" placeholder='Enter Your Email' />
            </div>
        </div>
        <div className={css.set}>
            <div className={css.line}>
            <label htmlFor="">Phone number *</label>
            <input className={css.contactinp}  required type="number" name="" id=""  placeholder='Enter Your Number'/>
            </div>
            <div className={css.line}>
            <label htmlFor="">Company *</label>
            <input className={css.contactinp}  required type="text" name="" id=""  placeholder='Enter Your Company name'/>
            </div>
        </div>
        <div className={css.set}>
            <div className={css.line}>
            <label for="cars">Subject *</label>

            <select className={css.selectinput} name="cars" id="cars">
  <option className={css.opt} value="volvo">How can we help ?</option>
  <option className={css.opt} value="saab">IT Consultancy Service</option>
  <option className={css.opt} value="mercedes">Web Design & Development</option>
  <option className={css.opt} value="mercedes">Mobile App Development</option>
  <option className={css.opt} value="mercedes">Digital Branding Services</option>
  <option className={css.opt} value="mercedes">Software Development</option>

</select>
          
            </div>
            <div className={css.line}>
            <label htmlFor="">Country *</label>
            <input className={css.contactinp}  required type="text" name="" id=""  placeholder='Enter Your Company name'/>
            </div>
        </div>

        <div className={css.lastset}>
            <label htmlFor="">Message</label>
           
          <input className={css.messageinp} type="text"  placeholder='Enter some message here'/>
        </div>
        <button className={css.subbtn}>Submit</button>
      </form>

         

    </div>
  )
}

export default Contact

