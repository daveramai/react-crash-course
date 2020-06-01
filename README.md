### React Crash Course
Followed Traversy youtube video https://www.youtube.com/watch?v=sBws8MSXN7A

In this crash course i learned what React JS is and the fundamentals such as components, state, props, JSX, events, etc.

## Traversy code for tutorial
See link: https://github.com/bradtraversy/react_crash_todo/blob/master/src/App.css

_______________________________________________________

YT link:  https://www.youtube.com/watch?v=sBws8MSXN7A
Traversy repo for video: https://github.com/bradtraversy/react_crash_todo

Introduction:
 - it is a JS library created by Facebook.
 - It runs on the client side
 - Used to build UIs and FE applications
 - Esssentially the "V" in MVC

Why use it:
 - easier to use
 - uses JSX to incorporate JS in markup
 - Virtual DOM
 - Uses independent components with their own state
 - its a single page application framework

 ==========================================================================

How to get started:
 - Create-React-App tool to spin up a React App
 - Uses Webpack but needs no configs
 - comes with a web server integrated with hot load.

Requires:
 - NodeJS installed
 - React Developer Tools for Chrome

Create the react app using npx command - which will allow you to use the app without installing on your system
Unlike npm (which may be used to create static files for production?)
#npx create-react-app crash-course-app

Start web server on http://localhost:3000/
#npm start

File Structure:
- package.json - has config info, dependencies, webpack stuff, scripts etc.
- public/index.html - the main single page. everything outputs int he "root" div
- src/index.js - entry point to react basically. inserts the app component into the root element
- src/App.js - this is your app component
==========================================================================

Clean up app files to sync with crash course video

- delete src/index.css and update src/index.js to remote import line
- delete src/logo.svg and update src/App.js to remove the import line
  - also delete everything in the main div and convert function to a class as seen on the video
- update src/App.css with the basic entries from video (refer to Traversy Gh page)

Git status for commit #4:
modified:   crash-course-app/src/App.css
modified:   crash-course-app/src/App.js
deleted:    crash-course-app/src/index.css
modified:   crash-course-app/src/index.js
deleted:    crash-course-app/src/logo.svg
==========================================================================

Create components - Todos, Totoitem

#mkdir /src/components
#touch /src/components/Todos.js
- Update file with contents from App.js and update entries
- Import Todos.js in App.js to include Todos component and display component in render method
- Apply state in App.js for Todos component by creating state with array of Todos
- pass the state as props to the Todos component
- loop through the todos props on Todos component using JS map function (similar to foreach)

- Create the Todoitem component and use the ES7 extension to get the class template setup
- pass each todo object as a prop from the Todos component to the Todoitem component and render it there.

Git status for commit #5:
modified:   App.js
new file:   components/Todoitem.js
new file:   components/Todos.js
==========================================================================

Look at Style @ 34:05 in video

- Create style function in Todoitem class and apply to each item
- have a checkbox next to each item and add an event to it e.g. onchange/onclick etc.

**dificult step here**
- use this.props.markComplete and this.markComplete to pass information UP the DOM
  from Todoitem.js --> Todos.js --> App.js in order to update the array completed value when a checkbox is checked
  - This is necessary since React is Unidirectional remember!
- Complete the Toggle Complete steps from step a to step e


Git status for commit #7:
modified:   crash-course-app/src/App.js
modified:   crash-course-app/src/components/Todoitem.js        
modified:   crash-course-app/src/components/Todos.js

==========================================================================

Add delete functionality for a Todo item
- similar step like above a-e but using filter function
- create the header component (simple enough markup)

Git status for commit #8:
modified:   App.js
modified:   components/Todoitem.js
modified:   components/Todos.js
new file:   components/layout/Header.js
==========================================================================

Add todo item functionality

- create /component/Addtodo.js (use rce+TAB to complete template inside file)
- installed new module: npm i uuid # to generate random id 

Git status for commit #9:
new file:   package-lock.json
modified:   package.json
modified:   src/App.css
modified:   src/App.js
new file:   src/components/AddTodo.js

==========================================================================

Learn about React Router

- stop the app and install the router module: #npm i react-router-dom
- restart the app: #npm start
- create /components/pages/About.js
- updated App.js to add two routes for home page and about
- updated the Header.js to add links to the heading for home and about

Git status for commit #10:
modified:   package-lock.json
modified:   package.json
modified:   src/App.js
modified:   src/components/layout/Header.js
new file:   src/components/pages/About.js

==========================================================================

How to make HTTP requests

 - install Axios React library to make http calls
   - stop the server and run: #npm i axios
 - create componentDidMount lifecycle emthod in App.js and pull and populate the todos array from Jsonplaceholder site

 - Update addTodo to make POST requests to Jsonplaceholder site to add new todo items
   - it doesn't actually save to their server but it does completes the request and get a response so it mimics a backend
 - no longer need the uuid module for geenrating an id

 - Update delTodo with similar steps
 - Update PropTypes for AddTodo.js, Todoitem.js and Todos.js


Git status for commit #11:
modified:   crash-course-app/package-lock.json
modified:   crash-course-app/package.json
modified:   crash-course-app/src/App.js
modified:   crash-course-app/src/components/AddTodo.js
modified:   crash-course-app/src/components/Todoitem.js        
modified:   crash-course-app/src/components/Todos.js

==========================================================================
 Timelines:

 # Creating Class Component
20:48

# State
22:52

# Passing State as Prop to Component
24:57

# Looping through props and output
26:17

# Adding key to list item
31:19

# PropTypes
31:56

# Style components
34:07

# Add style to a method
35:46

# Why arrow functions and .bind(this)
41:33

# Component drilling
42:26

# Passing props through methods using component drilling
45:57 

# Deconstructing
46:35

# Updating state through a method
47:57

# Toggle state
49:18

# Submit events
1:09:21

# React Router
1:15:30

# Links
1:23:29

# Http GET request
1:25:56

# Http POST request
1:30:12

# Http DELETE request
1:32:51

# Adding PropTypes
1:34:31
==========================================================================