import React, { Component } from 'react';
import * as d3 from 'd3';
import Bar from './bar';

class SkillsChart extends Component {
  constructor(props) {
    super(props);

    this.renderBars = this.renderBars.bind(this);
    this.scale = this.scale.bind(this);
    this.translate = this.translate.bind(this);
  }

  translate(i) {
    return `translate(0, ${i * this.props.height})`;
  }

  scale(val) {
    return `${d3.scaleLinear()
    .domain([0, 5])
    .range([0, this.props.width])(val)}%`;
  }

  renderBars() {
    return this.props.skills.map((skill, i) => {
      return (
        <Bar
          key={skill.name}
          id={skill.name}
          transform={this.translate(i)}
          width={this.scale(skill.rating)}
          height={this.props.height}
          fill={this.props.fill}
          x={this.scale(skill.rating - 0.2)}
          y={this.props.height / 2}
          text={skill.name}
        />
      );
    });
  }

  render() {
    const { skills } = this.props;

    return (
      <svg
        className="SkillsChart"
        width={this.scale(5)}
        height={this.props.height * skills.length}
      >
        {this.renderBars()}
      </svg>
    );
  }
}

SkillsChart.propTypes = {
  skills: React.PropTypes.array,
  width: React.PropTypes.string.isRequired,
  height: React.PropTypes.string.isRequired,
  fill: React.PropTypes.string.isRequired,
};

SkillsChart.defaultProps = {
  width: '90',
  height: '20',
  fill: 'steelblue',
};

export default SkillsChart;
