import React, { Component } from 'react';
import { connect } from 'react-redux';

class Education extends Component {
  renderEducation() {
    return this.props.education.map((school) => {
      return (
        <li key={school.name}>
          <strong>{school.degree}</strong>{school.name}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="Education">
        <ul>
          {this.renderEducation()}
        </ul>
      </div>
    );
  }
}

Education.propTypes = {
  education: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    education: state.education,
  };
};

export default connect(mapStateToProps)(Education);
