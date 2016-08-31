import React from 'react';
import classnames from 'classnames';
import List from './List';
import Flex from './Flex';

const Card = (props) => {
  const { title, details, accomplishments, children } = props;
  let classes = classnames('card', {

  });

  return (
    <Flex className={classes}>
      <h2>{title}</h2>
      <List
        items={details}
        tag="h4"
      />
      <List
        items={accomplishments}
        tag="p"
        style={{ justifyContent:"flex-start" }}
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
