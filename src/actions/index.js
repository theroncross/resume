import data from 'json!../../data';

const FETCH_SKILLS = 'fetch_skills';


export default function fetchSkills() {
  return {
    type: FETCH_SKILLS,
    payload: data.skills,
  };
}
