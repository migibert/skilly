import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useGlobal } from 'reactn';
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
  const [organization, setOrganization] = useGlobal('organization');

  async function getSkills() {
    try {
      const response = await axios.get(`http://localhost:8080/organizations/${organization.id}/skills`);
      setSkills(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getSkills();
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
