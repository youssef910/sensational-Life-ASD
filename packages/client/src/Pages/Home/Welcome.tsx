import React, { useEffect, useState } from 'react';
import autisticLittleGirl from '../../assets/images/autistic-little-girl-close-up.jpg';
import { getLoggedInUserData } from '../../Helpers/storage';
type registerProps = {
  handleRegister: (state: boolean) => void;
};
const Welcome: React.FC<registerProps> = (props) => {
  const { handleRegister } = props;
  useEffect(() => getLoggedInUserData(), [getLoggedInUserData()]);
  return (
    <div
      className=' grid grid-rows-2  relative bg-d-ltBg md:grid-cols-2 
    md:grid-rows-1 lg:mx-10 componentHight  p-2 md:p-5'
    >
      <div className='pl-2  '>
        {' '}
        <h1 className='py-5 pl-4 font-roboto	text-48 '>
          Welcome to <br /> SENsation Life
        </h1>
        <ul className=' flex-col space-y-5'>
          <li className='flex align-middle '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 rounded-2xl bg-d-beige'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
            <h6 className='pl-2 font-nexa text-20 '>Supporting Families.</h6>
          </li>
          <li className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 rounded-2xl bg-d-beige'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
            <h6 className='pl-2 font-nexa text-20'>
              Empowering Neurodiverse Families.
            </h6>
          </li>
        </ul>
        <div>
          {getLoggedInUserData() ? null : (
            <button
              onClick={() => handleRegister(true)}
              className=' border-1 group  focus:ring-d-Black-300 my-5 ml-6 mr-5
            w-3/4 bg-d-blue px-4 py-0  text-center  font-ambit_bold text-24 text-white 
            hover:bg-blue-800 focus:outline-none focus:ring '
            >
              Click here to Register
              <div
                className=' absolute  mt-3   ml-20  hidden rounded bg-d-Black 
                 px-1 text-sm text-white shadow-xl hover:bg-d-lBlue group-hover:block'
              >
                Click to Register
              </div>
            </button>
          )}
        </div>
      </div>
      <div className='relative   pl-3 '>
        <img
          className=' max right-15   absolute bottom-12 z-10  h-4/6 w-4/5 rounded-xl  '
          src={autisticLittleGirl}
          alt='welcome-girl '
          placeholder='blurred'
        />
        <div className='absolute bottom-5 right-10 z-0 h-4/5 w-2/3 rounded-2xl bg-d-lBlue'></div>
      </div>
    </div>
  );
};

export default Welcome;
