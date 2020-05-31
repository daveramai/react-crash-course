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

  render() {
    // test access to state using chrome tools
    //console.log(this.state.todos)
    return (
      <div className="App">
        {/* Add comment using CTRL+/ */}
        {/* renders the todos component and pass state to it */}
        <Todos todos={this.state.todos} />
      </div>
    );
  }
  
}

export default App;
