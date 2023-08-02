 import React from 'react'
 import css from "./Subscribe.module.css"
 
 const Subscribe = () => {
   return (
     <div className={css.container}>

        <div className={css.set}>
            <span>Newsletter</span>

            <span>Subscribe to our sales newsletter to stay up to date with our latest products & services</span>

            <input className={css.inpsubscribe} type="text" />
            <button className={css.subscribe}>Subscribe</button>
        </div>
       
     </div>
   )
 }
 
 export default Subscribe
 



