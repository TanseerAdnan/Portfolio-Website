import React from "react";
import Card from "./Card";
import ProjectData from "./ProjectData";

const Projects = (props) => {
  
  return (
    <>
      <div className="my-5 ">
        <h1 className="text-center fonty"> My <strong className="brands-name"> Projects </strong> </h1>
      </div>
      <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                ProjectData.map((val,ind)=>{
                  return <Card key = {ind} imgsrc = {val.imgsrc} title = {val.title} desc = {val.desc}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
