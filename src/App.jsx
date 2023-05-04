import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailGame from "./pages/detailgame";
import ForgotPass from "./pages/forgotPass";
import Home from "./pages/home";
import Login from "./pages/login";
import ProfileUser from "./pages/profileUser";
import Register from "./pages/register";
import Wishlist from "./pages/wishlist";
import "./styles/style.css";
import "./styles/swipper.css";
import GenrePage from "./pages/pages Genres/ganrePage";
import Released from "./pages/released";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profileUser" element={<ProfileUser />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/released" element={<Released />} />
        <Route path="/detail/:id" element={<DetailGame />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/genre/:genre" element={<GenrePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
