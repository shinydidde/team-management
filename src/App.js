import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import './App.scss';
import Home from './components';
import Certificate from './components/certificate';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Route exact path='/' component={Home}/>
          <Route path='/star-performer-of-the-month' component={Certificate}/>
      </HashRouter>
    </div>
  );
}

export default App;
