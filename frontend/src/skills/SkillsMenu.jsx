import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useGlobal } from 'reactn';
import Grid from '@material-ui/core/Grid';
import SkillItem from './SkillItem';

export default function SkillsMenu() {
  const [skills, setSkills] = useState([]);
  const [organization] = useGlobal('organization');


  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/organizations/${organization.id}/skills`);
        setSkills(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSkills();
  }, [organization]);

  return (
    <Grid container spacing={3} direction="row">
      {skills.map(skill => (
        <Grid item key={skill.name}>
          <SkillItem skill={skill} />
        </Grid>
      ))}
    </Grid>
  );
}
