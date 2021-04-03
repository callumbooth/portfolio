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
      className={clsx(
        "dot rounded bg-gray-300 border border-solid border-primary-main w-5 h-5 mx-4 cursor-pointer transition duration-200 hover:bg-primary-main active:bg-primary-main",
        active && "bg-primary-main"
      )}
      aria-label={clsx(`dot-${count}`)}
    />
  );
};
export default Dot;
