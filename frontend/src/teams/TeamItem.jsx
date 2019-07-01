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
import Edit from '@material-ui/icons/Edit';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Face from '@material-ui/icons/Face';
import School from '@material-ui/icons/School';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 350,
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
          <IconButton aria-label="Add Member">
            <PersonAdd />
          </IconButton>
          <IconButton aria-label="Members">
            <Face />
          </IconButton>
          <IconButton aria-label="Skills">
            <BarChart />
          </IconButton>
          <IconButton aria-label="Formations">
            <School />
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
