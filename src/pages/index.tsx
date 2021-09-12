import React from "react";
import Slider from "@/components/slider/slider";
import { useHomePage } from "@/generated/queries";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { HomePage } from "../types/generated/operations";

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div id="home" className="relative w-full h-full">
      <div className="h-full w-full p-0 bg-gray-200">
        <div className="bg-white bg-opacity-80 flex-grow h-full">
          <Slider projects={props.projects}></Slider>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomePage> = async () => {
  const data = await useHomePage.fetcher()();
  return {
    props: {
      projects: data.projects
    }
  };
};

export default Home;
