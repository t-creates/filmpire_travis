import React from 'react';
// This is what connects our React App to our Public/index.html
import ReactDOM from 'react-dom/client';

// React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces.
import { BrowserRouter } from 'react-router-dom';

// React-Redux wraps are app to provide access to the store
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import store from './app/store';

// All of the componets will get passed through using the "App" and then rendered to the index.html file
import App from './components/App';

// Wrap the whole project in "theme" which allows us to use it throughout and gives us the ability to toggle through light and dark mode.
const theme = createTheme({});

// Passes our react app and fetches the document (root element of our app)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
);
