import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/home/About"
import Contact from "./pages/home/Contact" 
import Products from "./pages/home/Products"
import SlaviaFeatures from "./pages/SlaviaFeatures" 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/slavia-features" element={<SlaviaFeatures/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
