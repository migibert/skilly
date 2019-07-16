import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MemberItem from './MemberItem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '100%',
    textAligh: 'center',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  content: {
    paddingTop: 10,
  }
}));

const members = [
  {
    id: 1,
    firstname: "Adrian",
    lastname: "Mason",
    picture: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1",
    teams: ["Data Analysts"],
    arrival: new Date('2016-10-10'),
    manager: {
      id: 3,
      firstname: "Stephen",
      lastname: "Ollie",
      picture: "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png",
    }
  },
  {
    id: 2,
    firstname: "Emmy",
    lastname: "Lee",
    picture: "https://cdn2.iconfinder.com/data/icons/scenarium-vol-4/128/019_avatar_woman_girl_female_account_profile_user-128.png",
    teams: ["Product"],
    arrival: new Date('2017-06-03'),
    manager: {
      id: 3,
      firstname: "Stephen",
      lastname: "Ollie",
      picture: "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png",
    }
  },
  {
    id: 3,
    firstname: "Stephen",
    lastname: "Ollie",
    picture: "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png",
    teams: [ "R & D" ],
    manager: {},
  }
];


export default function TalentsMenu() {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [filteredMembers, setFilteredMembers] = useState([]);

    useEffect(() => {
      setFilteredMembers(members.filter(member => member.firstname.toLowerCase().startsWith(search) || member.lastname.toLowerCase().startsWith(search)));
    }, [search]);

    function handleSearch(e) {
      setSearch(e.target.value);
    }

    return (
      <div className={classes.root}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
              placeholder="Search…"
              classes={{ root: classes.inputRoot, input: classes.inputInput, }}
              inputProps={{ 'aria-label': 'Search', }}
              onChange={handleSearch} />
        </div>
        <div className={classes.content}>
          <Grid container spacing={3} direction="row">
            {filteredMembers.map(member => (
              <Grid item key={`${member.id}`}>
                <MemberItem member={member} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
}
