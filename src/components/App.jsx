import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <CssBaseline />
      <main>
        <Switch>
          <Route path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/movies">
            <h1>Movies</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
