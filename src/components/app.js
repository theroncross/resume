import React from 'react';
import Header from './header';

const App = (props) => {
  return (
    <div className="b-app pure-g">
      <Header />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
