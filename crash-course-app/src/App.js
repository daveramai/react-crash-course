import React from 'react';
import './App.css';
// React router
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import Addtodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

class App extends React.Component {
  state = {
    // Fetch tTodos from JsonPlaceholder endpoint
    todos: []
  }

  // Another lifecycle method - runs before Render method
  componentDidMount() {
    // the .get line below gives us a promise then a response is receined 'res' with response data 'res.data'
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }) ) //we're pulling the todos from the website and populating the todos array
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter
      (item => item.id !== id)] }));
  } //end delete todo function

  AddTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      // simulate sending data to the server (POST request)
      title,
      completed: false
    })
    // this gives us a promise back - a response 'res' a response data 'res.data'
    .then(res => this.setState({todos: 
    [...this.state.todos, res.data] }) );
    
  }


  // This is a lifecycle method
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
