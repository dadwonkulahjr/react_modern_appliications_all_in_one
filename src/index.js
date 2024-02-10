import React from "react";
import ReactDOM from "react-dom/client";
// import Footer from "./Components/LifeCyclOpedia/Layout/Footer";
// import MainBody from './Components/TaskOPadia/Layout/MainBody';
import "../src/css/style.css";
// import StudentIndex from "./Components/LifeCyclOpedia/Students/StudentIndex";
// import StudentIndexFunc from "./Components/LifeCyclOpedia/Students/StudentIndexFunc";
import Header from "./Components/LifeCyclOpedia/Layout/Header";
// import ContactIndex from './Components/ContactOPedia/Contacts/ContactIndex';
// import Header from './Components/CountOPadia/Layout/Header/Header';
// import Counter from './Components/CountOPadia/Counter/Counter';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <div className='px-4'>
    {/* <MainBody/> */}
    {/* <Header/>
    <Counter/> */}
    {/* </div>} */}
    {/* <ContactIndex/> */}
    <Header />
  </React.StrictMode>
);
