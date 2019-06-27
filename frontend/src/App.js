import OrganizationsMenu from './organizations/OrganizationsMenu';
import TeamsMenu from './teams/TeamsMenu';
import TalentsMenu from './talents/TalentsMenu';
import SkillsMenu from './skills/SkillsMenu';
import FormationsMenu from './formations/FormationsMenu';
import ReviewsMenu from './reviews/ReviewsMenu';

import './App.css';
import React, { useState } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
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
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    appBarLink: {
      textDecoration: 'none',
      color: 'white',
    },
    appBarRightMenu: {
      marginLeft: 'auto',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    avatar: {
      margin: 10,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerLink: {
      textDecoration: 'none',
      color: 'black',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  })
);

function App() {
    const classes = useStyles();
    const [selected, setSelected] = useState('');
    return (
      <div className="App">
        <Router>
            <div className={classes.root}>
              <CssBaseline />
              <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                  <Link to="/" className={classes.appBarLink}>
                    <Avatar src="logo.png" className={classes.avatar} />
                  </Link>
                  <Link to="/" className={classes.appBarLink}>
                      <Typography variant="h6" noWrap>
                        Skilly
                      </Typography>
                   </Link>
                  <div className={classes.appBarRightMenu}>
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
                <Link to="/organizations" className={classes.drawerLink}>
                    <ListItem button key="Organizations" onClick={() => setSelected('Organizations')} selected={selected === 'Organizations'}>
                        <ListItemIcon><GroupWork /></ListItemIcon>
                        <ListItemText primary='Organizations' />
                    </ListItem>
                </Link>
                <Link to="/teams" className={classes.drawerLink}>
                    <ListItem button key="Teams" onClick={() => setSelected('Teams')} selected={selected === 'Teams'}>
                        <ListItemIcon><Group /></ListItemIcon>
                        <ListItemText primary='Teams' />
                    </ListItem>
                </Link>
                <Link to="/talents" className={classes.drawerLink}>
                    <ListItem button key="Talents" onClick={() => setSelected('Talents')} selected={selected === 'Talents'}>
                        <ListItemIcon><Face /></ListItemIcon>
                        <ListItemText primary='Talents' />
                    </ListItem>
                </Link>
                <Link to="/skills" className={classes.drawerLink}>
                    <ListItem button key="Skills" onClick={() => setSelected('Skills')} selected={selected === 'Skills'}>
                        <ListItemIcon><BarChart /></ListItemIcon>
                        <ListItemText primary='Skills' />
                    </ListItem>
                </Link>
                <Link to="/formations" className={classes.drawerLink}>
                    <ListItem button key="Formations" onClick={() => setSelected('Formations')} selected={selected === 'Formations'}>
                        <ListItemIcon><Timeline /></ListItemIcon>
                        <ListItemText primary='Formations' />
                    </ListItem>
                </Link>
                <Link to="/reviews" className={classes.drawerLink}>
                    <ListItem button key="Reviews" onClick={() => setSelected('Reviews')} selected={selected === 'Reviews'}>
                        <ListItemIcon><ThumbsUpDown /></ListItemIcon>
                        <ListItemText primary='Reviews' />
                    </ListItem>
                </Link>
              </Drawer>
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <Route exact path="/" component={this} />
                <Route path="/organizations" component={OrganizationsMenu}  />
                <Route path="/teams" component={TeamsMenu} />
                <Route path="/talents" component={TalentsMenu} />
                <Route path="/skills" component={SkillsMenu} />
                <Route path="/formations" component={FormationsMenu} />
                <Route path="/reviews" component={ReviewsMenu} />
              </main>
            </div>
        </Router>
      </div>
    );
}

export default App;
