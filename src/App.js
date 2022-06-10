import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Account from "./components/Account/Account";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Logout from "./components/Logout/Logout";
import Reviews from "./components/Reviews/Reviews";
import Search from "./components/Search/Search";
import Users from "./components/Users/Users";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Product from "./components/Product/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/globalUserContext";
import NewReview from "./components/NewReview/NewReview.jsx";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newReview/:userId/:productId" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/me" element={<Account />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </GlobalProvider>
  );
}

export default App;