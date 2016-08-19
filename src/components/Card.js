import React from 'react';
import List from './List';
import Flex from './Flex';

const Card = (props) => {
  return (
    <Flex {...props} margin="5px 0" >
      <h3>{props.title}</h3>
      <List tag="h4" items={props.details} />
      <List
        items={props.accomplishments}
        tag="p"
        justifyContent="flex-start"
      />
      {props.children}
    </Flex>
  );
};

const { string, object, arrayOf } = React.PropTypes;

Card.propTypes = {
  title: string.isRequired,
  details: arrayOf(string).isRequired,
  accomplishments: arrayOf(string),
  children: object,
};

export default Card;
