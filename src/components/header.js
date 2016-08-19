import React from 'react';
import Flex from './Flex';
import List from './List';

const Header = () => {
  const links = [
    <a href="https://github.com/theroncross">Github</a>,
    <a href="https://www.linkedin/in/theroncross">LinkedIn</a>,
    <a href="https://twitter.com/theroncross">Twitter</a>,
  ];

  return (
    <Flex
      flexDirection="column"
      flexWrap="no-wrap"
      padding="15px 0 0"
    >
      <h2>Theron Cross</h2>
      <h4>theroncross@gmail.com</h4>
      <List
        items={links}
        width="40%"
        padding="15px 0"
        justifyContent="space-between"
      />
    </Flex>
  );
};

export default Header;
