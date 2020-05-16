import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import './App.scss';
import Home from './components';
import Certificate from './components/certificate';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
          <Route path={process.env.PUBLIC_URL + '/star-performer-of-the-month'} component={Certificate}/>
      </HashRouter>
    </div>
  );
}

export default App;