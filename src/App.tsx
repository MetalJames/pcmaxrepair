import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Banner, NavBar, Footer } from "./components";
import { ContactUs, AboutUs, Home, FAQ, Services } from "./pages";

function App() {

      useEffect(() => {
        // define a custom handler function
        // for the contextmenu event
        const handleContextMenu = (e: any) => {
          // prevent the right-click menu from appearing
          e.preventDefault();
        };

        // attach the event listener to
        // the document object
        document.addEventListener("contextmenu", handleContextMenu);

        // clean up the event listener when
        // the component unmounts
        return () => {
          document.removeEventListener("contextmenu", handleContextMenu);
        };
      }, []);

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
          <link rel="canonical" href="/" />
        </Helmet>
        <main className="flex-grow">
          <Routes>
            <Route path="/active_tab?" element={<Home />} />
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
