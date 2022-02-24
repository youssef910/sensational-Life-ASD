import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks } from '../../assets/Helpers/footerLinks';
const mailtoHref =
  'mailto:support@example.com?subject=SendMail&body=Description';
const FooterLinks = () => {
  return (
    <div className='grid   gap-5 md:px-5 md:grid-cols-4 pt-2'>
      <div className='flex flex-col '>
        <h4 className=' text-center  pb-3 '>About</h4>
        <ul className='flex shrink flex-col    '>
          {footerLinks.aboutLinks.map((link) => (
            <Link
              key={link.title}
              className='no-underline 
             hover:rounded-xl hover:border-2 hover:border-blue-100 hover:px-2 '
              to={link.link}
            >
              <li className='text-center text-white '>{link.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='flex flex-col  '>
        <h4 className=' text-center  pb-3'>Resources</h4>
        <ul className='flex shrink flex-col  '>
          {footerLinks.resourcesLinks.map((link) => (
            <Link
              key={link.title}
              className='no-underline hover:rounded-xl hover:border-2 hover:border-blue-100 hover:px-2'
              to={link.link}
            >
              <li className='text-white text-center pb-1'>{link.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='flex flex-col '>
        <h4 className=' text-center  pb-3'>Help</h4>
        <ul className='flex shrink flex-col  lg:space-y-4  lg:space-x-0    '>
          <Link className='no-underline' to='/fqa'>
            <li className='text-white text-center hover:rounded-xl hover:border-2 hover:border-blue-100 hover:px-1 '>
              FAQs
            </li>
          </Link>
        </ul>
      </div>
      <div className=' flex justify-center md:items-center'>
        <div className='flex flex-col items-center text-center'>
          {' '}
          <h3 className=' text-center font-nexa text-16 underline underline-offset-4   '>
            Our Email address
          </h3>
          <a
            className='flex flex-row align-middle text-center text-white no-underline '
            href={mailtoHref}
            target='blank'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            <p className='px-2 text-center'>info@sensational-life.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
