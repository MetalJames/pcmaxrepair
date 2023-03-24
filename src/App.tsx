import React from "react";
import { Helmet } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Banner, NavBar, Footer } from "./components";
import { ContactUs, AboutUs, Home, FAQ, Services } from "./pages";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <header>
          <Banner />
          <NavBar />
        </header>
        <Helmet>
          <title>
            Max Repair - iPhone, Cell Phone and Laptop Repair Store in Port
            Credit Mississauga
          </title>
          <meta
            name="description"
            content="iPhone, Cell Phone, MacBook, and Laptop Repair Store in Port Credit Mississauga"
          />
          <meta
            name="keywords"
            content="mobile phone repair shops near me, iphone repair, 
            smartphone repair, laptop repair, macbook repair,
            electronic repair shop port credit"
          />
        </Helmet>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/:id" element={<Services />} />
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
