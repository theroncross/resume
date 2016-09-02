import React from 'react';
import { connect } from 'react-redux';
import { sortSkills } from '../actions';
import SkillsChart from './skills-chart';

const Skills = (props) => {
  const { skills, handleSelectChange } = props;

  const sortData = () => {
    let sortedData;
    if (skills.sortCriterion === 'name') {
      sortedData = skills.data.slice().sort((a, b) => {
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      });
    } else {
      sortedData = skills.data.slice().sort((a, b) => {
        return a.rating < b.rating ? 1 : -1;
      });
    }
    return sortedData;
  };

  return (
    <main className="b-skills pure-u-1 pure-u-md-3-5">
      <div>
        <h4>Sort skills by:</h4>
        <select
          value={skills.sortCriterion}
          onChange={handleSelectChange}
        >
          <option value="name">Name</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <SkillsChart data={sortData()} />
    </main>
  );
};

const { object, func } = React.PropTypes;

Skills.propTypes = {
  skills: object.isRequired,
  handleSelectChange: func.isRequired,
};

const mapStateToProps = (state) => {
  const { skills, handleSelectChange } = state;
  return {
    skills,
    handleSelectChange,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleSelectChange(e) {
    dispatch(sortSkills(e.target.value));
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skills);
