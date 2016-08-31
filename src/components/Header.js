import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import Flex from './Flex';
import List from './List';

require('../stylesheets/main.scss');

const Nav = () => {
  const routes = [
    <Link to="/experience">Experience</Link>,
    <Link to="/education">Education</Link>,
    <Link to="/skills">Skills</Link>,
    <Link to="/projects">Projects</Link>,
  ];
  const navClass = classNames('header-nav');

  return (
    <List items={routes} className={navClass} />
  );
};

const Header = () => {
  const headerClass = classNames('header');

  return (
    <Flex className={headerClass} >
      <Link to="/" style={{ width: '25%' }}><h1>Theron Cross</h1></Link>
      <Nav />
    </Flex>
  );
};

export default Header;
