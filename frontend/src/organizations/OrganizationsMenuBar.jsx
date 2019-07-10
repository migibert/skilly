import React, { useState, useEffect } from 'react';
import { useGlobal } from 'reactn';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) =>
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

const fakeOrganizations = [
  {
    name: "Teemo",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5racTQ0g8iJiXJG7ZozBqbVjh8YwdUenRSDQgpZV4uMS3TKlX"
  },
  {
    name: "Numergy",
    logo: "https://pbs.twimg.com/profile_images/2577211498/doivvokdyalimii9zmc0_400x400.jpeg"
  }
];

export default function OrganizationsMenuBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [organizations, setOrganizations] = useGlobal('organizations');
  const [organization, setOrganization] = useGlobal('organization');

  useEffect(() => {
    setOrganizations(fakeOrganizations);
  }, [setOrganizations]);

  function handleDialogOpen() {
    setOpen(true);
  }

  const handleDialogClose = value => {
    setOpen(false);
    setOrganization(value);
  };

  return (
    <div className="root">
      <Button onClick={handleDialogOpen} className={classes.appBarLink}>
        <Avatar src={organization.logo || 'organization.png'} className={classes.avatar} />
      </Button>
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle id="Organization Choice">Select or create an organization</DialogTitle>
        <List>
          {organizations.map(organization => (
            <ListItem button onClick={() => handleDialogClose(organization)} key={organization.name}>
              <ListItemAvatar>
                <Avatar className={classes.avatar} src={organization.logo} />
              </ListItemAvatar>
              <ListItemText primary={organization.name} />
            </ListItem>
          ))}
          <Divider light />
          <ListItem button onClick={() => handleDialogClose('newOrganization')}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="New organization" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
