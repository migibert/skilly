import OrganizationsMenu from './organizations/OrganizationsMenu';
import TeamsMenu from './teams/TeamsMenu';
import TalentsMenu from './talents/TalentsMenu';
import SkillsMenu from './skills/SkillsMenu';
import FormationsMenu from './formations/FormationsMenu';
import ReviewsMenu from './reviews/ReviewsMenu';
import OrganizationsMenuBar from './organizations/OrganizationsMenuBar';
import ProfileMenuBar from './profile/ProfileMenuBar';

import './App.css';
import React, { useState } from 'react';
import { useGlobal, setGlobal } from 'reactn';
import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom';
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

setGlobal({
  user: {
    username: "John Doe",
    picture: "https://at-cdn-s01.audiotool.com/2014/09/07/documents/SwaOa0gF51Ai06D6LDLyJHubdbWXNu/0/cover256x256-9cbba6b2878944c6b29e14bdead8ac32.jpg"
  },
  organizations: [
    {
      name: "Teemo",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5racTQ0g8iJiXJG7ZozBqbVjh8YwdUenRSDQgpZV4uMS3TKlX"
    },
    {
      name: "Numergy",
      logo: "https://pbs.twimg.com/profile_images/2577211498/doivvokdyalimii9zmc0_400x400.jpeg"
    }
  ],
  organization: {
     name: "Numergy",
     logo: "https://pbs.twimg.com/profile_images/2577211498/doivvokdyalimii9zmc0_400x400.jpeg"
  }
});

function App() {
    const classes = useStyles();
    const [selected, setSelected] = useState('');
    const [user, setUser] = useGlobal('user');
    const [organization, setOrganization] = useGlobal('organization');

    const sideMenuItems = [
      {route: '/organizations', id: 'Organizations', icon: <GroupWork />},
      {route: '/teams', id: 'Teams', icon: <Group />},
      {route: '/talents', id: 'Talents', icon: <Face />},
      {route: '/skills', id: 'Skills', icon: <BarChart />},
      {route: '/formations', id: 'Formations', icon: <School />},
      {route: '/reviews', id: 'Reviews', icon: <ThumbsUpDown />},
    ]

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
                  <Link to={item.route} className={classes.drawerLink}>
                    <ListItem button key={item.id} onClick={() => setSelected(item.id)} selected={selected === item.id}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.id} />
                    </ListItem>
                   </Link>
                )}
              </Drawer>
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <Route exact path="/">
                  <Redirect to="/teams" push />
                </Route>
                <Route path="/organizations" component={OrganizationsMenu} />
                <Route path="/teams" component={TeamsMenu} />
                <Route path="/talents" component={TalentsMenu} />
                <Route path="/skills" component={SkillsMenu} />
                <Route path="/formations" component={FormationsMenu} />
                <Route path="/reviews" component={ReviewsMenu} />
                <Route path="/profiles/:username" component={this} />
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
