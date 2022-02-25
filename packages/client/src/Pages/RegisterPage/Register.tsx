import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import registerImage from '../../assets/images/Register_image.png';
import Inputs from './Inputs';
type registerProps = { onClick: (state: boolean) => void };
const RegisterPage: React.FC<registerProps> = (props) => {
  const { onClick } = props;
  const initialState = {
    name: '',
    email: '',
    pwd: '',
    confirmPwd: '',
  };
  const [form, setForm] = useState(initialState);
  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
    console.log(onClick);
    onClick(false);
    // setForm(initialState)
  };

  return (
    <div
      className='grid grid-cols-3  bg-d-ltBg lg:mx-10 border-2 border-gray-600 
    absolute inset-4 md:left-36 z-20  bg-opacity-100 min-h-fit drop-shadow-2xl max-w-fit  '
    >
      <div className='absolute '>
        <button
          className='absolute top-0 left-4 h-16 w-16 z-50 '
          onClick={() => onClick(false)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 '
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
      <div className=' col-span-2  pt-16'>
        <h1 className='my-10 text-center  text-40 font-roboto '>
          Register With Us
        </h1>
        <form
          className='mx-2 flex flex-col justify-items-center space-y-5 md:mx-24 font-ambit_italic text-16 '
          onSubmit={handleSubmit}
        >
          <Inputs
            value={form.name}
            name='name'
            type='text'
            placeholder='Name'
            onChange={handleChange}
          />
          <Inputs
            value={form.email}
            name='email'
            type='email'
            placeholder='Email'
            onChange={handleChange}
          />
          <Inputs
            value={form.pwd}
            name='pwd'
            type='password'
            placeholder='Password'
            onChange={handleChange}
          />
          <Inputs
            value={form.confirmPwd}
            name='confirmPwd'
            type='password'
            placeholder='Repeat Password'
            onChange={handleChange}
          />
          <button className='mt-5 bg-d-blue py-2 text-center font-ambit_bold text-20 text-white lg:px-5 '>
            {' '}
            Register
          </button>
        </form>
        <div className='mt-10 flex flex-row justify-center  '>
          <h5 className='font-ambit_italic text-16'>
            Already have an account?
            <Link className='no-underline' to='/'>
              <span className=' pl-2 font-ambit_bold text-16 text-d-blue'>
                Sign In
              </span>
            </Link>
          </h5>
        </div>
      </div>

      <img
        className='col-span-1  '
        alt='register'
        src={registerImage}
        placeholder='blurred'
      />
    </div>
  );
};

export default RegisterPage;
