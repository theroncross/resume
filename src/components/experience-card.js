import React from 'react';
import Container from './map';

const ExperienceCard = (props) => {
  const { title, company, location, startDate, endDate, contributions, lat, lng } = props;
  const details = [company, location, `${startDate}-${endDate}`]
    .map((detail, i) => {
      return (
        <li className="b-experience-card__detail" key={i}>
          <h4>{detail}</h4>
        </li>
      );
    });
  const contribs = contributions.map((contribution, i) => {
    return <li key={i}>{contribution}</li>;
  });

  return (
    <section className="b-experience-card">
      <h2 className="b-experience-card__title">{title}</h2>
      <ul className="b-experience-card__detail-list">
        {details}
      </ul>
      <ul className="b-experience-card__contribution-list">
        {contribs}
      </ul>
      <div className="map-container">
        <Container
          className="map"
          google={window.google}
          lat={lat}
          lng={lng}
        />
      </div>
    </section>
  );
};

const { string, number, arrayOf } = React.PropTypes;

ExperienceCard.propTypes = {
  title: string.isRequired,
  company: string.isRequired,
  startDate: string.isRequired,
  endDate: string.isRequired,
  location: string.isRequired,
  contributions: arrayOf(string).isRequired,
  lat: number,
  lng: number,
};

export default ExperienceCard;
