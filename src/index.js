import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./components/Index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inscribete from "./components/Inscribete";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/inscribete" element={<Inscribete/>} />
        {/* Page not found */}
        <Route path="*" element={<Index></Index>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
