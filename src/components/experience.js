import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExperienceCard from './experience-card';

class Experience extends Component {
  renderExperience() {
    return this.props.experience.map((job) => {
      return (
        <li key={job.company}>
          <ExperienceCard
            title={job.title}
            company={job.company}
            location={job.location}
            startDate={job.startDate}
            endDate={job.endDate}
            contributions={job.contributions}
          />
        </li>
      );
    });
  }

  render() {
    return (
      <div className="Experience">
        <ul>
          {this.renderExperience()}
        </ul>
      </div>
    );
  }
}

Experience.propTypes = {
  experience: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    experience: state.experience.sort((a, b) => { return (a.endDate < b.endDate) ? 1 : -1; }),
  };
};

export default connect(mapStateToProps)(Experience);
