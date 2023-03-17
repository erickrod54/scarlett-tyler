import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context.js';

/*Scarlett-taylor Portfolio - version 2.05 - 
* index.js file - Features: 
*  
*     --> Wrapping the 'App' with the 
*          provider
*
* Note: this file will be refactor
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
       
  </React.StrictMode>
);


