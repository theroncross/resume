import React from 'react';
import { connect } from 'react-redux';
import EducationCard from './education-card';
import List from './List';

const Education = (props) => {
  return (
    <List
      items={props.education.map((school) => {
        return <EducationCard {...school} />;
      })}
      tag="div"
      direction="column"
      width="65%"
    />
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
