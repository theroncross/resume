import React, { Component } from 'react';
import data from 'json!../../data';

class Project extends Component {
  renderProject() {
    return data.projects.map((project) => {
      return (
        <li key={project.name}>
          <div>
            <a href={project.url}><strong>{project.name}</strong></a>
            {project.description}
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="Project">
        <ul>
          {this.renderProject()}
        </ul>
      </div>
    );
  }
}

export default Project;
