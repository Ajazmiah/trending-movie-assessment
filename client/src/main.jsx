import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Favorite from "./components/Favorite/Favorite";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/movie/:id" element={<h1>heloo</h1>} />
        <Route path="/favorites" element={<Favorite/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
