import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Users from './pages/Users';
import './App.css';

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="users">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index}/>
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;

