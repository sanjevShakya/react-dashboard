import React, { Component } from 'react';
import '../css/App.css';

// Bootstrap core CSS
import '../css/bootstrap.min.css';
// Animation Lib for notification
import '../css/animate.min.css';
// Light Bootstrap Table core css
import '../css/light-bootstrap-dashboard.css';
// Fonts and icons
import '../css/font-awesome.css';
import '../css/pe-icon-7-stroke.css';

// Core Js Files
import './custom-ui/jquery-1.10.2';
import './custom-ui/bootstrap.min';
// Notification Plugin
import './custom-ui/bootstrap-notify';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default App;
