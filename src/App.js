import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Services from './components/Services/Services';



function App() {
 
  return (
    <div className="App">
      
      <Header/>
      <Main/>
      <About/>
      <Services/>
    
    </div>
  );
}

export default App;
    