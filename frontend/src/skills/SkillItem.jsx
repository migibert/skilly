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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 500,
    },
    media: {      
      marginTop: 30,
    },
    title: {
      fontSize: 14,
    }
  })
);

// Expected props: skill { name, type }
export default function SkillItem(props) {
    const classes = useStyles();    
    return (
      <Card className={classes.card}>
        <CardHeader title={props.skill.name} />
        <CardMedia className={classes.media} title={props.skill.name} />
        <CardContent>
          <Typography color="textSecondary">
            {props.skill.name}
          </Typography>          
        </CardContent>
        <CardActions>
          <IconButton aria-label="Add skill">
            <GroupAdd />
          </IconButton>
          <IconButton aria-label="Skills">
            <BarChart />
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
