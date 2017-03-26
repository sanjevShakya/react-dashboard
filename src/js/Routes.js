import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as routeConstants from './constants/routesConstants';
import App from './components/App';

//const history = addBaseName(browserHistory, process.env.BASE_HREF || '/');
//scrollOnRouteChange(history);

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route name='Dashboard' path={routeConstants.ROUTE_ROOT} component={App}/>
      </Router>
    );
  }
}

export default Routes;