const skills = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_SKILL_BAR':
      return state.skills.map(skill => {
        if (skill.name === action.payload) {
          return Object.assign(skill, { visible: true });
        }
        return skill;
      });
    default:
      return state;
  }
};

export default skills;
