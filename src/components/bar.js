import React from 'react';

const Bar = ({
    transform,
    id,
    width,
    height,
    x,
    y,
    fill,
    text }) => {
  return (
    <g id={id} transform={transform}>
      <rect
        className="bar"
        width={width}
        height={height - 1}
        fill={fill}
      />
      <text x={x} y={y} dy=".35em">{text}</text>
    </g>
  );
};

Bar.propTypes = {
  id: React.PropTypes.string.isRequired,
  transform: React.PropTypes.string.isRequired,
  width: React.PropTypes.string.isRequired,
  height: React.PropTypes.string.isRequired,
  fill: React.PropTypes.string.isRequired,
  x: React.PropTypes.string,
  y: React.PropTypes.number,
  text: React.PropTypes.string,
};

module.exports = Bar;
