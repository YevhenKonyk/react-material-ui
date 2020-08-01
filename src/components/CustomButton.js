import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles({
//   button: {
//     color: props => (props.main ? 'blue' : 'red'),
//   },
// });

const useStyles = makeStyles({
  button: props => {
    return {
      color: props.main ? 'white' : 'yellow',
      backgroundColor: props.main ? 'purple' : 'green',
    };
  },
});

const CustomButton = props => {
  const classes = useStyles(props);

  return (
    <div>
      <Button className={classes.button}>Custom button</Button>
    </div>
  );
};

export default CustomButton;
