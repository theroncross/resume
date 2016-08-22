import React from 'react';
import List from './List';
import Flex from './Flex';

const Card = (props) => {
  const { title, details, accomplishments, children, style } = props;
  const cardStyle = {
    ...style,
    width: '90%',
    margin: "0 0 10px",
    padding: '0 3%',
    backgroundColor: "#eee",
  }

  return (
    <Flex style={cardStyle}>
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

const { string, object, arrayOf } = React.PropTypes;

Card.propTypes = {
  title: string.isRequired,
  details: arrayOf(string).isRequired,
  accomplishments: arrayOf(string),
  children: object,
};

export default Card;
