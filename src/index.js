import React from 'react';
import ReactDOM from 'react-dom/client';
import MainBody from './Components/TaskOPadia/Layout/MainBody';
import "../src/css/style.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div className='px-4'>
    <MainBody/>
  </div>
  
  </React.StrictMode>
);

