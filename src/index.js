import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login.js';
import ManageIP from './manageIP.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login/> */}
    <ManageIP/>
  </React.StrictMode>
);