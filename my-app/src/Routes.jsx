import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/routes/home";
import Products from "./components/routes/products";
import Login from "./components/routes/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={<Navigate to="/home" replace />}
      />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;