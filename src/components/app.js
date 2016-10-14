import React from 'react';
import Header from './header';
import Landing from './landing';
import Experience from './experience';
import Education from './education';
import Projects from './projects';
import Skills from './skills';

const App = () => {
  return (
    <div className="b-app pure-g">
      <Header />
      <Landing />
      <Experience />
      <Education />
      <Projects />
      <Skills />
    </div>
  );
};

export default App;
