import React from 'react';
import whatIsAutismImg from '../../assets/images/what-is-autism.jpeg';
import ReactPlayer from 'react-player';

const WhatIsAutism = () => {
  return (
    <div className='mx-10 pt-5 bg-d-ltBg '>
      <img
        src={whatIsAutismImg}
        alt='what-is-autism'
        className='min-w-full pb-5'
      />
      <div className='grid grid-cols-2 '>
        <div className='p-8 font-ambit_italic text-20'>
          <p className='indent-8 font-ambit_italic text-20'>
            Autism or Autism Spectrum Disorder is not an illness or a disease.
            Autism is not a medical condition with treatments or a “cure”. It
            means your brain works in a different way from other people.
            <br />
            It&rsquo;s something you&rsquo;re born with or first appears when
            you&rsquo;re very young.
            <br />
            Everyone with autism is different, that&rsquo;s what makes it a
            spectrum. Some people may need little or no support. Other may need
            extra help to manage certain things such as daily tasks, activities,
            jobs or relationships.
          </p>
          <p>
            For more info and a guide about Autism <br />
            visit the NHS website:
            <span className='underline text-blue-700'>
              <a
                href='https://www.nhs.uk/conditions/autism/'
                className='text-blue-600 visited:text-purple-600'
                target='blank'
              >
                https://www.nhs.uk/conditions/autism/
              </a>
            </span>
          </p>
        </div>
        <div className=' p-5 '>
          <div>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=0Pp8jcQ97pY'
              controls={true}
              width='100%'
            />
          </div>
          <div>
            <p className=' text-center px-10 text-18 font-ambit_italic'>
              Here is an informative video about Autism Spectrum Disorder by The
              National Center for Learning Disabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsAutism;
