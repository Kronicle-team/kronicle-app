import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import reportWebVitals from './reportWebVitals';

import "./styles/global.module.css";

// import font and font weight
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/200-italic.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/300-italic.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/500-italic.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/600-italic.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/700-italic.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/800-italic.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/montserrat/900-italic.css";


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
