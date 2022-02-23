import React, { useState } from 'react';
import subscribeImg from '../../assets/images/woman-using-a-mobile-phone-in-the-kitchen.jpg';
const Subscribe: React.FC = () => {
  const initialState: string = '';
  const [email, setEmail] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
    setEmail('');
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpen(true);
  };
  return (
    <div className='relative grid grid-rows-2  bg-d-beige md:grid-cols-2 md:grid-rows-1 lg:mx-10 '>
      <div className='grid  justify-items-center py-5  pl-2 '>
        <h1 className='text-start mb-5 font-roboto	text-48'>
          {' '}
          Subscribe to <br />
          our newsletter?
        </h1>
        <div className='mx-auto max-w-md overflow-hidden rounded-lg md:max-w-xl'>
          <div className='relative '>
            {' '}
            <form onSubmit={onSubmit}>
              <input
                required
                type='email'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                value={email}
                placeholder='enter your email '
                className='h-10 w-4/5 rounded-lg bg-white  px-12 hover:cursor-pointer focus:outline-none'
                name='email'
              />{' '}
              <button className='absolute top-0 right-1   bg-slate-900 p-2  text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>{' '}
            </form>
          </div>
        </div>
      </div>

      <div className=' relative   pl-3 '>
        <img
          src={subscribeImg}
          alt='subscribe '
          placeholder='blurred'
          className=' max absolute   bottom-12 right-16 z-10  h-5/6 w-4/6 rounded-xl  '
        />
        <div className='absolute bottom-5 right-10 z-0 h-4/5 w-2/3 rounded-2xl bg-d-lBlue   '></div>
      </div>
      {isOpen ? (
        <div className=' absolute inset-0   z-10 bg-stone-700 bg-opacity-25 '>
          <div className='absolute z-10 max-w-md rounded bg-white  py-2 px-3 text-gray-800   lg:top-1/3  lg:left-1/4'>
            <div className='flex items-center justify-between'>
              <h4 className='text-center text-lg font-bold'>Thank you!!</h4>

              <button onClick={closeModal}>
                <svg
                  className='h-6 w-6 cursor-pointer rounded-full p-1 hover:bg-gray-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fill-rule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
            <div className='mt-2 text-sm'>
              <p>
                Your Email
                <span className=' px-2 text-green-700'>
                  {''}
                  {email}
                </span>
                is added to our newsletter and you will receive updates
              </p>
            </div>
            <div className='mt-3 flex justify-end space-x-3'>
              <button
                onClick={closeModal}
                className='rounded bg-green-500 px-3 py-1 hover:bg-green-700 hover:bg-opacity-50'
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Subscribe;
