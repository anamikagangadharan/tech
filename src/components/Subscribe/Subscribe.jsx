 import React from 'react'
 import css from "./Subscribe.module.css"
 
 const Subscribe = () => {
   return (
     <div className={css.container}>

        <div className={css.set}>
            <span>Newsletter</span>

            <span>Subscribe to our sales newsletter to stay up to date with our latest products & services</span>
            <div className={css.wrap}>
            <input className={css.inpsubscribe} type="text" placeholder='Email Address' />
           
            <button className={css.subscribe}>Subscribe</button>
            </div>
           
        </div>
       
     </div>
   )
 }
 
 export default Subscribe
 



