import React, { ReactNode } from "react";
import posed from "react-pose";
import { useRouter } from "next/router";
import ArrowLeftIcon from "@heroicons/react/solid/ArrowLeftIcon";
import GithubIcon from "@/components/icons/github";

const Return = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 },
  hoverable: true,
  init: {
    x: 0,
  },
  hover: {
    x: -10,
  },
});

const Box = posed.div({
  enter: { opacity: 1, delay: 100 },
  exit: { opacity: 0 },
});

const Box2 = posed.div({
  enter: { opacity: 1, delay: 200 },
  exit: { opacity: 0 },
});

const Box3 = posed.div({
  enter: { opacity: 1, delay: 400 },
  exit: { opacity: 0 },
});

interface IProjectProps {
  children: ReactNode;
  project: {
    slug: string;
    rotate: number;
    name: string;
    githubrepo: string;
    tags: string[];
    launched: string;
  };
}

const Project = ({ children, ...props }: IProjectProps) => {
  const router = useRouter();
  const returnURL = "/projects";

  const goBack = (e) => {
    e.preventDefault();
    router.push(returnURL);
  };

  return (
    <div id="project" className={"page-" + props.project.slug}>
      <div className="project-wrapper">
        <div className={"project-svg fadeIn"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1525 370">
            <g>
              <line
                className="a l1"
                x2="113"
                y2="113"
                transform={
                  "translate(1383 0) rotate(" + props.project.rotate + " 0 0)"
                }
              />
              <line
                className="a l2"
                x2="264"
                y2="264"
                transform={
                  "translate(512 0) rotate(" + props.project.rotate + " 0 0)"
                }
              />
              <line
                className="a l3"
                x2="113"
                y2="113"
                transform="translate(586 0)"
              />
              <line
                className="a l4"
                x2="114"
                y2="114"
                transform="translate(806 0)"
              />
              <line
                className="a l5"
                x2="335"
                y2="335"
                transform="translate(1190 0)"
              />
              <line
                className="a l6"
                x2="117"
                y2="117"
                transform={
                  "translate(1100 0) rotate(" + props.project.rotate + " 0 0)"
                }
              />
              <path className="b b1" d="M587,0 l112,112 h217 l-112,-112 Z" />
            </g>
          </svg>
        </div>
        <div className="page-content">
          <div className="content">
            <div className="project-header">
              <Return style={{ display: "inline-block" }}>
                <a
                  className="returnto text-uppercase text-bold flex items-center"
                  href={"/projects"}
                  onClick={goBack}
                >
                  <ArrowLeftIcon
                    className="w-4 inline-block"
                    fill="currentColor"
                  />
                  Back
                </a>
              </Return>
              <Box className="project-title">
                <h2 className="text-red">
                  {props.project.name}
                  {props.project.githubrepo ? (
                    <a
                      style={{ marginLeft: "1rem" }}
                      href={
                        "https://github.com/callumbooth/" +
                        props.project.githubrepo
                      }
                      target="_blank"
                    >
                      <GithubIcon
                        className="w-8 inline-block"
                        fill="currentColor"
                      />
                    </a>
                  ) : null}
                </h2>
              </Box>
              <Box2 className="meta">
                <div className="tags">
                  <h4>Skills used</h4>
                  <div className="tags-list two-col">
                    {props.project.tags.map((tag, i) => {
                      return (
                        <div className="tag-item" key={i}>
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="launched">
                  <h4>Launched</h4>
                  <p className="text-large">{props.project.launched}</p>
                </div>
              </Box2>
            </div>
            <Box3 className="project-body">
              <div className="project-info">{children}</div>
              <div className="additonal-images"></div>
            </Box3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
