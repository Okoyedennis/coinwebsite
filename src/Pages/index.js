import React, { useState } from "react";
import Footer from "../component/Footer";
import HeroSection from "../component/HeroSection";
import InfoSection from "../component/InforSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../component/InforSection/Data";
import Navbar from "../component/Navbar/Navbar";
import Services from "../component/Services";
import Sidebar from "../component/Sidebar";

const Pages = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Pages;
