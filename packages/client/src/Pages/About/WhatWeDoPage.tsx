import React from 'react';
import momAndGirl from '../../assets/images/mom-and-girl.png';
const WhatWeDoPage = () => {
  return (
    <div className='mx-10 bg-d-ltBg  grid md:grid-cols-2 p-10 gap-10 '>
      <div className='relative   pl-3'>
        <img
          src={momAndGirl}
          className=' max absolute   bottom-12 left-20 z-10  h-4/6 w-4/6 rounded-xl'
          alt='What we do'
          placeholder='blurred'
        />
        <div className='absolute bottom-5 left-8 z-0 h-3/6 w-5/6 rounded-2xl bg-d-lBlue   '></div>
      </div>
      <div>
        {' '}
        <h1 className='text-center font-roboto	text-48'> What We Do?</h1>
        <p className='font-ambit_italic text-20'>
          Our mission at SENsational Life is to support and empower neurodiverse
          families; giving parents of autistic children the tools, strategies,
          and knowledge to provide and secure the support and services needed
          for an inclusive and happy life.
        </p>
        <p className='font-ambit_italic text-20'>
          I know that the waiting game can be very long and distressing: waiting
          to get an appointment, for assessments, for help and support. If you
          are in these shoes, SENsational Life is for you.
        </p>
        <p className='font-ambit_italic text-20'>
          I know first-hand that parenting children with additional needs and
          disabilities can be very isolating, confusing and a frustrating
          experience. One which can be incredibly draining at times for all the
          family. I overcame so much to get the support needed, not only for my
          children but for me too.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDoPage;
