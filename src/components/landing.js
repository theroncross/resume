import React from 'react';
import { connect } from 'react-redux';
import Bio from './bio';

const Landing = (props) => {
  const links = props.externalLinks.map((link) => {
    return (
      <li className="pure-menu-item" key={link.site}>
        <a
          className=".b-landing__link pure-menu-link"
          href={link.href}
        >{link.site}</a>
      </li>
    );
  });

  return (
    <main className=".b-landing pure-u-1" >
      <ul className="pure-menu pure-menu-horizontal">{links}</ul>
      <Bio />
    </main>
  );
};

Landing.propTypes = {
  externalLinks: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return { externalLinks: state.externalLinks };
};

export default connect(mapStateToProps)(Landing);
