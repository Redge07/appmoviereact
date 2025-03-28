import React from "react";
import "./style/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Coeur from "./pages/Coeur";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/coeur" element={<Coeur />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
