import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Banner, NavBar, Slider } from "./components";
import AboutUs from "./pages/AboutUs";
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Banner />
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/iphone_repair" element={<AboutUs />} />
            <Route path="/contact_us" element={<AboutUs />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
