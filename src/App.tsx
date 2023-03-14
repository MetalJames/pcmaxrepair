import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Banner, NavBar, Slider } from "./components";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Home from './pages/Home';
import FAQ from "./pages/FAQ";
import {
  IPhoneRepair,
  SmartphoneRepair,
  IPadTabletRepair,
  MacbookRepair,
  LaptopRepair,
  LogicBoardRepair,
  LiquidDamageRepair,
  GamingConsoleRepair,
  OtherElectronicsRepair,
} from "./pages/servicespages";

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
            <Route path="/:id" element={<IPhoneRepair />} />
            {/* <Route path="/smartphone_repair" element={<SmartphoneRepair />} />
            <Route path="/ipadtablet_repair" element={<IPadTabletRepair />} />
            <Route path="/macbook_repair" element={<MacbookRepair />} />
            <Route path="/laptop_repair" element={<LaptopRepair />} />
            <Route path="/logicboard_repair" element={<LogicBoardRepair />} />
            <Route path="/liquiddamege_repair" element={<LiquidDamageRepair />} />
            <Route path="/gamingconsole_repair" element={<GamingConsoleRepair />} />
            <Route path="/otherelectronic_repair" element={<OtherElectronicsRepair />} /> */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact_us" element={<ContactUs />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
