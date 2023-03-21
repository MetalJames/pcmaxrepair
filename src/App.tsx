import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Banner, NavBar, IPhoneRepair, Footer } from "./components";
import { ContactUs, AboutUs, Home, FAQ } from "./pages";

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <BrowserRouter>
        <header>
          <Banner />
          <NavBar />
        </header>
        <main className='flex-grow'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/:id" element={<IPhoneRepair />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact_us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
