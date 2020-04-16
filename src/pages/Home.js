import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import './home.css';

import RightReact from './RightReact';
import RightVue from './rightVue';
import RightAngular from './rightAngular';

const Home = () => {
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li><Link to="/react">React</Link></li>
            <li><Link to="/vue">Vue</Link></li>
            <li><Link to="/angular">Angular</Link></li>
          </ul>
        </div>
        <div className="rightMain">
          <Switch>
            <Route path="/react" exact component={RightReact} />
            <Route path="/vue" exact component={RightVue} />
            <Route path="/angular" exact component={RightAngular} />
            <Redirect exact from="/" to="/react" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Home;
