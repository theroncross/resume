import React from 'react';
import Container from './Map';

const ExperienceCard = (props) => {
  return (
    <div className="card">
      <h3 className="title">{props.title}</h3>
      <ul className="details">
        <li><h4 className="company">{props.company}</h4></li>
        <li><h4 className="location">{props.location}</h4></li>
        <li><h4 className="dates">{props.startDate}-{props.endDate}</h4></li>
      </ul>
      <ul className="contributions">
        {props.contributions.map((c, i) => {
          return <li key={i}>> {c}</li>;
        })}
      </ul>
      <div className="map-container">
        <Container
          className="map"
          google={window.google}
          lat={props.lat}
          lng={props.lng}
        />
      </div>
    </div>
  );
};

const { string, arrayOf } = React.PropTypes;

ExperienceCard.propTypes = {
  title: string.isRequired,
  company: string.isRequired,
  startDate: string.isRequired,
  endDate: string.isRequired,
  location: string.isRequired,
  contributions: arrayOf(string).isRequired,
};

export default ExperienceCard;
