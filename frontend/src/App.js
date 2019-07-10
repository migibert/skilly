import UserDetails from './user/UserDetails';
import OrganizationsMenu from './organizations/OrganizationsMenu';
import OrganizationDetails from './organizations/OrganizationDetails';
import TeamsMenu from './teams/TeamsMenu';
import MembersMenu from './members/MembersMenu';
import SkillsMenu from './skills/SkillsMenu';
import FormationsMenu from './formations/FormationsMenu';
import ReviewsMenu from './reviews/ReviewsMenu';
import OrganizationsMenuBar from './organizations/OrganizationsMenuBar';
import ProfileMenuBar from './user/UserMenuBar';

import './App.css';
import React, { useState } from 'react';
import { setGlobal } from 'reactn';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
import TeamSkills from "./teams/TeamSkills";

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

setGlobal({
  user: {},
  organizations: [],
  organization: {
     name: "Numergy",
     logo: "https://pbs.twimg.com/profile_images/2577211498/doivvokdyalimii9zmc0_400x400.jpeg"
  }
});

function App() {
    const classes = useStyles();
    const [selected, setSelected] = useState('');

    const sideMenuItems = [
      {route: '/organizations', id: 'Organizations', icon: <GroupWork />},
      {route: '/teams', id: 'Teams', icon: <Group />},
      {route: '/members', id: 'Members', icon: <Face />},
      {route: '/skills', id: 'Skills', icon: <BarChart />},
      {route: '/reviews', id: 'Reviews', icon: <ThumbsUpDown />},
      {route: '/formations', id: 'Formations', icon: <School />},
    ];

    const routes = [
      {path: '/me', component: UserDetails},
      {path: '/organizations', component: OrganizationsMenu},
      {path: '/organizations/:id', component: OrganizationDetails},
      {path: '/teams', component: TeamsMenu},
      {path: '/members', component: MembersMenu},
      {path: '/skills', component: SkillsMenu},
      {path: '/reviews', component: ReviewsMenu},
      {path: '/formations', component: FormationsMenu},
      {path: '/teams/:id/skills', component: TeamSkills},
    ];

    return (
      <div className="App">
        <Router>
            <div className={classes.root}>
              <CssBaseline />
              <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                  <Link to="/teams" className={classes.appBarLink}>
                    <Avatar src="logo.png" className={classes.avatar} />
                  </Link>
                  <Link to="/teams" className={classes.appBarLink}>
                    <Typography variant="h6" noWrap>
                      Skilly
                    </Typography>
                  </Link>
                  <div className={classes.appBarRightMenu}>
                    <OrganizationsMenuBar />
                    <ProfileMenuBar />
                  </div>
                </Toolbar>
              </AppBar>
              <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper, }}>
                <div className={classes.toolbar} />
                {sideMenuItems.map(item =>
                  <Link key={item.id} to={item.route} className={classes.drawerLink}>
                    <ListItem button key={item.id} onClick={() => setSelected(item.id)} selected={selected === item.id}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.id} />
                    </ListItem>
                   </Link>
                )}
              </Drawer>
              <main className={classes.content}>
                <div className={classes.toolbar} />
                  {routes.map(route => {
                    return <Route exact key={route.path} path={route.path} component={route.component} />
                  })}
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
