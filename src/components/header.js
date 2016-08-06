import React, { Component } from 'react';
import { Link } from 'react-router';
import ContactCard from './contact-card';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <ContactCard />
        <ul className="nav-bar">
          <li key="experience">
            <Link to="/experience">Experience</Link>
          </li>
          <li key="education">
            <Link to="/education">Education</Link>
          </li>
          <li key="skills">
            <Link to="/skills">Skills</Link>
          </li>
          <li key="projects">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
