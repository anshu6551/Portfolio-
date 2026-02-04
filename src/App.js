
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<div>Welcome to anshu poertfolio</div>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
