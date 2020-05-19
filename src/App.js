import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import $ from 'jquery';
import './App.scss';
import Home from './components';
import Certificate from './components/certificate';

class App extends Component {
  componentDidMount(){
    //restrict shift key press
    $(document).ready(function(){ 
      $("body").keydown(function(event) {
          if(event.shiftKey)
          {
              event.preventDefault();
          }
        });
      });
  }
    render() {
    return (
    <div className="App">
      <HashRouter>
          <Route exact path='/' component={Home}/>
          <Route path='/star-performer-of-the-month' component={Certificate}/>
      </HashRouter>
    </div>
  );
}
}

export default App;
