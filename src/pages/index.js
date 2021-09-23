import React, { useState } from 'react'
import Footer from '../componenets/Footer/index';
import HeroSection from '../componenets/HeroSection';
import InfoSection from '../componenets/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../componenets/InfoSection/Data';
import Navbar from '../componenets/Navbar'
import Services from '../componenets/Services';
import Sidebar from '../componenets/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services />
      <InfoSection {...homeObjThree}/>
      <Footer />
    </>
  );
};

export default Home;
