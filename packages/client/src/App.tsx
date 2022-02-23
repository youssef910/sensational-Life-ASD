import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <div className='lg:mx-10 bg-black'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
