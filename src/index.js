import React from 'react';
// This is what connects our React App to our Public/index.html
import ReactDOM from 'react-dom/client';

// React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces.
import { BrowserRouter } from 'react-router-dom';

// All of the componets will get passed through using the "App" and then rendered to the index.html file
import App from './components/App';

// Passes our react app and fetches the document (root element of our app)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
