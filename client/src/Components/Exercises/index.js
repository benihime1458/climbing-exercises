import React, {Fragment} from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText  } from '@material-ui/core';

const styles = {
  Paper: { 
    padding: 20, 
    marginTop: 10, 
    marginBottom: 10, 
    height: 800, 
    overflowY: 'auto'
  }
};

export default ({
  cardio, stretches, wall, //exercises
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
        {cardio.map(([group, exercises]) =>
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
                  {exercises.map(({ id,title }) =>
                    <ListItem key={title} button>
                      <ListItemText 
                        primary={title}
                        onClick={() => onSelect(id)} 
                      />
                    </ListItem>
                  )}
                </List>
              </Fragment>
          : null
        )}
        {stretches.map(([group, exercises]) =>
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
                {exercises.map(({ title }) =>
                  <ListItem key={title} button>
                    <ListItemText
                      primary={title}
                    />
                  </ListItem>
                )}
              </List>
            </Fragment>
            : null
        )}
        {/* WALL WARM UPS ARE PUT IN SINGLE GROUP */}
        {wall.map(([group, exercises]) => 
          !focus || focus === group
            ? <Fragment
                key={group}
              >
                <Typography
                  variant='h5'
                  style={{textTransform: 'capitalize'}}
                >
                  {group}
                </Typography>
                <List component='ul'>
                  {exercises.map(({title}) =>
                    <ListItem key={title} button>
                      <ListItemText primary={title}/>
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