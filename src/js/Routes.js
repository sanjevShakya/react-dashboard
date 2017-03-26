import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { scrollOnRouteChange, addBaseName } from './util/reactRouter';

import App from './App';

//const history = addBaseName(browserHistory, process.env.BASE_HREF || '/');
//scrollOnRouteChange(history);

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route name='Dashboard' path='/' component={App}/>
      </Router>
    );
  }
}

export default Routes;