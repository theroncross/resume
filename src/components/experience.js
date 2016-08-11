import React, { Component } from 'react';
import { connect } from 'react-redux';

class Experience extends Component {
  renderExperience() {
    return this.props.experience.map((job) => {
      return (
        <li key={job.company}>
          <div className="experienceCard">
            <h3>{job.title}</h3>
            <h4>{job.company} | <em>{job.location}</em></h4>
          </div>
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
    experience: state.experience,
  };
};

export default connect(mapStateToProps)(Experience);
