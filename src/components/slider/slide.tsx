import React from "react";

import SliderTopSVG from "./sliderTopSVG";
import SliderBottomSVG from "./sliderBottomSVG";

import Link from "../atoms/Link";
import clsx from "clsx";
import ArrowRightIcon from "@heroicons/react/solid/ArrowRightIcon";
import { motion } from "framer-motion";

export interface ISlideProps {
  currentSlide: number;
  loaded: boolean;
  delayTransition: (e: any) => void;
  toggleInfo: (e: any) => void;
  data: {
    i?: number;
    name: string;
    slug: string;
    rotate: number;
    featured: boolean;
    tags: string[];
    launched: string;
    summary: string;
    content: string;
    showInfo?: boolean;
  };
}

const Slide = (props: ISlideProps) => {
  const show = props.currentSlide === props.data.i && props.loaded;
  return (
    <motion.div
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      transition={{ duration: 0.5, delay: 1 }}
      className={clsx("w-full h-full absolute")}
    >
      <div className="background-wrapper-top absolute w-full top-0 z-0 flex justify-start overflow-hidden">
        <SliderTopSVG
          className="flex-grow w-full h-full"
          rotation={props.data.rotate}
          show={show}
        />
      </div>
      <motion.div
        className={clsx(
          "slide-wrapper flex flex-wrap h-full items-center justify-center relative z-10"
        )}
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="w-full max-w-full font-bold text-primary-main text-center text-6xl leading-none p-7 lg:text-8xl lg:p-10 xl:text-9xl xl:p-12">
          <Link href={"/projects/" + props.data.slug}>
            <a>{props.data.name}</a>
          </Link>
        </div>
        <div className="absolute bottom-12 left-12">
          <button className="btn btn-red" onClick={props.toggleInfo}>
            i
          </button>
          <div
            className={clsx(
              "absolute w-72 left-1 bottom-full opacity-0 p-5 rounded-sm bg-primary-main text-white",
              props.data.showInfo && "opacity-100 visible"
            )}
          >
            <p>{props.data.summary}</p>
            <Link href={"/projects/" + props.data.slug}>
              <a className="project-link uppercase text-white text-xs">
                View Project
                <ArrowRightIcon className="inline-block w-4" />
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
      <div className="transition duration-500 absolute w-full bottom-0 z-0 flex justify-start overflow-hidden">
        <SliderBottomSVG
          rotation={props.data.rotate}
          className="flex-grow w-full h-full"
          show={show}
        />
      </div>
    </motion.div>
  );
};

export default Slide;
