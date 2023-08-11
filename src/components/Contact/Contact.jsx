import React,{useRef, useState} from 'react'
import css from "./Contact.module.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [mail, setMail] = useState('')
  const[number,setNumber]= useState('')
  const [company, setCompany] = useState('')
  const [country, setCountry] = useState('')
  const notify = () => toast.success("Sent Successfully");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uonholy", 
      "template_y03ilxe",
      form.current,
      "0ShbDNI1kk0Ln2HDZ"
      )  
      .then(
        (result) => { 
          console.log(result.text);
        },
        (error) => {
          console.log(error.text); 
        }
      );
  };
  return (
    <div className={css.container}>
      
      <div className={css.div1}>
        <span>Contact Us</span>
      </div>

      <div className={css.div2}>
        <span>At Invicious Consultancy Services, we're your technology partner, offering innovative solutions 
for your success in the digital world.</span>
      </div>

      <form className={css.div3}  ref={form} onSubmit={sendEmail}>
        <div className={css.set}>
            <div className={css.line}>
            <label htmlFor="">Full name *</label>
            <input  onChange={(e) => setFirstName(e.target.value)} className={css.contactinp}  required type="text" name="to_name" id=""  placeholder='Enter Your Name'/>
            </div>
            <div className={css.line}>
            <label htmlFor="">Your Email *</label>
            <input onChange={(e) => setMail(e.target.value)} className={css.contactinp}  required  type="email" name="to_email" id="" placeholder='Enter Your Email' />
            </div>
        </div>
        <div className={css.set}>
            <div className={css.line}>
            <label htmlFor="">Phone number *</label>
            <input  onChange={(e) => setNumber(e.target.value)} className={css.contactinp}  required type="number" name="number" id=""  placeholder='Enter Your Number'/>
            </div>
            <div className={css.line}>
            <label  htmlFor="">Company *</label>
            <input onChange={(e) => setCompany(e.target.value)}  className={css.contactinp}  required type="text" name="company" id=""  placeholder='Enter Your Company name'/>
            </div>
        </div>
        <div className={css.set}>
            <div className={css.line}>
            <label for="cars">Subject *</label>

            <select className={css.selectinput} name="subject" id="cars">
  <option className={css.opt} value="Nil">How can we help ?</option>
  <option className={css.opt} value="Consultancy service">IT Consultancy Service</option>
  <option className={css.opt} value="Web Design & Development">Web Design & Development</option>
  <option className={css.opt} value="Mobile App Development">Mobile App Development</option>
  <option className={css.opt} value="digital Branding Services">Digital Branding Services</option>
  <option className={css.opt} value="Software Development">Software Development</option>

</select>
          
            </div>
            <div className={css.line}>
            <label htmlFor="">Country *</label>
            <input  onChange={(e) => setCountry(e.target.value)} className={css.contactinp}  required type="text" name="country" id=""  placeholder='Enter Your Country'/>
            </div>
        </div>

        <div className={css.lastset}>
            <label htmlFor="">Message</label>
           
          <input className={css.messageinp} type="text" name='message' placeholder='Enter some message here'/>
        </div>
        <button onClick={notify} className={css.subbtn}>Submit</button>
     {firstName.length>1 && mail.length>1 && company.length>1 && number.length>5 && country.length>1 ?<ToastContainer style={{width:"257px", height:"50px"}} autoClose={600} position={"bottom-center"} /> : ""}   
      </form>

         

    </div>
  )
}

export default Contact

