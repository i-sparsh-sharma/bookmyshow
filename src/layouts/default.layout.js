import React from "react";

//components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousel/HeroCarousel.component.js";

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <HeroCarousal />
      {props.children}
    </>
  );
};

export default DefaultLayout;
