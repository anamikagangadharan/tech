import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Services from './components/Services/Services';
import Subscribe  from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';



function App() {
 
  return (
    <div className="App">
      
      <Header/>
      <Main/>
      <About/>
      <Services/>
      <Subscribe/>
      <Contact/>
      <Footer/> 
 
    
    </div>
  );
}

export default App;
    