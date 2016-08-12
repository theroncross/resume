import React from 'react';

const ExperienceCard = ({
    title,
    company,
    startDate,
    endDate,
    location,
    contributions }) => {
  return (
    <div className="ExperienceCard">
      <h3 className="title">{title}</h3>
      <ul className="experienceDetails">
        <li><h4 className="company">{company}</h4></li>
        <li><h4 className="location">{location}</h4></li>
        <li><h4 className="dates">{startDate}-{endDate}</h4></li>
      </ul>
      <ul className="contributions">
        {contributions.map((c) => {
          return <li>> {c}</li>;
        })}
      </ul>
    </div>
  );
};

ExperienceCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  company: React.PropTypes.string.isRequired,
  startDate: React.PropTypes.string.isRequired,
  endDate: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  contributions: React.PropTypes.array.isRequired,
};

export default ExperienceCard;
