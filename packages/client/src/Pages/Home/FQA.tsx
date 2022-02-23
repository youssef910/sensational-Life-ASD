import { Link } from 'react-router-dom';

const FQA = () => {
  return (
    <div className='grid h-96 lg:mx-10 justify-items-center  bg-d-ltBg content-center'>
      <Link to='/fqa'>
        <button
          className=' border-1 bg-d-blue  group w-full text-center text-white
            font-ambit_bold text-24 ml-6 px-4 py-2  mr-5 my-5 hover:bg-blue-800 
            focus:outline-none focus:ring focus:ring-d-Black-300 '
        >
          Frequently Asked Questions
          <div
            className=' hidden  group-hover:block   hover:bg-d-lBlue  bg-d-Black text-white mt-3 
                 px-3 absolute rounded shadow-xl text-sm ml-20'
          >
            Click to Register
          </div>
        </button>
      </Link>
    </div>
  );
};

export default FQA;
