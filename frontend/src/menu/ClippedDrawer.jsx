
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


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
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
    toolbar: theme.mixins.toolbar,
  }),
);

export default function ClippedDrawer() {
  const classes = useStyles();
  const [selected, setSelected] = useState('');

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Skilly
          </Typography>
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
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}