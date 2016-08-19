import React from 'react';
import { Link } from 'react-router';
import Flex from './Flex';
import List from './List';

const Sidebar = () => {
  const routes = [
    <Link to="/">Experience</Link>,
    <Link to="/education">Education</Link>,
    <Link to="/skills">Skills</Link>,
    <Link to="/projects">Projects</Link>,
  ];

  return (
    <Flex
      width="25%"
      flexDirection="column"
      justifyContent="flex-start"
      padding="28px 0"
    >
      <h3>Learn more</h3>
      <List
        items={routes}
        flexDirection="column"
        height="80px"
        justifyContent="space-between"
      />
    </Flex>
  );
};

export default Sidebar;
