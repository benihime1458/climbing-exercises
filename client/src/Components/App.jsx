import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { categories } from '../store.js';

export default class extends Component {
  states = {
    categories
  }

  render() {
    return  (<Fragment>
        <Header />
        
        <Exercises />

      <Footer categories={categories}/>
      </Fragment>
    );
  }
}