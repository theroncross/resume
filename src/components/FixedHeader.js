import React from 'react';
import { Link } from 'react-router';
import Flex from './Flex';
import List from './List';
import { colors } from './styles';

const FixedHeader = () => {
  const routes = [
    <Link to="/experience">Experience</Link>,
    <Link to="/education">Education</Link>,
    <Link to="/skills">Skills</Link>,
    <Link to="/projects">Projects</Link>,
  ];
  const fixedHeaderStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    minHeight: '50px',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.medium,
    zIndex: 9999,
  };
  const navStyle = {
    width: '40%',
    justifyContent: 'space-around',
  };

  return (
    <Flex style={fixedHeaderStyle} >
      <Link to="/" style={{ width: '25%' }}><h1>Theron Cross</h1></Link>
      <List items={routes} style={navStyle} />
    </Flex>
  );
};

export default FixedHeader;
