import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import SkillItem from './SkillItem';

const fakeSkills = [
  {
    name: "Communication", 
    type: "Soft"
  },
  {
    name: "Architecture",
    type: "Hard"
  },
  {
    name: "Software Engineering",
    type: "Hard"
  },
  {
    name: "Leadership",
    type: "Soft"
  }
]

export default function SkillsMenu() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(fakeSkills);
  }, []);

  return (
    <Grid container spacing={3} direction="row">
        {console.log(skills)}
      {skills.map(skill => (
        <Grid item key={skill.name}>
          <SkillItem skill={skill} />
        </Grid>
      ))}
    </Grid>
  );
}
