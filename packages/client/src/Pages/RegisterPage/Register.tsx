import React, { useState } from 'react';
import { createNewUser } from '../../api/user';
import registerImage from '../../assets/images/SignUp.png';
import Inputs from '../../components/Inputs';
type registerProps = {
  handleRegister: (state: boolean) => void;
  handleSignIn: (state: boolean) => void;
};

const RegisterPage: React.FC<registerProps> = (props) => {
  const { handleRegister, handleSignIn } = props;
  const initialState = {
    name: '',
    email: '',
    pwd: '',
    confirmPwd: '',
  };

  const [signInForm, setSignInForm] = useState(initialState);
  const [showError, setShowError] = useState(false);
  const [errorMessage, SetErrorMessage] = useState('');
  const { name, email, pwd, confirmPwd } = signInForm;

  const handleChange = (name: string, value: string) => {
    setSignInForm({ ...signInForm, [name]: value });
  };
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    pwd === confirmPwd
      ? createNewUser(signInForm).then((data) =>
          data.success
            ? (handleSignIn(true), handleRegister(false))
            : (SetErrorMessage(data.message), setShowError(true))
        )
      : (setShowError(true),
        SetErrorMessage("Password doesn't Match Confirm Password"));
  };

  return (
    <div
      className='grid grid-cols-3  bg-d-ltBg lg:mx-10 border-2 border-gray-600 
    absolute inset-12 md:left-36 z-20  bg-opacity-100 min-h-fit drop-shadow-2xl max-w-fit  '
    >
      <div className='absolute '>
        <button
          className='absolute top-0 left-4 h-16 w-16 z-50 '
          onClick={() => handleRegister(false)}
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
        {showError && (
          <p className='text-center text-red-700 '>{errorMessage}</p>
        )}
        <form
          className='mx-2 flex flex-col justify-items-center space-y-5 md:mx-24 font-ambit_italic text-16 '
          onSubmit={handleSubmit}
        >
          <Inputs
            value={name}
            name='name'
            type='text'
            placeholder='Name'
            onChange={handleChange}
          />
          <Inputs
            value={email}
            name='email'
            type='email'
            placeholder='Email'
            onChange={handleChange}
          />
          <Inputs
            value={pwd}
            name='pwd'
            type='password'
            placeholder='Password'
            onChange={handleChange}
          />
          <Inputs
            value={confirmPwd}
            name='confirmPwd'
            type='password'
            placeholder='Repeat Password'
            onChange={handleChange}
          />
          <button
            className=' border-1 group  focus:ring-d-Black-300 my-5 ml-6 mr-5
            w-3/4 bg-d-blue px-4 py-0  text-center  font-ambit_bold text-24 text-white 
            hover:bg-blue-800 focus:outline-none focus:ring '
          >
            Register
            <div
              className=' absolute  mt-3   ml-20  hidden rounded bg-d-Black 
                 px-1 text-sm text-white shadow-xl hover:bg-d-lBlue group-hover:block'
            >
              Register
            </div>
          </button>
        </form>
        <div className='mt-10 flex flex-row justify-center  '>
          <h5 className='font-ambit_italic text-16'>
            Already have an account?
            <button
              className='no-underline'
              onClick={() => {
                handleRegister(false);
                handleSignIn(true);
              }}
            >
              <span className=' pl-2 font-ambit_bold text-16 text-d-blue'>
                Sign In
              </span>
            </button>
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
