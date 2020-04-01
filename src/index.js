import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DemoBase from './demo_base';
import DemoRedux from './demo_redux';
import DemoReactRedux from './demo_react_redux';

const App = (
  <Provider store={ store }>
    <DemoBase />
    <DemoRedux />
    <DemoReactRedux />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));