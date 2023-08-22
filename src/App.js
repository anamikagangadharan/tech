import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Services from './components/Services/Services';
import Subscribe  from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import { useState } from 'react';
import Backto from "../src/assets/backtotop.svg"



function App() {
  const [state,setState]=useState(false)
  const backTo=()=>{
    if(window.scrollY>100){
      setState(true)
    } else{
      setState(false)
    }
  }
  window.addEventListener('scroll',backTo)
 
  return (
    <div className="App">
      
      <Header/>
      <Main/>
      <About/>
      <Services/>
      <Subscribe/>
      <Contact/>
      <Footer/> 
      <img onClick={() => window.scrollTo(0, 0)} className= {state? "ins2": "ins"} src={Backto}></img>

 
    
    </div>
  );
}

export default App;
    