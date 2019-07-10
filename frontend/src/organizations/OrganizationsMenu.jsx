import React from 'react';
import { useGlobal } from 'reactn';
import Grid from '@material-ui/core/Grid';
import OrganizationItem from './OrganizationItem';

export default function OrganizationsMenu() {
  const [organizations] = useGlobal('organizations');

  return (
    <Grid container spacing={3} direction="row">
      {organizations.map(organization => (
        <Grid item key={organization.name}>
          <OrganizationItem organization={organization} />
          </Grid>
      ))}
    </Grid>
  );
}
