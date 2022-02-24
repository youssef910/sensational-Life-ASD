import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <div className='lg:mx-10 bg-black'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
