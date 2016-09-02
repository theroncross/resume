import React from 'react';
import { connect } from 'react-redux';
import Bio from './bio';

const Landing = (props) => {
  const links = props.contact.map((link) => {
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
    <main className="b-landing pure-u-1 pure-u-md-3-5" >
      <ul className="pure-menu pure-menu-horizontal">{links}</ul>
      <Bio />
    </main>
  );
};

Landing.propTypes = {
  contact: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return { contact: state.contact };
};

export default connect(mapStateToProps)(Landing);
