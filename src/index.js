import React from "react";
import ReactDOM from "react-dom/client";
import ProductClass from "./components/ProductClass";
import RateClass from "./components/RateClass";
import About from "./components/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <About/>
    <ProductClass />
    <RateClass />
    <NavLayout /> 
    

  </React.StrictMode>
);

