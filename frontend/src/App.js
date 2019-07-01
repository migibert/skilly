import OrganizationsMenu from './organizations/OrganizationsMenu';
import TeamsMenu from './teams/TeamsMenu';
import TalentsMenu from './talents/TalentsMenu';
import SkillsMenu from './skills/SkillsMenu';
import FormationsMenu from './formations/FormationsMenu';
import ReviewsMenu from './reviews/ReviewsMenu';
import ProfileMenu from './profile/ProfileMenu';
import OrganizationsMenuBar from './organizations/OrganizationsMenuBar';

import './App.css';
import React, { useState } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Face from '@material-ui/icons/Face';
import BarChart from '@material-ui/icons/BarChart';
import Group from '@material-ui/icons/Group';
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDown';
import School from '@material-ui/icons/School';
import GroupWork from '@material-ui/icons/GroupWork';
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
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
      display: 'flex',
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
      marginTop: '10px'
    },
    drawerLink: {
      textDecoration: 'none',
      color: 'black',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar,
    footer: {
      position: 'fixed',
      bottom: 0,
      textAlign: 'center',
    },
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
                  <div className={classes.appBarRightMenu} onClick={() => setSelected('')}>
                    <OrganizationsMenuBar />
                    <Link to="/profile" className={classes.appBarLink}>
                      <Avatar src="user.png" className={classes.avatar} />
                    </Link>
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
                    <ListItemIcon><School /></ListItemIcon>
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
                <Route path="/organizations" component={OrganizationsMenu} />
                <Route path="/teams" component={TeamsMenu} />
                <Route path="/talents" component={TalentsMenu} />
                <Route path="/skills" component={SkillsMenu} />
                <Route path="/formations" component={FormationsMenu} />
                <Route path="/reviews" component={ReviewsMenu} />
                <Route path="/profile" component={ProfileMenu} />
                <Typography align="center" display="block" variant="caption" className={classes.footer}>
                  Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a>
                </Typography>
              </main>
            </div>
        </Router>
      </div>
    );
}

export default App;
