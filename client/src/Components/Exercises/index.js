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

export default ({stretches, cardio, wall}) =>
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {cardio.map(([group, exercises]) =>
        <Fragment
          key={group}
        >
          <Typography
            variant='h5'
            style={{textTransform: 'capitalize'}}
          >
            {group}
          </Typography>
          <List component="ul">
            {exercises.map(({title}) => 
              <ListItem key={title} button>
                <ListItemText primary={title} />
              </ListItem>
            )}
          </List>
        </Fragment>
        )}
        {stretches.map(([group, exercises]) =>
        <Fragment
          key={group}
        >
          <Typography
            variant='h5'
            style={{textTransform: 'capitalize'}}
          >
        {console.log("group:", group, "exercises:", exercises)}
            {group}
          </Typography>
          <List component="ul">
            {exercises.map(({title}) => 
              <ListItem key={title} button>
                <ListItemText primary={title} />
              </ListItem>
            )}
          </List>
        </Fragment>
        )}
        {/* DISPLAYING ALL WALL EXERCISES BECAUSE THEY ARE NOT SEPARATED INTO GROUPS */}
        <Fragment>
          <Typography
            variant='h5'
            style={{ textTransform: 'capitalize' }}
          >
            Wall Warm Ups
          </Typography>
          <List component="ul">
            {wall.map(exercise => 
              <ListItem key={exercise.id} button>
                <ListItemText primary={exercise.title}/>
              </ListItem>
            )}
          </List>
        </Fragment>
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography
          variant='display1'
        >
          Welcome!
        </Typography>
        <Typography
          variant='subheading'
          style={{marginTop: 20}}
        >
          Please select an exercise on the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>