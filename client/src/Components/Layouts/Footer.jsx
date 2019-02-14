import React from 'react';
import { Paper, Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';

export default ({categories, focus, onSelect}) => {
  const index = focus
    ? categories.findIndex(group => group === focus) + 1
    : 0;

  const onIndexSelect = (e, index) => 
    onSelect(index === 0 ? '' : categories[index -1 ]);

  return <Paper>
    <Tabs
      value={index}
      onChange = {onIndexSelect}
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
