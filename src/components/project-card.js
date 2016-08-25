import React from 'react';
import Card from './Card';

const ProjectCard = (props) => {
  const { name, description, url, source } = props;

  return (
    <Card
      title={<a href={url}>{name}</a>}
      details={[
        <a href={source}>Github Repo</a>,
      ]}
      accomplishments={[description]}
    />
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
