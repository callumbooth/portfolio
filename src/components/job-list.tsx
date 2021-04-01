import React from 'react';

const Job = (props) => {
    return (
        <div className="job-list-item">
            <h6 className="company">{props.data.company}</h6>
            <div className="job-title">
                {props.data.jobTitle}
            </div>
            <div className="duration">
                {props.data.duration}
            </div>
        </div>
    );
}

export default Job;