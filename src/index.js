import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';

const App = (
  <Provider store={ store }>
    <Home />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));