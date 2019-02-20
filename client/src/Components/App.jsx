import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { categories, warmups } from '../store.js';

export default class extends Component {
  state = {
    warmups,
    warmupsByGroup: [...warmups['CARDIO'], ...warmups['STRETCH'], ...warmups['WALL']],
    exercise: {}
  }

  getExercisesByGroup() {
    let exercisesByGroup = {};
    for (let key in this.state.warmups) {
      let values = Object.entries(this.state.warmups[key].reduce((exercises, exercise) => {
        const {group} = exercise;

        // ES5 if... else 
        // if (exercises[group] != undefined) {
        //   exercises[group] = [...exercises[group], exercise];
        // } else {
        //   exercises[group] = [exercise];
        // }
        
        // ES6 ternary operator
        exercises[group] = exercises[group] ? [...exercises[group], exercise] : [exercise];
        
        return exercises;
      }, {})
      )
      exercisesByGroup[key] = values; 
    }

    return exercisesByGroup;
  }

  handleSelectedFocus = focus => {
    this.setState({focus})
  }

  handleSelectedExercise = id => {
    this.setState(({warmupsByGroup}) => ({
        exercise: warmupsByGroup.find(ex => ex.id === id),
    }))
  }

  render() {
    const {CARDIO, STRETCH, WALL} = this.getExercisesByGroup()
    ,
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