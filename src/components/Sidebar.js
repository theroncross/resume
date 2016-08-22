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
  const sidebarStyle = {
    width: '23%',
    minWidth: '200px',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#eee',
  };
  const navStyle = {
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  return (
    <Flex style={sidebarStyle} >
      <h3>Learn more</h3>
      <List items={routes} style={navStyle} />
    </Flex>
  );
};

export default Sidebar;
