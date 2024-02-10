import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/WatchOPedia/Counter/Layout/Header";
import Footer from "./Components/WatchOPedia/Counter/Layout/Footer";
// import MainBody from './Components/TaskOPadia/Layout/MainBody';
import "../src/css/style.css";
import Counter from "./Components/WatchOPedia/Counter/Counter";
import MoviePage from "./Components/MovieOpedia/MoviePage";
// import StudentIndex from './Components/LifeCyclOpedia/Students/StudentIndex';
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
    {/* <StudentIndex/> */}
    <Header />
    <Footer />
    <Counter />
    <MoviePage />
  </React.StrictMode>
);
