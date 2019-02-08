import React from 'react';
import { Paper, Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';

export default ({categories}) => 
  <Paper>
    <Tabs
      value={0}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="All" />
      {categories.map(category =>
        <Tab key={category} label={category} />
      )}
    </Tabs>
  </Paper>
