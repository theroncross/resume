import React from 'react';
import { connect } from 'react-redux';
import EducationCard from './education-card';

const Education = (props) => {
  return (
    <main className="b-education-list pure-u-1 pure-u-md-3-5">
      {props.education.map((school, i) => {
        return <EducationCard {...school} key={i} />;
      })}
    </main>
  );
};

Education.propTypes = {
  education: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    education: state.education,
  };
};

export default connect(mapStateToProps)(Education);
