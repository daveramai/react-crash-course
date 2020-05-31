// Template created using ES7 React Redux... extension
// rce + Tab - to generate the template
import React, { Component } from 'react'
// We should declare prop types (doesn't break app) -  a validation for properties that a component should have
import PropTypes from 'prop-types';

export class Todoitem extends Component {

    // arrow function created for styling todo item
    getStyle = () => {
        // if (this.props.todo.completed) {
        //     return { textDecoration: 'line-through'}
        // } else return { textDecoration: 'none'}
        return { 
            //ternary operation used rather than above long way
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    } //end custom arrow function

    // Another arrow function used rather than regular function in order to
    // bind the *this.* variable/object etc. 
    // markComplete = (e) => {
    //     console.log(this.props)
    // } //end custom arrow function

    render() {
        // a. Deconstruct the props values to be reused easily below
        const { id, title } = this.props.todo;

        return (
            // Add a style to the div using a class function
            <div style={ this.getStyle() }>
                {
                // b. Add checkbox and pass the id value UP THE DOM back to the Todos component (nb: must bind this)
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id) } />

                /* Return the todo title sent from Todos component map function */}
                {/* Used deconstructed value for 'title' */}
                <p>{ title }</p> 
            </div>
        )
    } //end render


} // End class

// PropTypes defined for this class (as good practice)
Todoitem.propTypes = {
    // todos is a prop of type array and is required
    todo: PropTypes.object.isRequired
}


export default Todoitem
