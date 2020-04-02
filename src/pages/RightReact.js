import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './rightReact.css';

import DemoBase from '../components/demo_base';
import DemoRedux from '../components/demo_redux';
import DemoReactRedux from '../components/demo_react_redux';

const RightReact = () => {
  return (
    <Router>
      <div className="topNav">
        <ul>
          <li><Link to="/react/base">Base</Link></li>
          <li><Link to="/react/redux">Redux</Link></li>
          <li><Link to="/react/react_redux">ReactRedux</Link></li>
        </ul>
      </div>
      <div className="reactContent">
        <h3>React Demo</h3>
        <Route path="/react/base" component={DemoBase} />
        <Route path="/react/redux" component={DemoRedux} />
        <Route path="/react/react_redux" component={DemoReactRedux} />
      </div>
    </Router>
  );
}

export default RightReact;