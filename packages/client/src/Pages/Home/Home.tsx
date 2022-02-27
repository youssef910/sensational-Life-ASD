import AboutUs from './AboutUs';
import FQA from './FQA';
import MemberSays from './MemberSays';
import ScrollDown from './ScrollDown';
import Subscribe from './SubscribeNL';
import Welcome from './Welcome';
import WeSupportU from './WeSupportU';
import WhatWeDo from './WhatWeDo';
import './Home.css';
type registerProps = {
  handleRegister: (state: boolean) => void;
};

const Home: React.FC<registerProps> = (props) => {
  const { handleRegister } = props;
  return (
    <>
      <Welcome handleRegister={handleRegister} />
      <ScrollDown />
      <AboutUs />
      <WhatWeDo />
      <WeSupportU handleRegister={handleRegister} />
      <MemberSays handleRegister={handleRegister} />
      <Subscribe />
      <FQA />
    </>
  );
};

export default Home;
