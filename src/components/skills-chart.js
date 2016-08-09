import * as d3 from 'd3';

const SkillsChart = {};

SkillsChart.create = function create(el, props) {
  console.log(props);

  const svg = d3.select(el).append('svg')
    .attr('class', 'skills-chart');


};

export default SkillsChart;




// class SkillsChart extends Component {
//   constructor(props) {
//     super(props);

//     this.renderBars = this.renderBars.bind(this);
//     this.scale = this.scale.bind(this);
//     this.translate = this.translate.bind(this);
//   }

//   translate(i) {
//     return `translate(0, ${i * this.props.barHeight})`;
//   }

//   scale(val) {
//     return `${d3.scaleLinear()
//     .domain([0, 5])
//     .range([0, this.props.width])(val)}%`;
//   }

//   renderBars() {
//     return this.props.skillsData.map((skill, i) => {
//       return (
//         <Bar
//           transform={this.translate(i)}
//           key={skill.name}
//           barWidth={this.scale(skill.rating)}
//           barHeight={this.props.barHeight}
//           x={this.scale(skill.rating - 0.2)}
//           text={skill.name}
//         />
//       );
//     });
//   }

//   render() {
//     return (
//       <svg
//         className="SkillsChart"
//         width={this.scale(5)}
//         height={this.props.barHeight * this.props.skillsData.length}
//       >
//         {this.renderBars()}
//       </svg>
//     );
//   }
// }

// SkillsChart.propTypes = {
//   skillsData: React.PropTypes.array,
//   width: React.PropTypes.string.isRequired,
//   barHeight: React.PropTypes.string.isRequired,
// };

// SkillsChart.defaultProps = {
//   skillsData: data.skills.map((skill) => {
//     return {
//       name: skill.name,
//       rating: skill.rating,
//     };
//   }).sort((a, b) => {
//     return a.rating < b.rating ? 1 : -1;
//   }),
//   width: '90',
//   barHeight: '20',
// };

// export default SkillsChart;
