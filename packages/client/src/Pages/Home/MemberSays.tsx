import React, { useState } from 'react';
import { membersSays } from '../../Helpers/membersays';
import RegisterPage from '../RegisterPage/Register';
import SignInPage from '../SignIn Page/SignInPage';
const MemberSays = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const handleRegister = (state: boolean) => setOpenRegister(state);
  const handleSignIn = (state: boolean) => setOpenSignIn(state);
  return (
    <div className='bg-d-blue lg:mx-10 min-h-max  p-2 md:p-5 relative'>
      <h2 className='text-center font-roboto text-40 text-white mt-5 mb-4'>
        What Our Beloved Members Say
      </h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 my-9 '>
        {membersSays.map((say) => (
          <div
            key={say.head}
            className='m-4 grid justify-items-center bg-white align-middle sm:pl-3 md:p-5 '
          >
            <h4 className='text-center font-ambit_bold text-24'>{say.head}</h4>
            <p className='text-center  font-ambit_italic text-16'>{say.p}</p>
          </div>
        ))}
      </div>
      <div className='mt-4 grid justify-items-center mb-5'>
        <button
          onClick={() => handleRegister(true)}
          className=' border-1 group  focus:ring-d-Black-300 w-full bg-d-Black px-4
            py-2 text-center  font-ambit_bold text-24   text-white 
            hover:bg-slate-600 focus:outline-none focus:ring '
        >
          Click here to Register
          <div
            className=' absolute  mt-3   ml-20  hidden rounded bg-d-Black 
                 px-1 text-sm text-white shadow-xl hover:bg-d-lBlue group-hover:block'
          >
            Click to Register
          </div>
        </button>
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

export default MemberSays;
