import React from "react";
import Common from "./Common";
import web from "../images/among.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Learn About"
        imgsrc={web}
        visit="/contact"
        btn="Contact Me"
        description = "Hello I am 21 Year old Software Engineer providing my services as a MERN Stack & Python Developer , Born in Karachi Pakistan"
      />
    </>
  );
};

export default About;
