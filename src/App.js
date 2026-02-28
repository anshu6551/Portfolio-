
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import Hire from './components/Hire/Hire';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
       <Service/>
      <About/>
      <Hire/>
      <Contact/>
    </>
  );
}

export default App;
