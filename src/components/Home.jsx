import React from "react";
import Common from "./Common";
import web from "../images/skull.jpg"

const Home = () => {
  return (
    <>
      <Common
      name="I am "
      imgsrc={web}
      visit="/project"
      btn="PROJECTS"
      description = "Software Engineer"
      />
    </>
  );
}

export default Home;
