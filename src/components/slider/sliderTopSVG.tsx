import React from "react";

const lines = [
  {
    id: 1,
    x: 435,
    y: 435,
    translate: {
      x: 1090,
      y: 0,
    },
    rotate: true,
  },
  {
    id: 2,
    x: 369,
    y: 369,
    translate: {
      x: 417,
      y: 0,
    },
    rotate: true,
  },
];

interface ISliderTopSVGProps {
  rotation: number;
}

const SliderTopSVG = (props: ISliderTopSVGProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1520 1080">
      <g>
        {lines.map((line, i) => {
          let transform;
          if (line.rotate) {
            transform =
              "translate(" +
              line.translate.x +
              " " +
              line.translate.y +
              ") rotate(" +
              props.rotation +
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
            <line
              key={i}
              className={"a l" + line.id}
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
export default SliderTopSVG;
