# Climbing Exercises App

An App designed to help climbers discover exercises, track their progress, and build a workout routine conducive to their climbing goals.

Be it strength, technique, flexibility, mentality, or just to continue their climbing stoke, I will continue to develop this app for the climbing community. 

Climbing is Awesome!!  

### 02072019: Warm Ups

- Currently developing the app with warm ups in mind as a starter. 
- The exercises are stored in a javascript file for now and is mainly for mockup until a database library is decided on later.

### 02112019: Filling Exercise Library

- Implemented rough look of left pane interface. Exercises are organized into groups within categories but categories still need to code selection function from footer. 

### 02202019: Refactoring Already

- Running into repeated code blocks. Currently refactoring to make code clean and more efficient for rest of the project
- Need to refactor selected exercise function in App.jsx to handle all focus categories
- Footer switches between focuses but is only using the warmups' group names to confirm working code 
- State and Lifecycle components need to be brushed up on

### 02212019: More Refactoring

- Was able to refactor the grouping of exercises into the warmupsByGroup state with the help of ES6 destructuring 

### 02222019: Diaglog Content, Passing Props

- Planning to use dialog blocks to facilitate CRUD functionality. 
- Props can be passed down components using 'this.props.[exampleprop]'
- Will eventually test material-ui icons