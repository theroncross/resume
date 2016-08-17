import React, { Component } from 'react';
import { connect } from 'react-redux';

class Project extends Component {
  renderProject() {
    return this.props.projects.map((project) => {
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

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(Project);
