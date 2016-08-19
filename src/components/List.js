import React from 'react';
import Flex from './Flex';

const List = ({ items, tag, color, ...props }) => {
  const Tag = tag;

  return (
    <Flex {...props} >
      {items.map((item, i) => {
        return <Tag key={i} >{item}</Tag>;
      })}
    </Flex>
  );
};

const { array, string } = React.PropTypes;

List.propTypes = {
  items: array.isRequired,
  tag: string.isRequired,
};

List.defaultProps = {
  tag: 'div',
};

export default List;
