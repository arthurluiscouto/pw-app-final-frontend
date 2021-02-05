import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Api from "./accesback";
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Api />
  </React.StrictMode>,
  document.getElementById('root')
);
