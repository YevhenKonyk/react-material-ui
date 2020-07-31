import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title}>Products list page</Typography>
        <PersonIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
