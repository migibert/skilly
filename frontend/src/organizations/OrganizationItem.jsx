import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BarChart from '@material-ui/icons/BarChart';
import PersonAdd from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 250,
    },
    media: {
      width: 250,
      height: 250,
    },
    title: {
      fontSize: 14,
    },
  })
);

// Expected props: organization { name, logo }
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
            <BarChart />
          </IconButton>
        </CardActions>
      </Card>
    );
}
