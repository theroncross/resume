import React from 'react';

const EducationCard = ({
    school,
    degree,
    gradDate,
    location,
    description }) => {
  return (
    <div className="EducationCard">
      <h3 className="degree">{degree}</h3>
      <ul className="schoolDetails">
        <li><h4 className="school">{school}</h4></li>
        <li><h4 className="location">{location}</h4></li>
        <li><h4 className="gradDate">{gradDate}</h4></li>
      </ul>
      <p className="description">{description}</p>
    </div>
  );
};

EducationCard.propTypes = {
  school: React.PropTypes.string.isRequired,
  degree: React.PropTypes.string.isRequired,
  gradDate: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
};

export default EducationCard;
