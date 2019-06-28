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
import Delete from '@material-ui/icons/Delete';
import PersonAdd from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 300,
    },
    media: {
      width: 300,
      height: 300,
    },
    title: {
      fontSize: 14,
    },
    left: {
    },
    right: {
    }
  })
);

// Expected props: team { name, logo, size }
export default function TeamItem(props) {
    const classes = useStyles();

    return (
      <Card className={classes.card}>
        <CardHeader title={props.team.name} />
        <CardMedia className={classes.media} image={props.team.logo} title={props.team.name} />
        <CardContent>
          <Typography color="textSecondary">
            {props.team.size} members
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="Members">
            <PersonAdd />
          </IconButton>
          <IconButton aria-label="Charts">
            <BarChart />
          </IconButton>
          <IconButton aria-label="Delete">
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
    );
}
