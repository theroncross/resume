import React, { Component } from 'react';

class Bar extends Component {
  render() {
    return (
      <g transform={this.props.transform} key={this.props.text}>
        <rect
          width={this.props.barWidth}
          height={`${this.props.barHeight - 1}`}
          fill={this.props.barColor}
        />
        <text
          x={this.props.x}
          y={`${this.props.barHeight / 2}`}
          dy={this.props.dy}
          fill={this.props.textColor}
        >
          {this.props.text}
        </text>
      </g>
    );
  }
}

Bar.propTypes = {
  transform: React.PropTypes.string.isRequired,
  barWidth: React.PropTypes.string.isRequired,
  barHeight: React.PropTypes.string.isRequired,
  barColor: React.PropTypes.string,
  x: React.PropTypes.string.isRequired,
  dy: React.PropTypes.string,
  textColor: React.PropTypes.string,
  text: React.PropTypes.string.isRequired
};

Bar.defaultProps = {
  barColor: "steelblue",
  dy: ".35em",
  textColor: "white"
};

export default Bar;