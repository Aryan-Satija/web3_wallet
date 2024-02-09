import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Txprovider } from './context';
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Txprovider>
    <App />
    <ToastContainer/>
  </Txprovider>
);

reportWebVitals();
