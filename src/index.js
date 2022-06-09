import React from 'react';
// This is what connects our React App to our Public/index.html
import ReactDOM from 'react-dom';
// All of the componets will get passed through using the "App" and then rendered to the index.html file
import App from './components/App';

// Passes our react app and fetches the document (root element of our app)
ReactDOM.render(<App />, document.getElementById('root'));
