import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import TextEditorPlugin from './plugin';
import { spec } from './spec'


const App = () => (
  <SwaggerUI
    spec={spec}
    plugins={[TextEditorPlugin]}
  />
);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
