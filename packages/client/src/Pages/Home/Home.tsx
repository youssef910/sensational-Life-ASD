import AboutUs from './AboutUs';
import FQA from './FQA';
import MemberSays from './MemberSays';
import ScrollDown from './ScrollDown';
import Subscribe from './SubscribeNL';
import Welcome from './Welcome';
import WeSupportU from './WeSupportU';
import WhatWeDo from './WhatWeDo';
import './Home.css';
const Home = () => {
  return (
    <>
      <Welcome />
      <ScrollDown />
      <AboutUs />
      <WhatWeDo />
      <WeSupportU />
      <MemberSays />
      <Subscribe />
      <FQA />
    </>
  );
};

export default Home;
