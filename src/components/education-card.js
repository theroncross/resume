import React from 'react';

const EducationCard = (props) => {
  const details = [props.school, props.location, props.gradDate]
    .map((detail, i) => {
      return <li className="b-card__detail" key={i}><h4>{detail}</h4></li>;
    });

  return (
    <section className="b-education-card">
      <h2 className="b-education-card__title">{props.degree}</h2>
      <ul className="b-education-card__detail-list">
        {details}
      </ul>
      <p className="b-education-card__description">{props.description}</p>
    </section>
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
