import FooterLinks from './FooterLinks';
import LogoAndJoin from './LogoAndJoin';
import SocialLinks from './SocialLinks';
type registerProps = {
  handleRegister: (state: boolean) => void;
};

const Footer: React.FC<registerProps> = (props) => {
  const { handleRegister } = props;
  return (
    <footer className='lg:mx-10 bg-d-Black text-white'>
      {' '}
      <LogoAndJoin handleRegister={handleRegister} />
      <FooterLinks />
      <SocialLinks />
    </footer>
  );
};

export default Footer;
