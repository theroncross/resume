import React from 'react';
import FixedHeader from './FixedHeader';
import '../App.css';
import Flex from './Flex';
import { colors } from './styles';

const App = (props) => {
  const appStyle = {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: colors.light,
  };

  return (
    <Flex style={appStyle} >
      <FixedHeader />
      {props.children}
    </Flex>
  );
};

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
