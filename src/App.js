import logo from './logo.svg';
//import './App.css';
import MyNavBar from './components/MyNavBar';
import About from './components/About';
import Products from './components/Product';
import Contact from './components/Contact';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

     <MyNavBar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
