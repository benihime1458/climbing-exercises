import React from 'react';
import { Paper, Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';

export default ({categories, onSelect, focus}) => {
  const index = focus
    ? categories.findIndex(group => group === focus) + 1
    : 0

  return <Paper>
    <Tabs
      value={index}
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

} 
