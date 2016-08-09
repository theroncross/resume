import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillsChart from './skills-chart';
import { fetchSkills } from '../actions';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = { skills: [] };
  }

  // componentWillMount() {
  //   this.props.fetchSkills();
  // }

  componentDidMount() {
    this.props.fetchSkills();
    SkillsChart.create(ReactDOM.findDOMNode(this), this.props);
  }

  render() {
    return <div className="Skills"></div>;
  }
}

Skills.propTypes = {
  fetchSkills: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSkills }, dispatch);
}

// null argument is because we don't need state here
export default connect(null, mapDispatchToProps)(Skills);
