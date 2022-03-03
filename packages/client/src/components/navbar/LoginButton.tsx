import { getLoggedInUserData, removeUserData } from '../../Helpers/storage';

type registerProps = {
  handleSignIn: (state: boolean) => void;
  handleShowMobileMenu: () => void;
};
const LoginButton: React.FC<registerProps> = (props) => {
  const { handleSignIn, handleShowMobileMenu } = props;
  return (
    <div>
      {getLoggedInUserData() ? (
        <button
          onClick={() => {
            removeUserData();
            window.location.reload();
          }}
          className='flex  items-center text-black bg-d-ltBg no-underline p-2  
      hover:bg-d-blue hover:text-d-ltBg  focus:bg-d-blue focus:text-d-ltBg'
        >
          Sign Out
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 pl-1'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => {
            handleSignIn(true);
            handleShowMobileMenu();
          }}
          className='flex  items-center  no-underline p-2  
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
        </button>
      )}
    </div>
  );
};

export default LoginButton;
