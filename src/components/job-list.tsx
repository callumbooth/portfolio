import React from "react";

const Job = (props) => {
  return (
    <div className="mb-5">
      <h6 className="mb-1">{props.data.company}</h6>
      <div className="job-title">{props.data.jobTitle}</div>
      <div className="font-bold uppercase text-xs">{props.data.duration}</div>
    </div>
  );
};

export default Job;
