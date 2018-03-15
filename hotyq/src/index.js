import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './layout/App/App';
// import './common/config/config'
import registerServiceWorker from './registerServiceWorker';

import Store from "./store/configStore.js"

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <App></App>
      {/* <Route path="/" component={App}/> */}
    </Router>
  </Provider>,document.getElementById('root'));

registerServiceWorker();
