import React from 'react';
import { connect } from 'react-redux';
import ProjectCard from './project-card';

const Projects = (props) => {
  const items = props.projects.map((project, i) => {
    return <ProjectCard {...project} key={i} />;
  });


  return (
    <main className=".b-project-list pure-u-1 pure-u-md-2-3">
      {items}
    </main>
  );
};

const { arrayOf, object } = React.PropTypes;

Projects.propTypes = {
  projects: arrayOf(object).isRequired,
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(Projects);
