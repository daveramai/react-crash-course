import React from 'react';
import './App.css';
// React router
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import Addtodo from './components/AddTodo';
import About from './components/pages/About';
import {v1 as uuid} from "uuid";

class App extends React.Component {
  state = {
    // An array of Todos created
    todos: [
      {
        // First object in the array
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        // Second object in the array
        id: uuid(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        // Third object in the array
        id: uuid(),
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

  // Delete Todo item
  DeleteTodo = (id) => {
    // console.log(id);
    // Only return only the items other than this id
    this.setState({
      // ... means we copy what's already there, so ... is the spread operator
      // filter out the item that matches withthe id provided
      todos: [...this.state.todos.filter(item => item.id !== id)]
    })

  } //end delete todo function

  AddTodo = (title) => {
    // console.log(title)
    // Add this value to our state as well - use spread operator to make a copy of the state currently
    const newTodo = {
      //manual id here for now
      id: uuid(),
      title: title,
      completed: false
    }

    this.setState({todos: [...this.state.todos, newTodo] });
  }


  render() {
    // test access to state using chrome tools
    //console.log(this.state.todos)
    return (
      // If we want to use router we have to wrap this with Router
      <Router>
        <div className="App">
          <div className="container">
              <Header />
              {/* ROUTE #1: We have to use a render prop for Router since its multiple components being routed here
                  Also: exact was used to separate / from /about (like a grep function)    
              */}
              <Route exact path="/" render={ props => (
                <React.Fragment>
                    <Addtodo addTodo={this.AddTodo} />
                    {/* Add comment using CTRL+/ */}
                    {/* renders the todos component and pass state to it */}
                    {/* d. added ToggleComplete as a function to receive the value from Todos.js see step c. */}
                    <Todos todos={this.state.todos} markComplete={ this.ToggleComplete } delTodo={ this.DeleteTodo } />
                </React.Fragment>
              )} />
              {/* Route #2: We use a component prop since the about is a single component here */}
               <Route path="/about" component={About} /> 
          </div>
        </div>
      </Router>
    );
  }
  
}

export default App;
