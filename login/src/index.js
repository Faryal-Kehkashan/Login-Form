import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Admin from "./Pages/Admin.js";
import Welcome from "./Pages/Welcome.js";
import Home from "./Pages/Home.js";
import User from "./Pages/User.js";
import reportWebVitals from './reportWebVitals';
// import Navbar from "./Pages/Assets/Components/Navbar.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
  <React.StrictMode>
    
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path = "Welcome" element={<Welcome />}></Route>
      <Route path = "Admin" element={<Admin />}></Route>
      <Route path = "User" element={<User />}></Route>
    </Routes>
  </BrowserRouter>

  </React.StrictMode>
  </>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
