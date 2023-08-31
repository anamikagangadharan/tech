//  import React from 'react'
//  import css from "./Subscribe.module.css"
 
//  const Subscribe = () => {
//    return (
//      <div className={css.container}>

//         <div className={css.set}>
//             <span>Newsletter</span>

//             <span>Subscribe to our sales newsletter to stay up to date with our latest products & services</span>
//             <div className={css.wrap}>
//             <input className={css.inpsubscribe} type="text" placeholder='Email Address' />
           
//             <button className={css.subscribe}>Subscribe</button>
//             </div>
           
//         </div>
       
//      </div>
//    )
//  }
 
//  export default Subscribe







import React, { useState } from 'react';
import axios from 'axios';
import css from "./Subscribe.module.css"

const Subscribe = () => {

    const [email, setEmail] = useState('');
  
    const handleSubscribe = async () => {
      try {
        // Send a POST request to your server with the email address
        const response = await axios.post('http://35.200.213.112/Subscribe', { email }); //change this url to produc
        //  const response = await axios.post('http://localhost:3000/Subscribe', { email }); //change this url to produc
        
        if (response.status === 201) {
          alert('Email subscribed successfully');
          // for clearng the input field after a successful subscription
          setEmail('');
        } else {
          alert('Failed to subscribe email');
        }
      } catch (error) {
        console.error('Error subscribing email:', error);
        alert('Failed to subscribe email');
      }
    }



  return (
    <div className={css.container}>

       <div className={css.set}>
           <span>Newsletter</span>

           <span>Subscribe to our sales newsletter to stay up to date with our latest products & services</span>
           <div className={css.wrap}>
           <input className={css.inpsubscribe} type="text" placeholder='Email Address' 
            value={email} // Connect the input field to the email state
            onChange={(e) => setEmail(e.target.value)} // Update the email state on change 
            />
          
           <button className={css.subscribe} onClick={handleSubscribe}>Subscribe</button>
           </div>
          
       </div>
      
    </div>
  )
}

export default Subscribe
 





