import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SliderTopSVG from "./sliderTopSVG";
import SliderBottomSVG from "./sliderBottomSVG";

import Link from "../atoms/Link";
import clsx from "clsx";

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
    <div className={clsx("slide", show ? "fadeIn" : "fadeOut")}>
      <div className="background-wrapper-top">
        <SliderTopSVG rotation={props.data.rotate} />
      </div>
      <div className="slide-wrapper">
        <div className="slide-title">
          <Link href={"/projects/" + props.data.slug}>
            <a>{props.data.name}</a>
          </Link>
        </div>
        <div className={props.data.showInfo ? "moreinfo show" : "moreinfo"}>
          <button className="btn btn-red" onClick={props.toggleInfo}>
            i
          </button>
          <div className="info">
            <p>{props.data.summary}</p>
            <Link href={"/projects/" + props.data.slug}>
              <a className="project-link text-uppercase text-white text-small">
                View Project
                <FontAwesomeIcon
                  icon="arrow-right"
                  style={{ marginLeft: "0.5rem" }}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="background-wrapper-bottom">
        <SliderBottomSVG rotation={props.data.rotate} />
      </div>
    </div>
  );
};

export default Slide;
