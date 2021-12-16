import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  counter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const classes = useStyles();

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      size="medium"
      aria-label="small outlined button group">
      <Button disabled={counter === 0} onClick={handleDecrement}>
        -
      </Button>
      <Box className={classes.counter}>{counter}</Box>
      <Button onClick={handleIncrement}>+</Button>
    </ButtonGroup>
  );
}
