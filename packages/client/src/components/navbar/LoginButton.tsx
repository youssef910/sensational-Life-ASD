type registerProps = {
  handleSignIn: (state: boolean) => void;
};
const LoginButton: React.FC<registerProps> = (props) => {
  const { handleSignIn } = props;
  return (
    <button
      onClick={() => handleSignIn(true)}
      className='bg-black  text-white ms-2 rounded-3  
       hover:bg-d-blue hover:text-d-ltBg  focus:bg-d-blue focus:text-d-ltBg w-fit'
    >
      <div
        className='flex  items-center text-white no-underline p-2  
       hover:bg-d-blue hover:text-d-ltBg  focus:bg-d-blue focus:text-d-ltBg'
      >
        Login
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 ml-3'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
          />
        </svg>
      </div>
    </button>
  );
};

export default LoginButton;
