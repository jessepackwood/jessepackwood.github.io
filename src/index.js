import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }from 'react-router-dom'
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const route = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();
