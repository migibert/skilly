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
import GroupAdd from '@material-ui/icons/GroupAdd';
import Timeline from '@material-ui/icons/Timeline';
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDown';
import School from '@material-ui/icons/School';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 500,
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

// Expected props: talent { firstname, lastname, picture, arrival }
export default function TalentItem(props) {
    const classes = useStyles();

    return (
      <Card className={classes.card}>
        <CardHeader title={`${props.talent.firstname} ${props.talent.lastname}`} />
        <CardMedia className={classes.media} image={props.talent.picture} title={`${props.talent.firstname} ${props.talent.lastname}`} />
        <CardContent>
          <Typography color="textSecondary">
            Member of {props.talent.teams.length} teams
          </Typography>
          <Typography color="textSecondary">
            {props.talent.arrival !== undefined ? `In the organization from ${props.talent.arrival.toISOString().slice(0,10)}` : 'Unknown entry date' }
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="Add Team">
            <GroupAdd />
          </IconButton>
          <IconButton aria-label="Skills">
            <BarChart />
          </IconButton>
          <IconButton aria-label="Formations">
            <School />
          </IconButton>
          <IconButton aria-label="Reviews">
            <ThumbsUpDown />
          </IconButton>
          <IconButton aria-label="Charts">
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
