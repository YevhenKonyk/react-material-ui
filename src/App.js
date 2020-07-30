import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    textTransform: 'uppercase',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h1" color="primary" className={classes.title}>
        Hello from App component
      </Typography>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </div>
  );
};

export default App;
