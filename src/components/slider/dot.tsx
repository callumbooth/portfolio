import clsx from "clsx";
import React from "react";

export interface IDotProps {
  active?: boolean;
  count: number;
  handleClick: () => void;
}

const Dot = ({ active, count, handleClick }) => {
  return (
    <button
      id={"dot-" + count}
      data-target={count + 1}
      onClick={handleClick}
      className={clsx("dot", active && "active")}
      aria-label={`dot-${count}`}
    />
  );
};
export default Dot;
