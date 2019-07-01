import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import BarChart from '@material-ui/icons/BarChart';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Timeline from '@material-ui/icons/Timeline';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 400,
    },
    media: {
      paddingTop: '100%',
      marginTop: 30,
    },
    title: {
      fontSize: 14,
    }
  })
);

// Expected props: organization { name, logo, website }
export default function OrganizationItem(props) {
    const classes = useStyles();

    return (
      <Card className={classes.card}>
        <CardHeader title={props.organization.name} />
        <CardMedia className={classes.media} image={props.organization.logo} title={props.organization.name} />
        <CardActions>
          <IconButton aria-label="Invite member">
            <PersonAdd />
          </IconButton>
          <IconButton aria-label="Invite member">
            <Timeline />
          </IconButton>
          <IconButton aria-label="Edit">
            <Edit />
          </IconButton>
          <IconButton aria-label="Delete">
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
    );
}
