import React from 'react';

const Flex = ({
    width,
    height,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    padding,
    margin,
    background,
    children,
  }) => {
  const sx = {
    display: 'flex',
    width,
    height,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    padding,
    margin,
    background,
  };

  return (
    <div style={sx}>
      {children}
    </div>
  );
};

const { string, array } = React.PropTypes;

Flex.propTypes = {
  children: array,
  width: string,
  height: string,
  flexDirection: string,
  flexWrap: string,
  justifyContent: string,
  alignItems: string,
  margin: string,
  padding: string,
  background: string,
};

Flex.defaultProps = {
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0',
  margin: '5',
  background: '#eee',
};

export default Flex;
