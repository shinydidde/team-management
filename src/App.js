import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import $ from 'jquery';
import './App.scss';
import Home from './components';
import Certificate from './components/certificate';
import Tasks from './components/tasks';

class App extends Component {
  componentDidMount(){
    //restrict shift key press
    $(document).ready(function(){ 
      $("body").keydown(function(event) {
          if (event.keyCode === 123) { // Prevent F12
            return false;
          } else if (event.ctrlKey && event.shiftKey && event.keyCode === 73 ) { // Prevent Ctrl+Shift+I        
              return false;
          } else if (event.shiftKey || event.ctrlKey || event.ctrlKey && event.shiftKey && event.keyCode === 67){
            return false;
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
          <Route path='/tasks' component={Tasks}/>
      </HashRouter>
    </div>
  );
}
}

export default App;
