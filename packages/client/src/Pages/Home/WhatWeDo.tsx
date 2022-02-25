import React from 'react';
import { Link } from 'react-router-dom';
import WhatWeDoImg from '../../assets/images/cute-girl-with-down-syndrome-in-mothers-arms.jpg';
const WhatWeDo = () => {
  return (
    <div
      className=' grid grid-rows-2  bg-d-lBlue md:grid-cols-2 
    md:grid-rows-1 lg:mx-10 componentHight  p-2 md:p-5 '
    >
      <div className='grid  justify-items-center pl-2 '>
        {' '}
        <h1 className='text-center font-roboto	text-48'> What We Do?</h1>
        <p className='text-start font-nexa text-20'>
          We are provide advice, signposting, tips
          <br /> and products to help support parents of
          <br />
          autistic children on their autism journey
          <br /> within the neurodiverse family.
        </p>
        <div>
          <Link to='/whatWeDoPg'>
            <button
              className={` border-1 group focus:ring-d-Black-300 my-5
              ml-6 w-fit bg-d-Black px-4 py-2 text-center font-ambit_bold text-24 text-white hover:bg-stone-600 focus:outline-none focus:ring `}
            >
              Read More
              <div
                className=' absolute  mt-3  hidden  rounded bg-d-Black px-1 
                 text-sm text-white shadow-xl hover:bg-d-lBlue group-hover:block'
              >
                Click to Read More
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className='relative   pl-3'>
        <img
          src={WhatWeDoImg}
          className=' max absolute   bottom-12 left-20 z-10  h-4/6 w-4/5 rounded-xl'
          alt='What we do'
          placeholder='blurred'
        />
        <div className='absolute bottom-5 left-10 z-0 h-4/5 w-2/3 rounded-2xl bg-d-beige   '></div>
      </div>
    </div>
  );
};

export default WhatWeDo;
