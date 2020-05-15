import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import Home from './components';
import Certificate from './components/certificate';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/star-performer-of-the-month">
              <Certificate/>
            </Route>
            <Route path="/dashboard">
            <div>Test</div>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
