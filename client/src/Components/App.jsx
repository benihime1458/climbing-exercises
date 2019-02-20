import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { categories, warmups } from '../store-redo.js';

export default class extends Component {
  state = {
    warmups,
    warmupsByGroup: {},
    exercise: {}
  }

  getExercisesByGroup() {
    let exercisesByGroup = {};
    for (let key in this.state.warmups) {
      let values = Object.entries(this.state.warmups[key].reduce((exercises, exercise) => {
        const {group} = exercise;
        // if (exercises[group] != undefined) {
        //   exercises[group] = [...exercises[group], exercise];
        // } else {
        //   exercises[group] = [exercise];
        // }
        
        // ternary operator
        exercises[group] = exercises[group] ? [...exercises[group], exercise] : [exercise];
        
        return exercises;
      }, {})
      )
      exercisesByGroup[key] = values; 
    }
    // let wut = this.state.warmups
    // console.log(Object.keys(wut))
    return exercisesByGroup;
  }

  handleSelectedFocus = focus => {
    this.setState({
      focus
    })
  }

  // work in progress... 
  // find a way to check key in warmups and find matching id for selected exercise
  handleSelectedExercise = id => {
    this.setState(({warmups}) => ({
        // exercise: warmups['CARDIO'].find(ex => ex.id === id),
      exercise: warmups['STRETCH'].find(ex => ex.id === id),
      // exercise: warmups['WALL'].find(ex => ex.id === id)
    }))
  }

  render() {
    const {CARDIO} = this.getExercisesByGroup()
    const {STRETCH} = this.getExercisesByGroup()
    const {WALL} = this.getExercisesByGroup()
    ,
    // console.log(wall)
    {focus, exercise} = this.state

    return  (<Fragment>
        <Header />
        <Exercises
          exercise = {exercise}
          onSelect = {this.handleSelectedExercise} 
          focus = {focus}
          cardio = {CARDIO}
          stretches = {STRETCH}
          wall = {WALL}
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