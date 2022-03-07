import React from 'react';
import additionalSupportImg from '../../assets/images/additional-support.jpg';
type registerProps = {
  handleSignIn: (state: boolean) => void;
  handleRegister: (state: boolean) => void;
};

const AdditionalSupport: React.FC<registerProps> = (props) => {
  const { handleSignIn, handleRegister } = props;
  return (
    <div className='bg-d-ltBg mx-10'>
      <img src={additionalSupportImg} alt='additional-Support' />
      <div className='grid  md:grid-cols-2  gap-4'>
        <div className=' p-8 '>
          <p className='font-ambit_bold text-20  whitespace-pre-wrap'>
            Understanding what additional support is can help when
            <br /> you are looking after your children. By ensuring that they
            get the right appropriate support for their needs from their school,
            local council, GPs, community centres etc.
          </p>
          <p className='font-ambit_bold text-20  whitespace-pre-wrap'>
            To learn more about Additional Support needs please
            <button
              className='no-underline'
              onClick={() => {
                handleSignIn(false);
                handleRegister(true);
              }}
            >
              <span className=' pl-2 font-ambit_bold text-16 text-d-blue'>
                Sign Up
              </span>
            </button>
            or{' '}
            <button
              className='no-underline'
              onClick={() => {
                handleRegister(false);
                handleSignIn(true);
              }}
            >
              <span className=' pl-2 font-ambit_bold text-16 text-d-blue'>
                Sign in
              </span>
            </button>
          </p>
        </div>
        <div className=' p-8 '>
          <h1 className='font-ambit_bold text-20 text-black '>Useful links:</h1>
          <ul className='underline text-20 font-ambit_bold '>
            <li>
              <a
                className='text-blue-600 visited:text-purple-600 font-ambit_bold text-20  whitespace-pre-wrap'
                href='https://www.autism.org.uk/advice-and-guidance/topics/
              education/extra-help-at-school/scotland'
                target='blank'
              >
                https://www.autism.org.uk/advice-and-guidance/topics/
                education/extra-help-at-school/scotland
              </a>
            </li>
            <li>
              <a
                className='text-blue-600 visited:text-purple-600 font-ambit_bold text-20  whitespace-pre-wrap'
                href='https://enquire.org.uk/parents/what-is-asl/'
                target='blank'
              >
                https://enquire.org.uk/parents/what-is-asl/
              </a>
            </li>
            <li>
              <a
                className='text-blue-600 visited:text-purple-600 font-ambit_bold text-20  whitespace-pre-wrap'
                href='https://www.nhs.uk/conditions/autism/autism-and-everyday-life/help-for-families/'
                target='blank'
              >
                https://www.nhs.uk/conditions/autism/autism-and-everyday-life/help-for-families/
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdditionalSupport;
