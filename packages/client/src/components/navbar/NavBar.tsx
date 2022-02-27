import { useState } from 'react';
import { Link } from 'react-router-dom';
import { items } from '../../Helpers/navBarDropdownItems';
import LoginButton from './LoginButton';
import NavBarDropDown from './NavBarDropDown';
import MobileMenu from './MobileMenu';
import logo from '../../assets/images/Logo.jpg';
type registerProps = {
  handleSignIn: (state: boolean) => void;
};
const NavBar: React.FC<registerProps> = (props) => {
  const { handleSignIn } = props;
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleShowMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  return (
    <nav className='max-h-13 bg-d-ltBg lg:mx-10 '>
      <div className='border-b-gray-500-800 mx-auto border-y  px-8 '>
        <div className='flex items-center justify-between'>
          {' '}
          <img src={logo} width={200} height={50} alt='SensationalLife-Logo ' />
          <div className=' hidden space-x-5 md:flex  '>
            <Link
              to='/'
              className='py-2 px-2 font-nexa   text-20 text-d-Black 
               no-underline hover:bg-d-blue hover:text-d-ltBg focus:bg-d-blue focus:text-d-ltBg'
            >
              Home
            </Link>

            <NavBarDropDown items={items.about} />
            <NavBarDropDown items={items.resources} />
            <Link
              to='/about'
              className='py-2 px-2 font-nexa  text-20 text-d-Black 
               no-underline hover:bg-d-blue hover:text-d-ltBg focus:bg-d-blue focus:text-d-ltBg'
            >
              Contact
            </Link>
          </div>
          <div className=' hidden space-x-5 md:flex'>
            <LoginButton handleSignIn={handleSignIn} />
          </div>
          <div className='flex items-center md:hidden'>
            <button onClick={handleShowMobileMenu} className='px-3 py-3'>
              {showMobileMenu && showMobileMenu ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='   h-8 w-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={` ${showMobileMenu === false && 'hidden'} md:hidden`}>
        <MobileMenu handleSignIn={handleSignIn} />
      </div>
    </nav>
  );
};

export default NavBar;
