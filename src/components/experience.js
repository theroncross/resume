import React from 'react';
import { connect } from 'react-redux';
import ExperienceCard from './experience-card';
import List from './List';

const Experience = (props) => {
  return (
    <List
      items={props.experience.map((job) => {
        return <ExperienceCard {...job} />;
      })}
      direction="column"
      width="70%"
      padding="0"
    />
  );
};


Experience.propTypes = {
  experience: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    experience: state.experience.sort((a, b) => { return (a.endDate < b.endDate) ? 1 : -1; }),
  };
};

export default connect(mapStateToProps)(Experience);
