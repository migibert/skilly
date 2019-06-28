import React from 'react';
import Grid from '@material-ui/core/Grid';
import OrganizationItem from './OrganizationItem';


export default function OrganizationsItem() {

    const newOrganization = {
      name: "New Organization",
      logo: "organization.png"
    };

    const organizations = [
      {
        name: "Teemo",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5racTQ0g8iJiXJG7ZozBqbVjh8YwdUenRSDQgpZV4uMS3TKlX"
      },
      {
        name: "Numergy",
        logo: "https://pbs.twimg.com/profile_images/2577211498/doivvokdyalimii9zmc0_400x400.jpeg"
      }
    ];

    return (
      <div className="root">
        <Grid container spacing={3} direction="row">
          {organizations.map(organization => (
            <Grid item key={organization.name}>
              <OrganizationItem organization={organization} />
            </Grid>
          ))}
          <Grid item key="new">
            <OrganizationItem organization={newOrganization} />
          </Grid>
        </Grid>
      </div>
    );
}
