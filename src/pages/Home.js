import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import './home.css';

import RightReact from './RightReact';
import DemoBase from '../components/demo_base';
import DemoRedux from '../components/demo_redux';
import DemoReactRedux from '../components/demo_react_redux';

const Home = () => {
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li><Link to="/react">React</Link></li>
            <li><Link to="/base">Base</Link></li>
            <li><Link to="/redux">Redux</Link></li>
            <li><Link to="/react_redux">ReactRedux</Link></li>
          </ul>
        </div>
        <div className="rightMain">
          <Switch>
            <Route path="/react" exact component={RightReact} />
            <Route path="/base" exact component={DemoBase} />
            <Route path="/redux" exact component={DemoRedux} />
            <Route path="/react_redux" exact component={DemoReactRedux} />
            <Redirect exact from="/" to="/react" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Home;