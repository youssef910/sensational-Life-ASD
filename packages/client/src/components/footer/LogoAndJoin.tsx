import React from 'react';
import logo from '../../assets/images/Logo.jpg';
import { getLoggedInUserData } from '../../Helpers/storage';
type registerProps = {
  handleRegister: (state: boolean) => void;
};
const LogoAndJoin: React.FC<registerProps> = (props) => {
  const { handleRegister } = props;
  return (
    <div className='flex flex-col items-center  justify-between space-y-2  border-b-2 border-gray-400 py-3  px-5 md:flex-row'>
      <div className=''>
        {' '}
        <img
          src={logo}
          width={200}
          height={50}
          alt='SensationalLife-Logo '
          placeholder='blurred'
        />
      </div>
      <div className='flex flex-row items-center'>
        <h5 className='font-ambit_bold text-sm md:text-22 '>
          Do want to be part of us?
        </h5>
        {getLoggedInUserData() ? null : (
          <button
            onClick={() => {
              window.scroll(0, 0);
              handleRegister(true);
            }}
            className={` border-1 group focus:ring-d-Black-300 ml-6 
          w-fit bg-d-ltBg p-1 text-center font-ambit_bold text-sm text-d-Black hover:bg-stone-600 
          hover:text-d-ltBg focus:outline-none focus:ring md:px-4 md:py-1 md:text-24 `}
          >
            Get started
            <div
              className=' absolute  mt-3  hidden  rounded bg-d-ltBg px-1 
            text-sm text-black shadow-xl hover:bg-d-lBlue group-hover:block'
            >
              Click to Get started
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default LogoAndJoin;
