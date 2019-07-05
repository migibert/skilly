import React, { useState, useEffect } from 'react';
import { useGlobal } from 'reactn';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
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
  })
);

const fakeUser = {
  username: "John Doe",
  picture: "https://at-cdn-s01.audiotool.com/2014/09/07/documents/SwaOa0gF51Ai06D6LDLyJHubdbWXNu/0/cover256x256-9cbba6b2878944c6b29e14bdead8ac32.jpg"
};

export default function ProfileMenuBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useGlobal('user');

  useEffect(() => {
    const fetchUserProfile = () => { return { data: fakeUser }};
    const response = fetchUserProfile();
    setUser(response.data);
  }, []);

  function handleDialogOpen() {
    setOpen(true);
  }

  const handleDialogClose = value => {
    setOpen(false);
    setUser(value);
  };

  return (
    <div className="root">
      <Button onClick={handleDialogOpen} className={classes.appBarLink}>
        <Avatar src={user.picture || 'http://www.iconarchive.com/download/i103458/paomedia/small-n-flat/profile.ico'} className={classes.avatar} />
      </Button>
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle id="My Profile">Edit Profile</DialogTitle>
        <List>
          <ListItem button onClick={() => handleDialogClose(user)} key={user.username}>
            <ListItemAvatar>
              <Avatar className={classes.avatar} src={user.picture} />
            </ListItemAvatar>
            <ListItemText primary={user.username} />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};
