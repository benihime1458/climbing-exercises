import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { categories, cardio, stretches, wall } from '../store.js';

export default class extends Component {
  state = {
    stretches, cardio,
    stretch: {},
    cardioExercise: {}
  }

  getCardioByGroup() {
    let values = Object.entries(this.state.cardio.reduce((exercises, exercise) => {
      
      const {group} = exercise;

      exercises[group] = exercises[group] ? [...exercises[group], exercise] : [exercise];

      return exercises;

    }, {})
    )
    return values;
  }

  getStretchesByGroup() {
    // console.log('============ begin =========');
    let values = Object.entries(this.state.stretches.reduce((exercises, exercise) => {
      const {group} = exercise;
      //console.log(exercises);
      // console.log(group, exercises[group]);
      // exercises[group] = (exercises[group] != undefined) ? [...exercises[group], exercise] : [exercise];

      if (exercises[group] != undefined) {
        exercises[group] = [...exercises[group], exercise];
      } else {
        exercises[group] = [exercise];
      }

      //console.log(exercises[group], "hello");
      return exercises;
    }, {})
    )
    return values;
  }

  render() {

    const cardio = this.getCardioByGroup();
    const stretches = this.getStretchesByGroup();

    return  (<Fragment>
        <Header />
        
        <Exercises 
          cardio = {cardio}
          stretches = {stretches}
        />

        <Footer 
          categories = {categories}
        />
      </Fragment>
    );
  }
}