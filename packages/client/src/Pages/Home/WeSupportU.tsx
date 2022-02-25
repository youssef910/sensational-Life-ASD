import React, { useState } from 'react';
import weSupportUImg from '../../assets/images/supporting-elderly-woman.jpg';
import RegisterPage from '../RegisterPage/Register';
import SignInPage from '../SignIn Page/SignInPage';
const WeSupportU = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const handleRegister = (state: boolean) => setOpenRegister(state);
  const handleSignIn = (state: boolean) => setOpenSignIn(state);

  return (
    <div
      className=' grid grid-rows-2  bg-d-ltBg md:grid-cols-2 
    md:grid-rows-1 lg:mx-10 componentHight p-2 md:p-5 relative'
    >
      <div className='grid  justify-items-center pl-2 '>
        {' '}
        <h1 className='text-center font-roboto	text-48'> We Support You?</h1>
        <p className='text-start font-nexa text-20'>
          If you are a parent of an autistic child
          <br /> (whether officially diagnosed, on the long
          <br /> winded journey or just having some
          <br /> concerns), then this is the group for you!
        </p>
        <div>
          <button
            onClick={() => setOpenRegister(true)}
            className={` border-1 group focus:ring-d-Black-300 my-5
              ml-6 w-fit bg-d-Black px-4 py-2 text-center font-ambit_bold text-24 text-white hover:bg-stone-600 focus:outline-none focus:ring `}
          >
            Join Us
            <div
              className=' absolute  mt-3  hidden  rounded bg-d-Black px-1 
                 text-sm text-white shadow-xl hover:bg-d-lBlue group-hover:block'
            >
              Click Join Us
            </div>
          </button>
        </div>
      </div>
      <div className='relative   pl-3'>
        <img
          src={weSupportUImg}
          alt='Support'
          className=' max absolute   bottom-12 right-16 z-10  h-5/6 w-4/6 rounded-xl  '
          placeholder='blurred'
        />
        <div className='absolute bottom-5 right-10 z-0 h-4/5 w-2/3 rounded-2xl bg-d-beige   '></div>
      </div>
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

export default WeSupportU;
