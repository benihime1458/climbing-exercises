import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { categories, warmups } from '../store-redo.js';

export default class extends Component {
  state = {
    warmups,
  }

  // CURRENTLY UNABLE TO FUNCTION AS INTENDED. VALUES ONLY RETURN ONCE FOR THE LOOP AND NO CLEAR VARIABLE TO ASSIGN FOR ALL COMPONENTS. 
  getExercisesByGroup() {
    for (let key in this.state.warmups) {
      let values = Object.entries(this.state.warmups[key].reduce((exercises, exercise) => {
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

  render() {

    const cardio = this.getCardioByGroup()
    const stretches = this.getStretchesByGroup()
    const wall = this.getAllWallExercises(),
    // console.log(wall)
    {focus} = this.state

    return  (<Fragment>
        <Header />
        <Exercises 
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