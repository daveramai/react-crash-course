import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    // An array of Todos created
    todos: [
      {
        // First object in the array
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        // Second object in the array
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        // Third object in the array
        id: 3,
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }

  // e. Update the array with the id received from step d.
  ToggleComplete = (id) => {
        // console.log(id)
        // change the state for the id received
        this.setState({ todos: this.state.todos.map(item => {
          if(item.id === id) {
            item.completed = !item.completed //toggle state value here
          }
          return item; //send state value down the DOM to Todoitem??
        }) });
  } //end custom arrow function

  render() {
    // test access to state using chrome tools
    //console.log(this.state.todos)
    return (
      <div className="App">
        {/* Add comment using CTRL+/ */}
        {/* renders the todos component and pass state to it */}
        {/* d. added ToggleComplete as a function to receive the value from Todos.js see step c. */}
        <Todos todos={this.state.todos} markComplete={ this.ToggleComplete } />
      </div>
    );
  }
  
}

export default App;
