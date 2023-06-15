import React from "react";
import { Employment } from "@/generated/schemas";
import format from "date-fns/format";

interface IJobProps {
  data: {
    company: string;
    jobTitle: string;
    startDate: string;
    endDate?: string;
  };
}

const Job = (props: IJobProps) => {
  return (
    <div className="mb-5">
      <h6 className="mb-1">{props.data.company}</h6>
      <div>{props.data.jobTitle}</div>
      <div className="font-bold uppercase text-xs">
        {format(new Date(props.data.startDate), "MMMM yyyy")} -{" "}
        {props.data.endDate
          ? format(new Date(props.data.endDate), "MMMM yyyy")
          : "Present"}
      </div>
    </div>
  );
};

export default Job;
