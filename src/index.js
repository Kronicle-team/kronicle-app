import React from 'react';
import ReactDOM from 'react-dom';
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';
import reportWebVitals from './reportWebVitals';
import ProductDetailPage from './pages/product/ProductDetailPage'
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <ProductDetailPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
