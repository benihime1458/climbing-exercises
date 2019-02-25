import React, {Fragment} from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText  } from '@material-ui/core';

const styles = {
  Paper: { 
    padding: 20, 
    marginTop: 10, 
    marginBottom: 10, 
    height: 800, 
    overflowY: 'auto'
  },
};

export default ({
  warmupsByGroup,
  focus, 
  onSelect, 
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise on the left.'
  }
  }) =>
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {warmupsByGroup.map(([group, exercises]) =>
        !focus || focus === group
            ? <Fragment
              key={group}
            >
                <Typography
                  variant='h5'
                  style={{ textTransform: 'capitalize' }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) =>
                    <ListItem 
                      key={title} 
                      button
                      onClick={() => onSelect(id)} 
                    >
                      <ListItemText 
                        primary={title}
                      />
                    </ListItem>
                  )}
                </List>
              </Fragment>
          : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography
          variant='display1'
        >
          {title}
        </Typography>
        <Typography
          variant='subheading'
          style={{marginTop: 20}}
        >
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>