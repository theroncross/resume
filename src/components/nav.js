import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  const pages = ['experience', 'education', 'skills', 'projects'];
  const links = pages.map((page) => {
    return (
      <li className="pure-menu-item" key={page}>
        <Link to={`/${page}`} className="b-nav__link pure-menu-link" >
          {page}
        </Link>
      </li>
    );
  });

  return <ul className="b-nav pure-u-md-3-5">{links}</ul>;
};

export default Nav;
