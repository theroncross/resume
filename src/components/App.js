import React, { Component } from 'react';
import Header from './header';
import Sidebar from './Sidebar';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="header" />
        <Sidebar className="sidebar" />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
