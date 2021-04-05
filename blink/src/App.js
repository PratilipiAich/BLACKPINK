
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <div className="bg">
      <div className="blackpink">BLA<p className="flip">C</p>KPI<p className="flip">N</p>K</div>
      <div className="in-your-area">IN YOU AREA</div> 
      </div>
      <Header/>

      <Routes/>
      {/* <Home />*/}
      <br/>
      <Footer/> 
    </div>
  );
}

export default App;
