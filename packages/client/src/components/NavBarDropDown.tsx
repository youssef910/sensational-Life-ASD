import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
const NavBarDropDown = (props: {
  items: {
    label: string;
    taps: {
      label: string;
      link: string;
    }[];
  };
}) => {
  const { items } = props;
  return (
    <Menu as='div' className='  relative'>
      <Menu.Button
        className='py-2 px-2  no-underline  text-center  font-nexa text-20 
               hover:bg-d-blue hover:text-d-ltBg active:bg-d-blue text-d-Black focus:bg-d-blue focus:text-d-ltBg'
      >
        {items.label}
      </Menu.Button>
      <Transition
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Menu.Items
          className='origin-top-left absolute  
        mt-2 w-48 rounded-md shadow-lg  bg-d-ltBg ri  z-50'
        >
          {items.taps.map((item) => (
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={item.link}
                  className={`block px-2 py-3 m-1 rounded-md text-center no-underline font-nexa text-15  ${
                    active
                      ? 'border-2 border-d-beige  bg-d-ltBg'
                      : 'text-d-Black bg-d-beige'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavBarDropDown;
