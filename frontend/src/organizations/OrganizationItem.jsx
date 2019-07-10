import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Timeline from '@material-ui/icons/Timeline';
import Face from '@material-ui/icons/Face';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme =>
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
const OrganizationItem = (props) => {
    const classes = useStyles();

    return (
      <Card className={classes.card}>
        <CardHeader title={props.organization.name} />
        <CardMedia className={classes.media} image={props.organization.logo} title={props.organization.name} />
        <CardActions>
          <IconButton aria-label="Invite member">
            <PersonAdd />
          </IconButton>
          <IconButton aria-label="Members">
            <Face />
          </IconButton>
          <IconButton aria-label="Charts">
            <Timeline />
          </IconButton>
          <IconButton aria-label="Edit" onClick={() => { props.history.push(`/organizations/${props.organization.name}`)}}>
            <Edit />
          </IconButton>
          <IconButton aria-label="Delete">
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
    );
}

export default withRouter(OrganizationItem);