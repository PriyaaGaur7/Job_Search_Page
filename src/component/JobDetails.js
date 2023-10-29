import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to access the job ID

const JobDetails = ({ jobData }) => {
  const { jobId } = useParams(); // Get the job ID from the URL

  // Find the job listing based on the job ID
  const job = jobData.find((job) => job.id === Number(jobId));

  if (!job) {
    return <div>Job not found.</div>;
  }

  return (
    <div className="job-details">
      <h1>{job.title}</h1>
      <span> Organization Name -</span>
      <p>
        {job.company} - {job.location}
      </p>
      <span>Who we are - </span>
      <p>{job.description}</p>
      <span>Responsibility - </span>
      <p>{job.responsibilities}</p>
      <a href="#">
        <button>Apply</button>
      </a>{" "}
      {/* Add a link to apply for the job */}
    </div>
  );
};

export default JobDetails;
