import React from 'react';
import Card from './Card';

const EducationCard = (props) => {
  return (
    <Card
      title={props.degree}
      details={[props.school, props.location, props.gradDate]}
      accomplishments={[props.description]}
    />
  );
};

const { string } = React.PropTypes;

EducationCard.propTypes = {
  school: string.isRequired,
  degree: string.isRequired,
  gradDate: string.isRequired,
  location: string.isRequired,
  description: string.isRequired,
};

export default EducationCard;
