import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Dashboard from "../pages/Dashboard";


export default function Rutas() {
 
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
