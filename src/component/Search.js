import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const Search = ({ jobData, setFilteredJobs }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [locationOptions] = useState([
    "New York",
    "Los Angeles",
    "Chicago",
    "San Francisco",
    "Delhi",
    "Noida",
    "Bangalore",
  ]);

  const [isRoleOpen, setRoleOpen] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [roleOptions] = useState([
    "Internship",
    "Full-Time",
    "Part-Time",
    "Contract",
  ]);

  const [isExperienceOpen, setExperienceOpen] = useState(false);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [experienceOptions] = useState([
    "Entry-Level",
    "Fresher",
    "Mid-Senior Level",
    "5+",
  ]);

  const [isEducationOpen, setEducationOpen] = useState(false);
  const [selectedEducations, setSelectedEducations] = useState([]);
  const [educationOptions] = useState([
    "High School",
    "Undergraduate",
    "Post Graduate",
    "MBA",
  ]);
  const resetFilters = () => {
    setSelectedLocations([]);
    setSelectedRoles([]);
    setSelectedExperiences([]);
    setSelectedEducations([]);
    setKeyword("");
  };

  const [keyword, setKeyword] = useState(""); // State for search keyword
  const [noMatchesFound, setNoMatchesFound] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleLocationDropdown = () => {
    setLocationOpen(!isLocationOpen);
  };

  const toggleRoleDropdown = () => {
    setRoleOpen(!isRoleOpen);
  };

  const toggleExperienceDropdown = () => {
    setExperienceOpen(!isExperienceOpen);
  };

  const toggleEducationDropdown = () => {
    setEducationOpen(!isEducationOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
    setLocationOpen(false);
  };

  const handleLocationChange = (location) => {
    const updatedLocations = selectedLocations.includes(location)
      ? selectedLocations.filter((loc) => loc !== location)
      : [...selectedLocations, location];
    setSelectedLocations(updatedLocations);
  };

  const handleRoleChange = (role) => {
    const updatedRoles = selectedRoles.includes(role)
      ? selectedRoles.filter((rol) => rol !== role)
      : [...selectedRoles, role];
    setSelectedRoles(updatedRoles);
  };

  const handleExperienceChange = (experience) => {
    const updatedExperiences = selectedExperiences.includes(experience)
      ? selectedExperiences.filter((exp) => exp !== experience)
      : [...selectedExperiences, experience];
    setSelectedExperiences(updatedExperiences);
  };

  const handleEducationChange = (education) => {
    const updatedEducations = selectedEducations.includes(education)
      ? selectedEducations.filter((edu) => edu !== education)
      : [...selectedEducations, education];
    setSelectedEducations(updatedEducations);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const applyFilters = () => {
    const filteredJobs = jobData.filter((job) => {
      // Filter by location (allowing for substring matching)
      if (
        selectedLocations.length > 0 &&
        !selectedLocations.some((location) => job.location.includes(location))
      ) {
        return false;
      }
      // Filter by role (allowing for substring matching)
      if (
        selectedRoles.length > 0 &&
        !selectedRoles.some((role) => job.role.includes(role))
      ) {
        return false;
      }
      // Filter by experience (allowing for substring matching)
      if (
        selectedExperiences.length > 0 &&
        !selectedExperiences.some((exp) => job.experience.includes(exp))
      ) {
        return false;
      }
      // Filter by education (allowing for substring matching)
      if (
        selectedEducations.length > 0 &&
        !selectedEducations.some((edu) => job.education.includes(edu))
      ) {
        return false;
      }
      // Filter by keyword (allowing for substring matching)
      if (
        keyword.trim() !== "" &&
        !job.title.toLowerCase().includes(keyword.toLowerCase())
      ) {
        return false;
      }
      return true;
    });

    // Set noMatchesFound based on filteredJobs
    setNoMatchesFound(filteredJobs.length === 0);

    setFilteredJobs(filteredJobs);
    closeDropdown();
  };

  return (
    <div className="main">
      <div className="search-container">
        <p onClick={toggleDropdown} className="search-label">
          Search by keywords and filters <AiOutlineDown />
        </p>
        {isDropdownOpen && (
          <div className="filter-dropdown">
            <input
              className="srch"
              type="text"
              placeholder="Enter keywords"
              value={keyword}
              onChange={handleKeywordChange}
            />
            <p onClick={toggleLocationDropdown}>
              Locations <AiOutlineDown />
            </p>
            {isLocationOpen && (
              <div className="checkbox-container">
                {locationOptions.map((location, index) => (
                  <div key={index} className="checkbox-item">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        value={location}
                        checked={selectedLocations.includes(location)}
                        onChange={() => handleLocationChange(location)}
                      />
                      {location}
                    </label>
                  </div>
                ))}
              </div>
            )}
            <p onClick={toggleRoleDropdown}>
              Roles <AiOutlineDown />
            </p>
            {isRoleOpen && (
              <div className="checkbox-container">
                {roleOptions.map((role, index) => (
                  <div key={index} className="checkbox-item">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        value={role}
                        checked={selectedRoles.includes(role)}
                        onChange={() => handleRoleChange(role)}
                      />
                      {role}
                    </label>
                  </div>
                ))}
              </div>
            )}
            <p onClick={toggleExperienceDropdown}>
              Experience <AiOutlineDown />
            </p>
            {isExperienceOpen && (
              <div className="checkbox-container">
                {experienceOptions.map((experience, index) => (
                  <div key={index} className="checkbox-item">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        value={experience}
                        checked={selectedExperiences.includes(experience)}
                        onChange={() => handleExperienceChange(experience)}
                      />
                      {experience}
                    </label>
                  </div>
                ))}
              </div>
            )}
            <p onClick={toggleEducationDropdown}>
              Education <AiOutlineDown />
            </p>
            {isEducationOpen && (
              <div className="checkbox-container">
                {educationOptions.map((education, index) => (
                  <div key={index} className="checkbox-item">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        value={education}
                        checked={selectedEducations.includes(education)}
                        onChange={() => handleEducationChange(education)}
                      />
                      {education}
                    </label>
                  </div>
                ))}
              </div>
            )}
            <button className="btn" onClick={applyFilters}>
              Apply
            </button>
            <button className="btn" onClick={resetFilters}>Reset</button>
          </div>
        )}
      </div>
      {noMatchesFound && <h1>No matches found.</h1>}
    </div>
  );
};

export default Search;
