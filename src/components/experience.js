import React, { Component } from 'react';
import data from 'json!../../data';

class Experience extends Component {
  renderExperience() {
    return data.experience.map((job) => {
      return (
        <li key={job.company}>
          <strong>{job.title}</strong>{job.company}
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
