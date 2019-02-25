import React from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Fab, FormHelperText } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = {
  Button: {
    marginTop: 5,
    marginBottom: 20,
    left: '80%'
  }
}

export default class AddExercise extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Fab style={styles.Button} variant="round" color="primary" onClick={this.handleClickOpen}>
          <AddIcon fontSize='large'/>
        </Fab>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle 
            id="form-dialog-title"
            style={{ textTransform: 'capitalize' }}
          >
            Add {this.props.group} Exercise
          </DialogTitle>
          <DialogContent>
            <TextField
              required
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
            />
            <TextField
              required
              margin="dense"
              id="name"
              label="Description"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
