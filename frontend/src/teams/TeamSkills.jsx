import React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';

const data = [{
  skill: "Communication",
  1: 2,
  2: 5,
  3: 3,
  max: 5
}, {
  skill: "Leadership",
  1: 2,
  2: 4,
  3: 1,
  max: 5
}, {
  skill: "Software Engineering",
  1: 5,
  2: 2,
  3: 3,
  max: 5
}, {
  skill: "Data Engineering",
  1: 3,
  2: 1,
  3: 5,
  max: 5
}, {
  skill: "Infrastructure",
  1: 5,
  2: 1,
  3: 2,
  max: 5
}];

const TeamSkills = props => <div>
  <RadarChart width={1000} height={500} data={data}>
    <PolarGrid/>
    <PolarAngleAxis dataKey="skill"/>
    <PolarRadiusAxis angle={90} domain={[0, 5]}/>
    <Radar dataKey={props.match.params.id} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
  </RadarChart>
</div>;

export default TeamSkills;