import React, { Component } from 'react';
import data from 'json!../../data';

class Skills extends Component {
  renderSkills() {
    return data.skills.map((skill) => {
      return (
        <li key={skill.name} className="skill-card">
          <div>
            <strong>{skill.name}</strong>
            <span>{skill.rating}</span>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="Skills">
        <ul>
          {this.renderSkills()}
        </ul>
      </div>
    );
  }
}

export default Skills;
