import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

const lines = [
  {
    id: 3,
    x: 701,
    y: 701,
    translate: {
      x: 0,
      y: 410
    },
    rotate: true
  },
  {
    id: 4,
    x: 921,
    y: 921,
    rotate: true,
    translate: {
      x: 0,
      y: 190
    }
  },
  {
    id: 5,
    x: 411,
    y: 411,
    translate: {
      x: 1086,
      y: 669
    },
    rotate: true
  },
  {
    id: 6,
    x: 207,
    y: 207,
    translate: {
      x: 1008,
      y: 873
    },
    rotate: false
  }
];

interface ISliderBottomSVGProps extends React.SVGProps<SVGSVGElement> {
  rotation: number;
  show: boolean;
}

const animateIn = {
  hidden: {
    strokeDashoffset: 100
  },
  visible: {
    strokeDashoffset: 0,
    transition: {
      delay: 1.1
    }
  }
};

const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.1
    }
  }
};

const SliderBottomSVG = ({
  rotation,
  show,
  ...props
}: ISliderBottomSVGProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1520 1080" {...props}>
      <g>
        <motion.path
          className={" fill-current text-gray-200"}
          initial="hidden"
          animate={show ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          d="M0,0 l919,919 h-218 l-701,-701 Z"
          transform={"translate(0 190) rotate(" + rotation + " 459.5 459.5)"}
        />
        {lines.map((line, i) => {
          let transform: string;
          if (line.rotate) {
            transform =
              "translate(" +
              line.translate.x +
              " " +
              line.translate.y +
              ") rotate(" +
              rotation +
              " " +
              line.x / 2 +
              " " +
              line.y / 2 +
              ")";
          } else {
            transform =
              "translate(" + line.translate.x + " " + line.translate.y + ")";
          }
          return (
            <motion.line
              key={i}
              className={clsx("stroke-current text-primary-main stroke-3")}
              variants={animateIn}
              initial="hidden"
              animate={show ? "visible" : "hidden"}
              pathLength="100"
              strokeDasharray="100"
              transition={{ duration: 0.5 }}
              fill="none"
              x2={line.x}
              y2={line.y}
              transform={transform}
            />
          );
        })}
      </g>
    </svg>
  );
};
export default SliderBottomSVG;
