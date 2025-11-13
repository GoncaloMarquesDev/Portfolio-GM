import React from "react";
import "./Education.scss";

interface EducationProps {
  courseDesignation: string;
  year: string;
  school: string;
}

const Education: React.FC<EducationProps> = ({
  courseDesignation,
  year,
  school
}) => {
  return (
   <div className="education-section">
        <div className="formation">
          <p className="course">{courseDesignation}</p>
          <p className="year">{year}</p>
        </div>
        <p className="school">{school}</p>
        <hr className="about-line" /> 
      </div>
  );
};
export default Education;
