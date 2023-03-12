import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Banner, NavBar, Slider } from "./components";
import ContactUs from "./pages/ContactUs";
import IphoneRepair from "./components/IphoneRepair";
import AboutUs from "./pages/AboutUs";
import Home from './pages/Home';
import FAQ from "./pages/FAQ";

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
            <Route path="/iphone_repair" element={<IphoneRepair />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact_us" element={<ContactUs />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
