import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  buttonTextColor: {
    color: 'red',
    //   the styles will apply whenthe screen will bigger than 600px
    [theme.breakpoints.up('sm')]: {
      color: 'blue',
    },
  },
  buttonBackgorundColor: {
    backgroundColor: 'orange',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'tan',
    },
  },
}));

const ThemedButton = props => {
  const classes = useStyles();

  return (
    <Button
      className={classNames(
        classes.buttonTextColor,
        classes.buttonBackgorundColor,
      )}
      {...props}
    >
      Themed Button
    </Button>
  );
};

export default ThemedButton;
