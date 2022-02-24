import React from 'react';
import { Link } from 'react-router-dom';
import { membersSays } from '../../Helpers/membersays';
const MemberSays = () => {
  return (
    <div className='bg-d-blue py-5 lg:mx-10'>
      <h2 className='text-center font-roboto text-40 text-white'>
        What Our Beloved Members Say
      </h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 '>
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
      <div className='mt-4 grid justify-items-center'>
        <Link to='/register'>
          <button
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
        </Link>
      </div>
    </div>
  );
};

export default MemberSays;
