import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import CustomButton from './components/CustomButton';
import ThemedButton from './components/ThemedButton';

const useStyles = makeStyles({
  title: {},
  button: {
    color: 'red',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" className={classes.title}>
        Hello from App component
      </Typography>
      <Button className={classes.button}>Small button</Button>
      <CustomButton main />
      <ThemedButton />
    </div>
  );
};

export default App;
