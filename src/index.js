import React from 'react';
import ReactDOM from 'react-dom/client';
// import MainBody from './Components/TaskOPadia/Layout/MainBody';
import "../src/css/style.css";
import Header from './Components/CountOPadia/Layout/Header/Header';
import Counter from './Components/CountOPadia/Counter/Counter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div className='px-4'>
    {/* <MainBody/> */}
    <Header/>
    <Counter/>
  </div>
  
  </React.StrictMode>
);

