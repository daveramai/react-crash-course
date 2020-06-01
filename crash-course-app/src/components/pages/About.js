import React from 'react'

function About() {
    return (
        // <div>
            
        // </div>
        // Ghost element - doesn't show in the DOM but we need it if not using an HTML element like DIV etc.
        <React.Fragment>
            <h1>About</h1>
            <p>This is the Todo list app v1.0.0. It is part of a React crash course</p>
        </React.Fragment>
    )
}

export default About;
