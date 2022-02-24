import FooterLinks from './FooterLinks';
import LogoAndJoin from './LogoAndJoin';
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <footer className='lg:mx-10 bg-d-Black text-white'>
      {' '}
      <LogoAndJoin />
      <FooterLinks />
      <SocialLinks />
    </footer>
  );
}

export default Footer;
