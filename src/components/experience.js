import React from 'react';
import { connect } from 'react-redux';
import ExperienceCard from './experience-card';

const Experience = (props) => {
  const items = props.experience.map((job, i) => {
    return <ExperienceCard {...job} key={i} />;
  });

  return (
    <main className="b-experience-list pure-u-1 pure-u-md-3-5">
      {items}
    </main>
  );
};


Experience.propTypes = {
  experience: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    experience: state.experience
      .sort((a, b) => { return (a.endDate < b.endDate) ? 1 : -1; }),
  };
};

export default connect(mapStateToProps)(Experience);
