import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { categories, warmups } from '../store-redo.js';

export default class extends Component {
  state = {
    warmups,
    exercise: {}
  }

  // CURRENTLY UNABLE TO FUNCTION AS INTENDED. VALUES ONLY RETURN ONCE FOR THE LOOP AND NO CLEAR VARIABLE TO ASSIGN FOR ALL COMPONENTS.  
  getExercisesByGroup() {
    let exercisesByGroup = {};
    for (let key in this.state.warmups) {
      console.log('key', key);
      let values = Object.entries(this.state.warmups[key].reduce((exercises, exercise) => {
        const {group} = exercise;
        console.log('exercise', exercise === undefined)
        if (exercises[group] != undefined) {
          exercises[group] = [...exercises[group], exercise];
        } else {
          exercises[group] = [exercise];
        }
        return exercises;

      }, {})
      )
      exercisesByGroup[key] = values; 
    }
    return exercisesByGroup;
  }

  getCardioByGroup() {
    let values = Object.entries(this.state.warmups['CARDIO'].reduce((exercises, exercise) => { 
      const {group} = exercise;

      exercises[group] = exercises[group] ? [...exercises[group], exercise] : [exercise];

      return exercises;
    }, {})
    )
    return values;
  }

  getStretchesByGroup() {
    let values = Object.entries(this.state.warmups['STRETCH'].reduce((exercises, exercise) => {
      const {group} = exercise;

      if (exercises[group] != undefined) {
        exercises[group] = [...exercises[group], exercise];
      } else {
        exercises[group] = [exercise];
      }
      return exercises;
    }, {})
    )
    return values;
  }

  getAllWallExercises() {
    let values = Object.entries(this.state.warmups['WALL'].reduce((exercises, exercise) => {
      const {group} = exercise; 

      exercises[group] = exercises[group] ? [...exercises[group], exercise] : [exercise];

      return exercises; 
    }, {})
    )
    return values;
  }

  handleSelectedFocus = focus => {
    this.setState({
      focus
    })
  }

  handleSelectedExercise = id => {
    this.setState(({warmups}) => ({
        exercise: warmups['CARDIO'].find(ex => ex.id === id),
      // exercise: warmups['STRETCH'].find(ex => ex.id === id),
      // exercise: warmups['WALL'].find(ex => ex.id === id)
    }))
  }

  render() {

    const cardio = this.getCardioByGroup()
    // console.log("hey", cardio)
    const stretches = this.getStretchesByGroup()
    const wall = this.getAllWallExercises()
    const allEx = this.getExercisesByGroup()
    console.log('all', allEx)
    ,
    // console.log(wall)
    {focus, exercise} = this.state

    return  (<Fragment>
        <Header />
        <Exercises
          exercise = {exercise}
          onSelect = {this.handleSelectedExercise} 
          focus = {focus}
          cardio = {cardio}
          stretches = {stretches}
          wall = {wall}
        />
        <Footer 
          focus = {focus}
          categories = {categories}
          onSelect = {this.handleSelectedFocus}
        />
      </Fragment>
    );
  }
}