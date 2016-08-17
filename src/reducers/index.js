import { combineReducers } from 'redux';
import skills from './skills_reducer';

const resume = combineReducers({
  skills,
});

export default resume;
