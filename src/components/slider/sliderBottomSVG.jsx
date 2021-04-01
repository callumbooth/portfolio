import React from "react";

const SliderBottomSVG = (props) => {
  let lines = [
    {
      id: 3,
      x: 701,
      y: 701,
      translate: {
        x: 0,
        y: 410,
      },
      rotate: true,
    },
    {
      id: 4,
      x: 921,
      y: 921,
      rotate: true,
      translate: {
        x: 0,
        y: 190,
      },
    },
    {
      id: 5,
      x: 411,
      y: 411,
      translate: {
        x: 1086,
        y: 669,
      },
      rotate: true,
    },
    {
      id: 6,
      x: 207,
      y: 207,
      translate: {
        x: 1008,
        y: 873,
      },
      rotate: false,
    },
  ];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1520 1080">
      <g>
        <path
          className="b b1"
          d="M0,0 l919,919 h-218 l-701,-701 Z"
          transform={
            "translate(0 190) rotate(" + props.rotation + " 459.5 459.5)"
          }
        />
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
export default SliderBottomSVG;
