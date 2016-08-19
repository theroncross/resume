import React from 'react';
import Container from './Map';
import Card from './Card';

const ExperienceCard = (props) => {
  return (
    <Card
      title={props.title}
      details={[props.company, props.location, `${props.startDate}-${props.endDate}`]}
      accomplishments={props.contributions}
    >
      <div className="map-container">
        <Container
          className="map"
          google={window.google}
          lat={props.lat}
          lng={props.lng}
        />
      </div>
    </Card>
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
  lat: string,
  lng: string,
};

export default ExperienceCard;
