import React from 'react';
import { Link } from 'react-router-dom';
import NavBarDropDown from './NavBarDropDown';
import { items } from '../../assets/Helpers/navBarDropdownItems';
import LoginButton from './LoginButton';
const MobileMenu = () => {
  return (
    <div
      className='origin-top-left absolute   px-4 pt-3 flex flex-col
        w-full rounded-md shadow-lg py-1 bg-d-ltBg ri focus:outline-none'
    >
      <Link
        to='/'
        className='py-2 px-2 no-underline  font-nexa text-20 
          hover:bg-d-blue hover:text-d-ltBg text-d-Black focus:bg-d-blue focus:text-d-ltBg'
      >
        Home
      </Link>

      <NavBarDropDown items={items.about} />
      <NavBarDropDown items={items.resources} />
      <Link
        to='/about'
        className='py-2 px-2 no-underline   font-nexa text-20 
          hover:bg-d-blue hover:text-d-ltBg text-d-Black focus:bg-d-blue focus:text-d-ltBg'
      >
        Contact
      </Link>

      <LoginButton />
    </div>
  );
};

export default MobileMenu;
