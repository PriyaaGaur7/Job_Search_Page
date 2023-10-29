import React from "react";
import {FaMapPin} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation



const JobListing = ({ job }) => {
  return (
    <div className="job-listing">
      <h1>{job.title}</h1>
      <h3>{job.company}</h3>
      <h4>
        {" "}
        <FaMapPin /> {job.location}
      </h4>
      <h3>{job.role}</h3>
      <Link to={`/job/${job.id}` }>
        <button>View Details</button></Link>
    </div>
  );
};

export default JobListing;
