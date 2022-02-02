import React, { useState } from 'react'
import Footer from '../componenets/Footer/index';
import MainSection from '../componenets/MainSection';
import InfoSection from '../componenets/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../componenets/InfoSection/Data';
import Photo from '../componenets/Photo';
import Navbar from '../componenets/Navbar'
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
      <MainSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Photo />
      <InfoSection {...homeObjThree}/>
      <Footer />
    </>
  );
};

export default Home;
