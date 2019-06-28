import React from 'react';
import Grid from '@material-ui/core/Grid';
import TeamItem from './TeamItem';


export default function TeamsMenu() {

    const teams = [
      {
        name: "R & D",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29iGthzt4jUeudY9f0aj4l3vyhDbx1s3nFJICD9jJVYn8NU5Q-w",
        size: 8
      },
      {
        name: "Product",
        logo: "https://www.incimages.com/uploaded_files/image/1940x900/products_364475.jpg",
        size: 1
      },
      {
        name: "Data Analysts",
        logo: "https://jobbatical.com/wp-content/uploads/2018/10/data-analyst-job-description.jpg",
        size: 3
      }
    ];

    return (
      <div className="root">
        <Grid container spacing={3} direction="row">
          {teams.map(team=> (
            <Grid item key={team.name}>
              <TeamItem team={team} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
}
