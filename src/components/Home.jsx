import React, { Component } from 'react';
import '../App.css';
import Sidebar from './sidebar'
import Introduction from './introduction'
import About from './about'
import Projects from './projects'
import Timeline from './timeline'

class Home extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          <Projects></Projects>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default Home;
