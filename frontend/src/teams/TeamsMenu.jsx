import React from 'react';
import Grid from '@material-ui/core/Grid';
import TeamItem from './TeamItem';

const teams = [
  {
    name: "R & D",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoF4IXJ7kYuJ9FIClxbCmzPCQi3KkIaZRPHSPDGjuQKR-Ni_8V",
    size: 8,
  },
  {
    name: "Product",
    logo: "https://i.udemycdn.com/course/750x422/1352222_6bfa_2.jpg",
    size: 1,
  },
  {
    name: "Data Analysts",
    logo: "https://jobbatical.com/wp-content/uploads/2018/10/data-analyst-job-description.jpg",
    size: 3,
  }
];

export default function TeamsMenu() {
    return (
        <Grid container spacing={3} direction="row">
          {teams.map(team=> (
            <Grid item key={team.name}>
              <TeamItem team={team} />
            </Grid>
          ))}
        </Grid>
    );
}
