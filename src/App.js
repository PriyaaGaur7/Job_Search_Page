import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import JobDetails from "./component/JobDetails";
import JobListing from "./component/JobListing";
import JobData from "./component/JobData";
import Header from "./component/Header";
import Search from "./component/Search";
import Job from "./component/Job";
import Footer from "./component/Footer";

import "../src/index.css";

function App() {
  const [filteredJobListings, setFilteredJobListings] = useState(JobData);
  const [appliedFilters, setAppliedFilters] = useState({
    locations: [],
    roles: [],
    experiences: [],
    educations: [],
  });

  const applyFilters = (selectedFilters) => {
    if (JSON.stringify(selectedFilters) === JSON.stringify(appliedFilters)) {
      return;
    }

    const filteredJobs = JobData.filter((job) => {
      const isLocationMatch =
        selectedFilters.locations.length === 0 ||
        selectedFilters.locations.includes(job.location);
      const isRoleMatch =
        selectedFilters.roles.length === 0 ||
        selectedFilters.roles.includes(job.role);
      const isExperienceMatch =
        selectedFilters.experiences.length === 0 ||
        selectedFilters.experiences.includes(job.experience);
      const isEducationMatch =
        selectedFilters.educations.length === 0 ||
        selectedFilters.educations.includes(job.education);

      return (
        isLocationMatch &&
        isRoleMatch &&
        isExperienceMatch &&
        isEducationMatch
      );
    });

    setFilteredJobListings(filteredJobs);
    setAppliedFilters(selectedFilters);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Job />
              <Search
                setFilteredJobs={setFilteredJobListings}
                appliedFilters={appliedFilters}
                jobData={JobData}
              />
              {filteredJobListings.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </>
          }
        />
        <Route path="/job/:jobId" element={<JobDetails jobData={JobData} />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
