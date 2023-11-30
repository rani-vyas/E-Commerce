//import logo from './logo.svg';
import React, { useState } from "react";
import {BrowserRouter as Router, Routes,Route, Navigate} from "react-router-dom";
import './App.css';



import { Home } from "./components/home";
import  Category  from './components/Categories'
import { Orders } from "./components/orders";
import WishList from "./components/wishlist";
import { WomensCategory } from "./components/womens";
import { AboutUs } from "./components/about";
import { Contact } from "./components/contact";
import MensFashion from "./components/mensfashion";
import KidsClothes from "./components/kids";
import { Cart } from "./components/cart";
import { store } from "./store";
import { Provider } from "react-redux";
import { Social } from "./components/twitter";
import { Helpdesk } from "./components/help";
import { Payment } from "./components/payment";
import { Register } from "./components/register";
import { LogOut } from "./components/logout";
import { LogIn } from "./components/login";
import { Products } from "./components/product";




/*function setToken(userToken){
  localStorage.setItem('token',JSON.stringify(userToken))
    }
    function getToken(){
      const tokenString = localStorage.getItem('token')
      const userToken = JSON.parse(tokenString)
      return userToken?.token
    }*/
function App(){

  
  return(
    <div>
      
      <Provider store={store}>  
      console.log(store);

     <Router>
      <Routes>
        <Route path="/">  
        <Route index element={<Register />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/categories" element={<Category/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/wishlist" element={<WishList/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/womens" element={<WomensCategory/>}/>
          <Route path="/mensfashion" element={<MensFashion/>}/>
          <Route path='/kids' element={<KidsClothes/>}/>
          
          <Route path="/cart" element={< Cart/>}/>      
          <Route path="/help"  element={<Helpdesk/>}/>
          <Route path="/social" element={<Social/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/logout" element={<LogOut/>}/>
          <Route path="/product" element={<Products/>}/>
        </Route>
      </Routes>
    </Router>
    </Provider>
    </div>
)};

export default App;