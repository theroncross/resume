import React, { Component } from 'react';
import data from 'json!../../data';

class Education extends Component {
  renderEducation() {
    return data.education.map((school) => {
      return (
        <li key={school.name}>
          <strong>{school.degree}</strong>{school.name}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="Education">
        <ul>
          {this.renderEducation()}
        </ul>
      </div>
    );
  }
}

export default Education;
