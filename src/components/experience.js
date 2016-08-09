import React, { Component } from 'react';
import data from 'json!../../data';

class Experience extends Component {
  renderExperience() {
    return data.experience.map((job) => {
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

export default Experience;
