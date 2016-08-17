import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSkillRating } from '../actions';
import SkillsChart from './skills-chart';

class SkillsContainer extends Component {
  render() {
    const { skills } = this.props;

    return (
      <SkillsChart
        className="SkillsContainer"
        skills={skills}
      />
    );
  }
}

SkillsContainer.propTypes = {
  skills: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    skills: state.skills,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSkillClick: (id) => {
      dispatch(fetchSkillRating(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillsContainer);
