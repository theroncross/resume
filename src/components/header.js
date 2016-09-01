import React from 'react';
import Brand from './brand';
import Nav from './nav';

const Header = () => {
  return (
    <header className="b-header pure-menu pure-menu-horizontal pure-u-1" >
      <Brand />
      <Nav />
    </header>
  );
};

export default Header;
