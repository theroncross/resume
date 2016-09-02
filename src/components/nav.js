import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: props.menuOpen };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  renderLinks() {
    const pages = ['experience', 'education', 'skills', 'projects'];
    return pages.map((page) => {
      return (
        <li className="b-nav-item pure-menu-item" key={page}>
          <Link
            to={`/${page}`}
            className="b-nav__link pure-menu-link"
            onClick={this.toggleMenu}
          >
            {page}
          </Link>
        </li>
      );
    });
  }

  render() {
    const toggleClass = classNames('custom-toggle', {
      'x': this.state.menuOpen,
    });
    const navClass = classNames('b-nav', 'pure-menu-list', 'custom-can-transform', {
      'open': this.state.menuOpen,
    });

    return (
      <nav className="pure-menu">
        <a href="#" className={toggleClass} onClick={this.toggleMenu}>
          <s className="bar" />
          <s className="bar" />
        </a>
        <ul className={navClass}>{this.renderLinks()}</ul>
      </nav>
    );
  }
}

Nav.defaultProps = {
  menuOpen: true,
};

export default Nav;
