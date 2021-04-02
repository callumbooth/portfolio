import React from "react";
import Slider from "@/components/slider/slider";
import data from "../data.json";

const Home = (props) => {
  return (
    <div id="home">
      <div className="page-content">
        <div className="content">
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
