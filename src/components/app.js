import React from 'react';
import { Element } from 'react-scroll';
import Header from './header';
import Landing from './landing';
import Experience from './experience';
import Education from './education';
import Projects from './projects';
import Skills from './skills';

const App = () => {
  return (
    <div className="b-app pure-g">
      <Element name="header"><Header /></Element>
      <Element name="landing"><Landing /></Element>
      <Element name="experience"><Experience /></Element>
      <Element name="education"><Education /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="skills"><Skills /></Element>
    </div>
  );
};

export default App;
