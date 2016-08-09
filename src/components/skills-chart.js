import React, { Component } from 'react';
import * as d3 from 'd3';
import data from 'json!../../data';

class SkillsChart extends Component {
  constructor(props) {
    super(props);

    this.renderBars = this.renderBars.bind(this);
    this.scale = this.scale.bind(this);
    this.translate = this.translate.bind(this);
  }

  translate(rating, i) {
    return `translate(0, ${i * this.props.barHeight})`;
  }

  scale(val) {
    return `${d3.scaleLinear()
    .domain([0, 5])
    .range([0, this.props.width])(val)}%`;
  }

  renderBars() {
    return this.props.skillsData.map((skill, i) => {
      return (
        <g transform={this.translate(skill.rating, i)} key={skill.name}>
          <rect
            width={this.scale(skill.rating)}
            height={this.props.barHeight - 1}
            fill="steelblue"
          />
          <text
            x={this.scale(skill.rating - 0.2)}
            y={this.props.barHeight / 2}
            dy=".35em"
            fill="white"
          >
            {skill.name}
          </text>
        </g>
      );
    });
  }

  render() {
    return (
      <svg
        className="SkillsChart"
        width={this.scale(5)}
        height={this.props.barHeight * this.props.skillsData.length}
      >
        {this.renderBars()}
      </svg>
    );
  }
}

SkillsChart.propTypes = {
  skillsData: React.PropTypes.array,
  width: React.PropTypes.number.isRequired,
  barHeight: React.PropTypes.number.isRequired,
};

SkillsChart.defaultProps = {
  skillsData: data.skills.map((skill) => {
    return {
      name: skill.name,
      rating: skill.rating,
    };
  }).sort((a, b) => {
    return a.rating < b.rating ? 1 : -1;
  }),
  width: 90,
  barHeight: 20,
};

export default SkillsChart;
