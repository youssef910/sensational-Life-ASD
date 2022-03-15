import React from 'react';
import KellyAnneSmithProfilePic from '../../assets/images/KellyAnneSmithProfilePic.png';
const AboutUs = () => {
  return (
    <div className='mx-10 bg-d-ltBg  grid md:grid-cols-3  gap-6 px-10 py-10'>
      <div className='relative   px-3'>
        <img
          className=' max absolute   bottom-12 left-15 z-10 h-4/6 w-2/3 '
          src={KellyAnneSmithProfilePic}
          alt='about us '
          placeholder='blurred'
        />
        <div className='absolute bottom-5 left-14 z-0 h-4/5 w-2/3 rounded-full bg-d-lBlue'></div>
      </div>
      <div className='px-5'>
        <h1 className='  font-roboto	text-38 '>
          Welcome to <br /> SENsation Life
          <br />
        </h1>
        <span className='font-ambit_italic text-25 py-5 '>
          with me Kelly-Anne Smith. And here is my Story..
        </span>
        <p className='font-ambit_italic text-20'>
          For a lot of years my life was very much like some kind of TV show,
          filled with drama and disaster. Only that there’s was never a
          wonderful prize waiting for me. The journey to establishing
          SENsational Life was bumpy and far from perfect, but one I am
          extremely proud of. My involvement with working with children who had
          various Learning Difficulties and Autism began over 20 years ago.
          Little did I know how much my growing family and life would be changed
          and led by neurodiversity.
        </p>
      </div>

      <div className='px-5'>
        <p className=' pt-14 self-stretch font-ambit_italic text-20'>
          As my teaching career grew so did my family grew, 4 neurodivergent
          children. Their care needs and ultimate demands were placed upon me. I
          couldn’t cope, I couldn’t reach out to friends and family for support.
          After experiencing a mental breakdown, I was signed off work with
          depression. After receiving professional help and support. I returned
          to teaching but couldn’t get past the lack of support available for
          families similar to mine so I decided to make some changes! Fast
          forward, in 2015 I left my teaching position and set up what is now
          ‘SENsational Life’, with a view to reaching out and supporting other
          parents of autistic children. And here I am Today!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
