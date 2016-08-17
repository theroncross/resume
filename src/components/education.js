import React, { Component } from 'react';
import { connect } from 'react-redux';
import EducationCard from './education-card';

class Education extends Component {
  renderEducation() {
    return this.props.education.map((school) => {
      return (
        <li key={school.name}>
          <EducationCard
            degree={school.degree}
            school={school.school}
            location={school.location}
            gradDate={school.gradDate}
            description={school.description}
          />
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
