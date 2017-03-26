import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return(
      <div className="sidebar" data-color="purple">
        <div className="sidebar-wrapper">
          <div className="logo">
            <Link to='/' className="simple-text">
              Creative Tim
            </Link>
          </div>

          <ul className="nav">
            <li className="active">
              <Link to='/'>
                <i className="pe-7s-graph"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className="pe-7s-user"></i>
                <p>User Profile</p>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className="pe-7s-note2"></i>
                <p>Table List</p>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className="pe-7s-news-paper"></i>
                <p>Typography</p>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className="pe-7s-science"></i>
                <p>Icons</p>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className="pe-7s-map-marker"></i>
                <p>Maps</p>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className="pe-7s-bell"></i>
                <p>Notifications</p>
              </Link>
            </li>
            <li className="active-pro">
              <Link to='/'>
                <i className="pe-7s-rocket"></i>
                <p>Upgrade to PRO</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;