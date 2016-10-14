import React from 'react';

const ProjectCard = (props) => {
  const { name, description, url, source } = props;

  return (
    <div>
      <h3 className="project__title">{name}</h3>
      <a className="project__source-link" href={source}>Github Repo</a>
      <p className="project__description">{[description]}</p>
    </div>
  );
};

const { string } = React.PropTypes;

ProjectCard.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  url: string.isRequired,
  source: string.isRequired,
};

export default ProjectCard;
