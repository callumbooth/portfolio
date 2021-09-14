import React, { Component } from "react";
import { throttle } from "lodash";
import ArrowRight from "@heroicons/react/solid/ArrowRightIcon";

import Link from "./atoms/Link";
import clsx from "clsx";

interface IProjectCardProps {
  data: {
    slug: string;
    rotation?: number;
    title: string;
    summary?: string;
  };
}

interface IProjectCardState {
  visible: boolean;
}

class ProjectCard extends Component<IProjectCardProps, IProjectCardState> {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      visible: false
    };

    this.throttleScroll = this.throttleScroll.bind(this);
  }
  projectcard = React.createRef<HTMLDivElement>();

  throttleScroll = throttle(this.handleScroll, 100);

  isInViewport = (elem) => {
    const bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 - bounding.height / 2 &&
      bounding.left >= 0 &&
      bounding.bottom - bounding.height / 2 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  componentDidMount() {
    const inView = this.isInViewport(this.projectcard.current);

    if (inView) {
      this.setState({
        visible: true
      });
    } else {
      window.addEventListener("scroll", this.throttleScroll, false);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.throttleScroll, false);
  }

  handleScroll() {
    const inView = this.isInViewport(this.projectcard.current);

    if (inView) {
      this.setState({
        visible: true
      });
      window.removeEventListener("scroll", this.throttleScroll, false);
    }
  }

  render() {
    return (
      <div
        id={"projectcard-" + this.props.data.slug}
        ref={this.projectcard}
        className="w-full py-7"
      >
        <div className={"relative px-4 my-20"}>
          <div className="absolute -top-1/4 -left-1/4 lg:-left-16 xl:-left-32">
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 411 411"
            >
              <g>
                <line
                  className={clsx(
                    "a l5",
                    this.state.visible && "stroke-dashoffset-0"
                  )}
                  x2="411"
                  y2="411"
                  transform={
                    "translate(50 0) rotate(" +
                    this.props.data.rotation +
                    " 205.5 205.5)"
                  }
                />
                <line
                  className={clsx(
                    "a l6",
                    this.state.visible && "stroke-dashoffset-0"
                  )}
                  x2="207"
                  y2="207"
                  transform="translate(0 200)"
                />
              </g>
            </svg>
          </div>
          <div
            className={clsx(
              "opacity-0 transition relative p-4 sm:pl-28 rounded-b-sm",
              this.state.visible && "opacity-100"
            )}
          >
            <div className="text-primary-main mb-12 font-bold text-3xl">
              {this.props.data.title}
            </div>
            <div className="mb-8">{this.props.data.summary}</div>
            <Link href={"/projects/" + this.props.data.slug}>
              <a className="font-bold">
                View Project
                <ArrowRight className="inline-block w-4 ml-1" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
