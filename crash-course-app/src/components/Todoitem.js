// Template created using ES7 React Redux... extension
// rce + Tab - to generate the template
import React, { Component } from 'react'
// We should declare prop types (doesn't break app) -  a validation for properties that a component should have
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    render() {
        return (
            <div>
                {/* Return the todo title sent from Todos component map function */}
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

// PropTypes defined for this class (as good practice)
Todoitem.propTypes = {
    // todos is a prop of type array and is required
    todo: PropTypes.object.isRequired
}

export default Todoitem
