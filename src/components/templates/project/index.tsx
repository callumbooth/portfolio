import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import ArrowLeftIcon from "@heroicons/react/solid/ArrowLeftIcon";
import GithubIcon from "@/components/icons/github";
import { motion } from "framer-motion";

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

const animateIn = {
  hidden: {
    strokeDashoffset: 100,
  },
  visible: {
    strokeDashoffset: 0,
  },
};

const lineProps = {
  variants: animateIn,
  initial: "hidden",
  animate: "visible",
  pathLength: "100",
  strokeDasharray: "100",
  transition: {
    default: { duration: 1 },
  },
  className: "stroke-current stroke-3 text-primary-main",
};

const Project = ({ children, ...props }: IProjectProps) => {
  const router = useRouter();
  const returnURL = "/projects";

  const goBack = (e) => {
    e.preventDefault();
    router.push(returnURL);
  };

  return (
    <div id="project" className={"relative page-" + props.project.slug}>
      <div className="bg-white bg-opacity-80 mr-10 lg:mr-20 xl:mr-32">
        <div className="absolute w-full top-0 z-10 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1525 370">
            <g>
              <motion.line
                x2="113"
                fill="none"
                y2="113"
                transform={
                  "translate(1383 0) rotate(" + props.project.rotate + " 0 0)"
                }
                {...lineProps}
              />
              <motion.line
                x2="264"
                y2="264"
                transform={
                  "translate(512 0) rotate(" + props.project.rotate + " 0 0)"
                }
                {...lineProps}
              />
              <motion.line
                x2="113"
                y2="113"
                transform="translate(586 0)"
                {...lineProps}
              />
              <motion.line
                x2="114"
                y2="114"
                transform="translate(806 0)"
                {...lineProps}
              />
              <motion.line
                x2="335"
                y2="335"
                transform="translate(1190 0)"
                {...lineProps}
              />
              <motion.line
                x2="117"
                y2="117"
                transform={
                  "translate(1100 0) rotate(" + props.project.rotate + " 0 0)"
                }
                {...lineProps}
              />
              <motion.path
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                  },
                }}
                transition={{
                  duration: 1,
                }}
                className="fill-current text-gray-300"
                d="M587,0 l112,112 h217 l-112,-112 Z"
              />
            </g>
          </svg>
        </div>
        <div className="relative p-10 lg:p-20 z-20">
          <div className="w-full">
            <div className="pb-20">
              <motion.div
                whileHover={{
                  x: -10,
                }}
              >
                <a
                  className=" uppercase font-bold flex items-center"
                  href={"/projects"}
                  onClick={goBack}
                >
                  <ArrowLeftIcon
                    className="w-4 inline-block mr-4"
                    fill="currentColor"
                  />
                  Back
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="pt-6"
              >
                <h2 className="text-primary-main">
                  {props.project.name}
                  {props.project.githubrepo ? (
                    <a
                      style={{ marginLeft: "1rem" }}
                      href={
                        "https://github.com/callumbooth/" +
                        props.project.githubrepo
                      }
                      target="_blank"
                      rel='noreferrer'
                    >
                      <GithubIcon
                        className="w-8 inline-block"
                        fill="currentColor"
                      />
                    </a>
                  ) : null}
                </h2>
              </motion.div>

              <motion.div
                className="mt-12 flex flex-w flex-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-1/2 sm:w-1/3 md:w-1/2 lg:w-1/3">
                  <h4>Skills used</h4>
                  <div className="flex flex-wrap">
                    {props.project.tags.map((tag, i) => {
                      return (
                        <div className="w-1/2" key={i}>
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-1/2 sm:w-2/3 md:w-1/2 lg:w-2/3">
                  <h4>Launched</h4>
                  <p className="text-2xl">{props.project.launched}</p>
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                },
              }}
              transition={{
                delay: 0.4,
              }}
              initial="hidden"
              animate="visible"
            >
              <div className="project-info">{children}</div>
              <div className="additonal-images"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
