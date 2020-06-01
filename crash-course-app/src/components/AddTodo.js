import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    // An example of a component state (only exist in this component not UP to the App.js etc.)
    state = {
        title: ''
    }

    // When type in the form the 'title' state is updated
    // as long as the e.target.name is the same as state name we can use it
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    //send input data UP to the App.js
    onSubmit = (e) => {
        // prevent from submitting form
        e.preventDefault();
        //set a prop with the value typed in the form
        this.props.addTodo(this.state.title);
        // clear the title state field
        this.setState({ title:''})
    }


    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    style={{ flex:'10' }} 
                    type="text" 
                    placeholder="Add todo..." 
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    className="btn" 
                    style={{ flex:'1' }} 
                    type="submit" 
                    value="Submit" 
                />
            </form>
        )
    }
} //end render

// PropTypes defined for this class (as good practice)
AddTodo.propTypes = {
    // todos is a prop of type array and is required
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
