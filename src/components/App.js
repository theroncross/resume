import React from 'react';
import Header from './header';
import Sidebar from './Sidebar';
import '../App.css';
import Flex from './Flex';

const App = (props) => {
  const appStyle = {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  };

  return (
    <Flex style={appStyle} >
      <Header />
      <Sidebar />
      {props.children}
    </Flex>
  );
};

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
