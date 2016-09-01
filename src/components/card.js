import React from 'react';
import List from './list';
import Flex from './flex';

const Card = (props) => {
  const { title, details, accomplishments, children } = props;

  return (
    <Flex>
      <h2>{title}</h2>
      <List
        items={details}
        tag="h4"
      />
      <List
        items={accomplishments}
        tag="p"
        style={{ justifyContent: 'flex-start' }}
      />
      {children}
    </Flex>
  );
};

const { string, node, object, arrayOf } = React.PropTypes;

Card.propTypes = {
  title: node.isRequired,
  details: arrayOf(node),
  accomplishments: arrayOf(string),
  children: object,
};

export default Card;
