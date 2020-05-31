import React from 'react';
import Todoitem from './Todoitem';
// We should declare prop types (doesn't break app) -  a validation for properties that a component should have
import PropTypes from 'prop-types';

class Todos extends React.Component {

  render() {
    // check the props (state) passed to the component from the App.js - where the state was created  
    // console.log(this.props.todos)

    // NB: item is similar to foreach item in todos...
    return this.props.todos.map((item) => (
        // pass item to each Todoitem component
        // Each child in a list should have a unique "key" prop else an error will be seen in the dev tools although it wont break the application. But to
        //  supress it, create a key as seen below
        <Todoitem key={item.id} todo={ item }/>
    ));
  }
  
}

// PropTypes defined for this class (as good practice)
Todos.propTypes = {
    // todos is a prop of type array and is required
    todos: PropTypes.array.isRequired
}

export default Todos;
