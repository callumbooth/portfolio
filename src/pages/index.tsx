import React from "react";
import Slider from "@/components/slider/slider";
import data from "../data.json";

const Home = (props) => {
  return (
    <div id="home" className='relative w-full h-full'>
      <div className="h-full w-full p-0 bg-gray-200">
        <div className="bg-white bg-opacity-80 flex-grow h-full">
          <Slider projects={props.projects}></Slider>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      projects: data.projects.filter((project) => project.featured),
    },
  };
};

export default Home;
