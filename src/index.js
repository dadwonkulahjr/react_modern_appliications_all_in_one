import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./Components/WatchOPedia/Counter/Layout/Header";
// import Footer from "./Components/WatchOPedia/Counter/Layout/Footer";
// import MainBody from './Components/TaskOPadia/Layout/MainBody';
import "../src/css/style.css";
import Header from "./Components/RoutOpedia/Layout/Header";
import { Home } from "./Components/RoutOpedia/Layout/Pages/Home";
import { About } from "./Components/RoutOpedia/Layout/Pages/About";
import { Product } from "./Components/RoutOpedia/Layout/Pages/Products/Product";
import { ProductList } from "./Components/RoutOpedia/Layout/Pages/Products/ProductList";
import { CreateProduct } from "./Components/RoutOpedia/Layout/Pages/Products/CreateProduct";
import { ProductDetails } from "./Components/RoutOpedia/Layout/Pages/Products/ProductDetails";
import { NotFound } from "./Components/RoutOpedia/Layout/Pages/NotFound";
import { CryptoDetails } from "./Components/RoutOpedia/Layout/Pages/CryptoDetails";
// import Counter from "./Components/WatchOPedia/Counter/Counter";
// import MoviePage from "./Components/MovieOpedia/MoviePage";
// import StudentIndex from './Components/LifeCyclOpedia/Students/StudentIndex';
// import Footer from "./Components/LifeCyclOpedia/Layout/Footer";
// import MainBody from './Components/TaskOPadia/Layout/MainBody';
// import "../src/css/style.css";
// import StudentIndex from "./Components/LifeCyclOpedia/Students/StudentIndex";
// import StudentIndexFunc from "./Components/LifeCyclOpedia/Students/StudentIndexFunc";
// import Header from "./Components/LifeCyclOpedia/Layout/Header";
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
    {/* <Header />
    <Footer />
    <Counter />
    <MoviePage /> */}
    {/* <Header /> */}
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/cryptodetail/:queryStrings/:id"
          element={<CryptoDetails />}
        ></Route>
        <Route
          path="/cryptodetail/:queryStrings"
          element={<CryptoDetails />}
        ></Route>
        <Route path="/cryptodetail" element={<CryptoDetails />}></Route>
        <Route path="product">
          <Route path="" element={<Product />}></Route>
          <Route path="list" element={<ProductList />}></Route>
          <Route path="create" element={<CreateProduct />}></Route>
          <Route path="details/:productId" element={<ProductDetails />}></Route>
          <Route path="details" element={<ProductDetails />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
