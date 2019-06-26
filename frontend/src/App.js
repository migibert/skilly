
import OrganizationsMenu from './organizations/OrganizationsMenu';
import TeamsMenu from './teams/TeamsMenu';
import TalentsMenu from './talents/TalentsMenu';
import SkillsMenu from './skills/SkillsMenu';
import FormationsMenu from './formations/FormationsMenu';
import ReviewsMenu from './reviews/ReviewsMenu';

import './App.css';
import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GroupWork from '@material-ui/icons/GroupWork';
import Face from '@material-ui/icons/Face';
import BarChart from '@material-ui/icons/BarChart';
import Group from '@material-ui/icons/Group';
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDown';
import Timeline from '@material-ui/icons/Timeline';
import PermIdentity from '@material-ui/icons/PermIdentity';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import IconButton from '@material-ui/core/IconButton';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    hidden: {
      display: 'none',
    },
    active: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
  }),
);

function App() {
    const classes = useStyles();
    const [selected, setSelected] = useState('');
    return (
      <div className="App">
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                Skilly
              </Typography>
              <div>
                  <IconButton className={classes.menuButton}>
                    <PermIdentity />
                  </IconButton>
                  <IconButton>
                    <PowerSettingsNew />
                  </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper, }}>
            <div className={classes.toolbar} />
            <List>
                <ListItem button key="Organizations" onClick={() => setSelected('Organizations')} selected={selected === 'Organizations'}>
                    <ListItemIcon><GroupWork /></ListItemIcon>
                    <ListItemText primary='Organization' />
                </ListItem>
                <ListItem button key="Teams" onClick={() => setSelected('Teams')} selected={selected === 'Teams'}>
                    <ListItemIcon><Group /></ListItemIcon>
                    <ListItemText primary='Teams' />
                </ListItem>
                <ListItem button key="Talents" onClick={() => setSelected('Talents')} selected={selected === 'Talents'}>
                    <ListItemIcon><Face /></ListItemIcon>
                    <ListItemText primary='Talents' />
                </ListItem>
                <ListItem button key="Skills" onClick={() => setSelected('Skills')} selected={selected === 'Skills'}>
                    <ListItemIcon><BarChart /></ListItemIcon>
                    <ListItemText primary='Skills' />
                </ListItem>
                <ListItem button key="Formations" onClick={() => setSelected('Formations')} selected={selected === 'Formations'}>
                    <ListItemIcon><Timeline /></ListItemIcon>
                    <ListItemText primary='Formations' />
                </ListItem>
                <ListItem button key="Reviews" onClick={() => setSelected('Reviews')} selected={selected === 'Reviews'}>
                    <ListItemIcon><ThumbsUpDown /></ListItemIcon>
                    <ListItemText primary='Reviews' />
                </ListItem>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <div className={selected === 'Organizations' ? classes.active : classes.hidden}>
                <OrganizationsMenu  />
            </div>
            <div className={selected === 'Teams' ? classes.active : classes.hidden}>
                <TeamsMenu />
            </div>
            <div className={selected === 'Talents' ? classes.active : classes.hidden}>
                <TalentsMenu />
            </div>
            <div className={selected === 'Skills' ? classes.active : classes.hidden}>
                <SkillsMenu />
            </div>
            <div className={selected === 'Formations' ? classes.active : classes.hidden}>
                <FormationsMenu />
            </div>
            <div className={selected === 'Reviews' ? classes.active : classes.hidden}>
                <ReviewsMenu />
            </div>
          </main>
        </div>
      </div>
    );
}

export default App;
