import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound';
import RegisterPage from './Pages/RegisterPage/Register';
import SignInPage from './Pages/SignIn Page/SignInPage';

const App = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const handleRegister = (state: boolean) => setOpenRegister(state);
  const handleSignIn = (state: boolean) => setOpenSignIn(state);
  return (
    <div className='lg:mx-10 bg-black'>
      <BrowserRouter>
        <NavBar handleSignIn={handleSignIn} />
        <Routes>
          <Route path='/' element={<Home handleRegister={handleRegister} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer handleRegister={handleRegister} />
      </BrowserRouter>
      {openRegister && (
        <RegisterPage
          handleRegister={handleRegister}
          handleSignIn={handleSignIn}
        />
      )}
      {openSignIn && (
        <SignInPage
          handleSignIn={handleSignIn}
          handleRegister={handleRegister}
        />
      )}
    </div>
  );
};

export default App;
