import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AddExercise from '../Exercises/Dialogs/Create';

export default props =>
  <AppBar position='static'>
    <Toolbar>
      <Typography variant='headline' color='inherit' style={{flex: 1}}>
        Climbing Fitness (Warm Ups Only)
      </Typography>
      <AddExercise />
    </Toolbar>
  </AppBar>